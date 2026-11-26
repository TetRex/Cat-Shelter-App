// Invented demo data based on the case description
import { Volunteer } from '../types';

export const VOLUNTEERS: Volunteer[] = [
  // The five demo users, one per persona
  { id: 'v1', name: 'Sanna Virtanen', personaId: 'P1', role: 'coordinator', canGiveMedication: true },
  { id: 'v2', name: 'Jere Korhonen', personaId: 'P2', role: 'volunteer', canGiveMedication: true },
  { id: 'v3', name: 'Raili Mäkinen', personaId: 'P3', role: 'volunteer', canGiveMedication: true },
  { id: 'v4', name: 'Pekka Laine', personaId: 'P4', role: 'volunteer', canGiveMedication: false },
  // P5 is new and not yet trained to give medication (Pr4)
  { id: 'v5', name: 'Aino Heikkinen', personaId: 'P5', role: 'volunteer', canGiveMedication: false },

  // Other volunteers
  { id: 'v6', name: 'Mikko Nieminen', role: 'volunteer', canGiveMedication: true },
  { id: 'v7', name: 'Laura Hämäläinen', role: 'volunteer', canGiveMedication: true },
  { id: 'v8', name: 'Ville Koskinen', role: 'volunteer', canGiveMedication: false },
  { id: 'v9', name: 'Emma Järvinen', role: 'volunteer', canGiveMedication: true },
  { id: 'v10', name: 'Oskari Lehtonen', role: 'volunteer', canGiveMedication: false },
  { id: 'v11', name: 'Helmi Salo', role: 'volunteer', canGiveMedication: true },
  { id: 'v12', name: 'Tuomas Rantanen', role: 'volunteer', canGiveMedication: false },
];
