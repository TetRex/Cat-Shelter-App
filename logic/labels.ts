// Every text the app shows for a status, a reason or an action (rule 6: labels come from one place)
import { ShiftType } from '../types';
import { ShiftStatus, SignUpBlock } from './shifts';

export const LABELS = {
  // Statuses (R2, R8)
  yourShift: 'Your shift',
  full: 'Full',
  free: 'Free',
  swapOffered: 'Swap offered',

  // Reasons (R4, R5, R6)
  shiftIsFull: 'This shift is full.',
  medicationLocked: 'Only trained volunteers can give medication.',
  trainedFirst: 'A trained volunteer must sign up first.',
  locked: 'Locked:',

  // Actions (R3, R8, R9)
  signUp: 'Sign up',
  offerSwap: 'Offer for swap',
  takeShift: 'Take this shift',
  showDetails: 'Tap to show details',
  hideDetails: 'Tap to hide details',

  // Empty states (R10, R12)
  noShifts: 'You have no shifts this week.',
  noNotes: 'No notes.',

  // Headings inside a shift (R10, R11)
  tasks: 'Tasks',
  cats: 'Cats',
  cat: 'Cat:',
  carrier: 'Carrier:',
  clinic: 'Clinic:',
  address: 'Address:',
  phone: 'Phone:',
};

export const SHIFT_TYPE_LABELS: Record<ShiftType, string> = {
  morning: 'Morning feeding and cleaning',
  evening: 'Evening feeding',
  adoptionVisit: 'Adoption visit',
  vetTrip: 'Vet trip',
};

// R2: for example 'Free', '1 of 2', 'Full' or 'Your shift'
export function statusLabel(status: ShiftStatus, count: number, capacity: number): string {
  if (status === 'yourShift') return LABELS.yourShift;
  if (status === 'full') return LABELS.full;
  if (status === 'free') return LABELS.free;
  return `${count} of ${capacity}`;
}

// R4, R6
export function signUpBlockLabel(block: SignUpBlock): string {
  return block === 'full' ? LABELS.shiftIsFull : LABELS.trainedFirst;
}

// R7: for example '4 shifts need people by Wednesday'
export function needPeopleSummary(count: number, lastDay: string): string {
  if (count === 0) return `All shifts are covered until ${lastDay}.`;
  if (count === 1) return `1 shift needs people by ${lastDay}`;
  return `${count} shifts need people by ${lastDay}`;
}
