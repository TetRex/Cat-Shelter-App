// Rules about shifts, as pure functions. The screens only call these.
import { Shift, Task, Volunteer } from '../types';
import { addDays } from './dates';
import { getTask, getVolunteer } from './lookup';

export type ShiftStatus = 'yourShift' | 'full' | 'free' | 'partlyFilled';

// Why the current user may not sign up for a shift
export type SignUpBlock = 'full' | 'trainedFirst';

// Dates ('YYYY-MM-DD') and times ('HH:MM') sort correctly as text
function sortByTime(shifts: Shift[]): Shift[] {
  return [...shifts].sort((a, b) => (a.date + a.start).localeCompare(b.date + b.start));
}

// R2
export function getShiftStatus(shift: Shift, userId: string): ShiftStatus {
  if (shift.volunteerIds.includes(userId)) return 'yourShift';
  if (shift.volunteerIds.length >= shift.capacity) return 'full';
  if (shift.volunteerIds.length === 0) return 'free';
  return 'partlyFilled';
}

// R1: shifts from `today` to today + 6 days, in time order
export function shiftsOfWeek(shifts: Shift[], today: string): Shift[] {
  const lastDay = addDays(today, 6);
  return sortByTime(shifts.filter((shift) => shift.date >= today && shift.date <= lastDay));
}

// R1: groups shifts that are already in time order under their date
export function groupByDay(shifts: Shift[]): { date: string; shifts: Shift[] }[] {
  const groups: { date: string; shifts: Shift[] }[] = [];
  for (const shift of shifts) {
    const lastGroup = groups[groups.length - 1];
    if (lastGroup !== undefined && lastGroup.date === shift.date) {
      lastGroup.shifts.push(shift);
    } else {
      groups.push({ date: shift.date, shifts: [shift] });
    }
  }
  return groups;
}

// R7: shifts from `today` to today + `days` that have fewer people than they need
export function shiftsNeedingPeople(shifts: Shift[], today: string, days: number): Shift[] {
  const lastDay = addDays(today, days);
  return sortByTime(
    shifts.filter(
      (shift) =>
        shift.date >= today && shift.date <= lastDay && shift.volunteerIds.length < shift.capacity,
    ),
  );
}

// R12: the user's own shifts, in time order
export function shiftsOfUser(shifts: Shift[], userId: string): Shift[] {
  return sortByTime(shifts.filter((shift) => shift.volunteerIds.includes(userId)));
}

// R5
export function isTaskLocked(task: Task, user: Volunteer): boolean {
  return task.requiresMedicationTraining && !user.canGiveMedication;
}

// R4, R6: the reason the user may not sign up, or null if they may
export function getSignUpBlock(shift: Shift, user: Volunteer): SignUpBlock | null {
  if (shift.volunteerIds.length >= shift.capacity) return 'full';

  const hasMedicationTask = shift.taskIds.some((id) => getTask(id).requiresMedicationTraining);
  const hasTrainedVolunteer = shift.volunteerIds.some((id) => getVolunteer(id).canGiveMedication);
  if (!user.canGiveMedication && hasMedicationTask && !hasTrainedVolunteer) return 'trainedFirst';

  return null;
}

// R3
export function signUp(shifts: Shift[], shiftId: string, userId: string): Shift[] {
  return shifts.map((shift) =>
    shift.id === shiftId ? { ...shift, volunteerIds: [...shift.volunteerIds, userId] } : shift,
  );
}

// R8
export function offerSwap(shifts: Shift[], shiftId: string, userId: string): Shift[] {
  return shifts.map((shift) => (shift.id === shiftId ? { ...shift, swapOfferedBy: userId } : shift));
}

// R9: the offering volunteer is replaced by the user who takes the shift
export function takeSwap(shifts: Shift[], shiftId: string, userId: string): Shift[] {
  return shifts.map((shift) =>
    shift.id === shiftId
      ? {
          ...shift,
          volunteerIds: shift.volunteerIds.map((id) => (id === shift.swapOfferedBy ? userId : id)),
          swapOfferedBy: undefined,
        }
      : shift,
  );
}
