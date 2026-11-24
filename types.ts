// Provisional: revise after docs/requirements.md

export type PersonaId = 'P1' | 'P2' | 'P3' | 'P4' | 'P5';

export type Role = 'coordinator' | 'volunteer';

export type Volunteer = {
  id: string;
  name: string;
  personaId?: PersonaId; // only the five demo users have a persona
  role: Role;
  canGiveMedication: boolean;
  drives: boolean;
};

// A volunteer who is one of the personas; the role switch offers these
export type DemoUser = Volunteer & { personaId: PersonaId };

export type ShiftType = 'morning' | 'evening' | 'adoptionVisit' | 'vetTrip';

export type Task = {
  id: string;
  title: string;
  requiresMedicationTraining: boolean;
};

export type Cat = {
  id: string;
  name: string;
  notes: string[];
};

export type Clinic = {
  id: string;
  name: string;
  address: string;
  phone: string;
};

export type VetTrip = {
  catId: string;
  carrier: string;
  clinicId: string;
};

export type Shift = {
  id: string;
  type: ShiftType;
  date: string; // 'YYYY-MM-DD'
  start: string; // 'HH:MM', 24-hour
  end: string; // 'HH:MM', 24-hour
  capacity: number; // how many people the shift needs
  volunteerIds: string[];
  taskIds: string[];
  catIds: string[];
  vetTrip?: VetTrip; // only for type 'vetTrip'
};
