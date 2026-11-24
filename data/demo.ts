// Invented demo data based on the case description
import { DemoUser, PersonaId } from '../types';
import { VOLUNTEERS } from './volunteers';

// Fixed demo date (a Monday). Never use new Date(): tests in the report must be repeatable.
export const TODAY = '2026-11-30';

// The demo users for the role switch: the volunteers who have a persona (P1–P5)
export const DEMO_USERS = VOLUNTEERS.filter(
  (volunteer): volunteer is DemoUser => volunteer.personaId !== undefined,
);

// Short persona descriptions from the case, shown in the role switch
export const PERSONA_TITLES: Record<PersonaId, string> = {
  P1: 'Coordinator',
  P2: 'Student',
  P3: 'Retired volunteer',
  P4: 'Driver',
  P5: 'New volunteer',
};
