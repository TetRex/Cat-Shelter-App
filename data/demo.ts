// Invented demo data based on the case description
import { VOLUNTEERS } from './volunteers';

// Fixed demo date (a Monday). Never use new Date(): tests in the report must be repeatable.
export const TODAY = '2026-11-30';

// The demo users for the role switch: the volunteers who have a persona (P1–P5)
export const DEMO_USERS = VOLUNTEERS.filter((volunteer) => volunteer.personaId !== undefined);
