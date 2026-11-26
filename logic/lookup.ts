import { CATS } from '../data/cats';
import { CLINICS } from '../data/clinics';
import { TASKS } from '../data/shifts';
import { VOLUNTEERS } from '../data/volunteers';

// Finds an item by id. The demo data is fixed, so a missing id is a bug in the data.
function findById<T extends { id: string }>(list: T[], id: string): T {
  const item = list.find((entry) => entry.id === id);
  if (item === undefined) {
    throw new Error(`No item with id "${id}" in the demo data`);
  }
  return item;
}

export function getTask(id: string) {
  return findById(TASKS, id);
}

export function getCat(id: string) {
  return findById(CATS, id);
}

export function getClinic(id: string) {
  return findById(CLINICS, id);
}

export function getVolunteer(id: string) {
  return findById(VOLUNTEERS, id);
}
