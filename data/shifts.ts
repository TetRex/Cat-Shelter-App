// Invented demo data based on the case description
import { Shift, ShiftType, Task } from '../types';

export const TASKS: Task[] = [
  { id: 't-feed', title: 'Feed the cats', requiresMedicationTraining: false },
  { id: 't-clean', title: 'Clean the litter boxes and rooms', requiresMedicationTraining: false },
  // Pätkä's 18:00 medicine: a trained task (Pr4) that today is only on a paper note (Pr5)
  { id: 't-med-patka', title: 'Give Pätkä the medicine at 18:00', requiresMedicationTraining: true },
  { id: 't-visitors', title: 'Show cats to adoption visitors', requiresMedicationTraining: false },
  { id: 't-drive', title: 'Drive the cat to the clinic and back', requiresMedicationTraining: false },
];

// How many people each shift type needs
const CAPACITY: Record<ShiftType, number> = {
  morning: 3,
  evening: 2,
  adoptionVisit: 2,
  vetTrip: 1,
};

// One week from TODAY (Monday 2026-11-30) to Sunday 2026-12-06
export const SHIFTS: Shift[] = [
  // Monday 30 November (TODAY)
  {
    id: 'mon-morning', type: 'morning', date: '2026-11-30', start: '07:00', end: '10:00',
    capacity: CAPACITY.morning, volunteerIds: ['v6', 'v7', 'v8'],
    taskIds: ['t-feed', 't-clean'], catIds: ['miro'],
  },
  {
    id: 'mon-evening', type: 'evening', date: '2026-11-30', start: '17:00', end: '19:00',
    capacity: CAPACITY.evening, volunteerIds: ['v9'],
    taskIds: ['t-feed', 't-med-patka'], catIds: ['patka'],
  },

  // Tuesday 1 December
  {
    // P3 (Raili) holds this shift every Tuesday morning
    id: 'tue-morning', type: 'morning', date: '2026-12-01', start: '07:00', end: '10:00',
    capacity: CAPACITY.morning, volunteerIds: ['v3', 'v11'],
    taskIds: ['t-feed', 't-clean'], catIds: ['miro'],
  },
  {
    // Pr1: an empty shift within the next two days
    id: 'tue-evening', type: 'evening', date: '2026-12-01', start: '17:00', end: '19:00',
    capacity: CAPACITY.evening, volunteerIds: [],
    taskIds: ['t-feed', 't-med-patka'], catIds: ['patka'],
  },

  // Wednesday 2 December
  {
    id: 'wed-morning', type: 'morning', date: '2026-12-02', start: '07:00', end: '10:00',
    capacity: CAPACITY.morning, volunteerIds: ['v2', 'v12'],
    taskIds: ['t-feed', 't-clean'], catIds: ['miro'],
  },
  {
    // Pr6: vet trip assigned to P4 (Pekka) with cat, carrier and clinic address
    id: 'wed-vet', type: 'vetTrip', date: '2026-12-02', start: '10:00', end: '12:00',
    capacity: CAPACITY.vetTrip, volunteerIds: ['v4'],
    taskIds: ['t-drive'], catIds: ['ruska'],
    vetTrip: { catId: 'ruska', carrier: 'Large grey carrier (shelf 2)', clinicId: 'c1' },
  },
  {
    id: 'wed-evening', type: 'evening', date: '2026-12-02', start: '17:00', end: '19:00',
    capacity: CAPACITY.evening, volunteerIds: ['v7', 'v9'],
    taskIds: ['t-feed', 't-med-patka'], catIds: ['patka'],
  },

  // Thursday 3 December
  {
    // Pr3: a full shift next to an empty one on the same day (see thu-evening)
    id: 'thu-morning', type: 'morning', date: '2026-12-03', start: '07:00', end: '10:00',
    capacity: CAPACITY.morning, volunteerIds: ['v6', 'v8', 'v11'],
    taskIds: ['t-feed', 't-clean'], catIds: ['miro'],
  },
  {
    // Pr3: nobody on this shift, while thu-morning is full
    id: 'thu-evening', type: 'evening', date: '2026-12-03', start: '17:00', end: '19:00',
    capacity: CAPACITY.evening, volunteerIds: [],
    taskIds: ['t-feed', 't-med-patka'], catIds: ['patka'],
  },

  // Friday 4 December
  {
    id: 'fri-morning', type: 'morning', date: '2026-12-04', start: '07:00', end: '10:00',
    capacity: CAPACITY.morning, volunteerIds: ['v5', 'v7', 'v12'],
    taskIds: ['t-feed', 't-clean'], catIds: ['miro'],
  },
  {
    id: 'fri-vet', type: 'vetTrip', date: '2026-12-04', start: '13:00', end: '15:00',
    capacity: CAPACITY.vetTrip, volunteerIds: [],
    taskIds: ['t-drive'], catIds: ['topi'],
    vetTrip: { catId: 'topi', carrier: 'Small blue carrier (shelf 1)', clinicId: 'c2' },
  },
  {
    id: 'fri-evening', type: 'evening', date: '2026-12-04', start: '17:00', end: '19:00',
    capacity: CAPACITY.evening, volunteerIds: ['v2', 'v9'],
    taskIds: ['t-feed', 't-med-patka'], catIds: ['patka'],
  },

  // Saturday 5 December
  {
    id: 'sat-morning', type: 'morning', date: '2026-12-05', start: '07:00', end: '10:00',
    capacity: CAPACITY.morning, volunteerIds: ['v6', 'v10'],
    taskIds: ['t-feed', 't-clean'], catIds: ['miro'],
  },
  {
    id: 'sat-adoption', type: 'adoptionVisit', date: '2026-12-05', start: '12:00', end: '15:00',
    capacity: CAPACITY.adoptionVisit, volunteerIds: ['v1', 'v7'],
    taskIds: ['t-visitors'], catIds: ['nuppu', 'viiru', 'kille'],
  },
  {
    id: 'sat-evening', type: 'evening', date: '2026-12-05', start: '17:00', end: '19:00',
    capacity: CAPACITY.evening, volunteerIds: ['v11'],
    taskIds: ['t-feed', 't-med-patka'], catIds: ['patka'],
  },

  // Sunday 6 December
  {
    id: 'sun-morning', type: 'morning', date: '2026-12-06', start: '07:00', end: '10:00',
    capacity: CAPACITY.morning, volunteerIds: ['v2', 'v8', 'v12'],
    taskIds: ['t-feed', 't-clean'], catIds: ['miro'],
  },
  {
    id: 'sun-adoption', type: 'adoptionVisit', date: '2026-12-06', start: '12:00', end: '15:00',
    capacity: CAPACITY.adoptionVisit, volunteerIds: ['v11'],
    taskIds: ['t-visitors'], catIds: ['nuppu', 'viiru', 'kille'],
  },
  {
    id: 'sun-evening', type: 'evening', date: '2026-12-06', start: '17:00', end: '19:00',
    capacity: CAPACITY.evening, volunteerIds: ['v6', 'v9'],
    taskIds: ['t-feed', 't-med-patka'], catIds: ['patka'],
  },
];
