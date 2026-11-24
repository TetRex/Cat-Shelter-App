// Invented demo data based on the case description
import { Cat } from '../types';

export const CATS: Cat[] = [
  // Miro and Pätkä and their notes come from the case; today these notes are on paper (Pr5)
  { id: 'miro', name: 'Miro', notes: ['Bites when picked up.'] },
  { id: 'patka', name: 'Pätkä', notes: ['Needs medicine at 18:00.'] },

  // Other cats
  { id: 'nuppu', name: 'Nuppu', notes: [] },
  { id: 'viiru', name: 'Viiru', notes: ['Shy with new people.'] },
  { id: 'kille', name: 'Kille', notes: [] },
  { id: 'ruska', name: 'Ruska', notes: ['Gets stressed in the car.'] },
  { id: 'topi', name: 'Topi', notes: [] },
];
