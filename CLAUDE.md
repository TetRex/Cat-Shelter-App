# Cat Shelter Shifts — code plan

Instructions for Claude Code. Put this file in the repository root as `CLAUDE.md`, or paste it as the first message of a session.

## 1. Context

This is the app part of a graded course project (Savonia UAS, Product Design & Development, autumn 2026). The app is a small Expo prototype that supports a report. The grade depends on **traceability**: every UI decision must point to a persona, a Kano class, a sub-function (F) and a requirement (R), and every R is tested against the app.

**Case.** A small cat shelter run by about 40 volunteers, with about 30 cats. Today: a shared spreadsheet, a WhatsApp group with 40 members, and a coordinator who phones people when a shift is empty.

- Shift types: morning feeding and cleaning 07:00–10:00, evening feeding 17:00–19:00, weekend adoption visits, vet trips by car. Fostering kittens at home is **out of scope**.
- Personas: P1 coordinator (part-time employee), P2 student (free hours change weekly), P3 retired volunteer (every Tuesday morning, old phone with large text, does not like apps), P4 driver (vet trips only; needs to know which cat, which carrier, which clinic), P5 new volunteer (not yet allowed to give medication alone).
- Problems: Pr1 empty shifts noticed the day before · Pr2 swaps lost in ~200 messages a week · Pr3 two people on one shift, nobody on another · Pr4 new volunteers take tasks they are not trained for · Pr5 cat notes on paper ("Miro bites when picked up", "Pätkä's medicine at 18:00") · Pr6 driver lacks clinic address or the right carrier.

**Decisions already made.** The app replaces the spreadsheet as the shift list and takes over shift swaps; WhatsApp and phone stay outside the app. No backend. No login: a demo role switch replaces it. TypeScript.

## 2. Hard rules

1. **English only**: code, comments, UI texts, demo data, README, commit messages.
2. **Stack**: Expo (`blank-typescript` template), functional components, React Native core components only. **Do not add any dependency without asking me first** (this includes navigation and safe-area libraries).
3. **No backend, no network, no storage.** Data lives in hard-coded arrays in `data/`; changes are held in `useState` and reset on reload. That is intended.
4. **Fixed demo date.** Use a constant `TODAY` in `data/demo.ts`, never `new Date()`, so that tests in the report can be repeated.
5. **Traceability tags.** Every UI element that implements a decision gets a comment `{/* UI-n → Rx, Ry */}`. Take the IDs **only** from `docs/decision-table.md` and `docs/requirements.md`. Never invent an ID. If an element has no ID yet, write `{/* UI-? → TODO */}` and list it in your summary.
6. **Never colour alone.** Every status has a text label ("Free", "1 of 2", "Full", "Your shift"…). Colour may be added on top. All labels come from one map in `logic/labels.ts`.
7. **Large text and big targets (P3).** Font sizes come from `theme.ts` only. Base body size is at least 18. Every touch target is at least 48×48 dp. **Never** set `allowFontScaling={false}` or a low `maxFontSizeMultiplier`. Layouts must not break at the largest system font size. Every `Pressable` has `accessibilityRole` and a clear `accessibilityLabel`.
8. **Do not make design decisions.** Scope, screens, the concept and the wording of requirements belong to me. If a requirement is ambiguous, cannot be met in a hard-coded prototype, or two documents disagree, stop and ask.
9. **Keep it simple.** I must be able to explain every line to the teacher. Prefer plain, readable code to clever code. No unused code.
10. **Small commits**, one task each, with the IDs in the message, for example `Add shift list (UI-1 → R1, R2)`.

## 3. Folder structure

```
App.tsx              role switch + screen switching
theme.ts             font sizes, spacing, colours, touch-target size
data/
  demo.ts            TODAY, demo users per persona
  shifts.ts
  volunteers.ts
  cats.ts
  clinics.ts
types.ts
logic/               pure functions, no React
  labels.ts
components/          shared UI pieces
screens/
docs/
  scope.md           Kano scope (from the report)
  functions.md       F list
  requirements.md    R table: ID | Pattern | Requirement | F
  decision-table.md  UI decision | Persona | Kano | F | R
  scenarios.md       personas and scenarios (for walkthroughs)
  test-table.md      written in Phase 4
  diagrams/
  screenshots/
```

I add the `docs/*.md` input files from the report myself. Until they exist, only Phases 0–2 are allowed.

## 4. Phases

Do **one phase at a time**. At the end of each phase, run `npx tsc --noEmit`, summarise what you did, list open questions and stop.

### Phase 0 — Setup check (allowed now)
- [ ] Check that the project starts with `npx expo start` and that `npx tsc --noEmit` passes.
- [ ] Create the folder structure above, with empty files where needed.
- [ ] Add `.gitignore` entries if missing (node_modules, .expo).

### Phase 1 — Types and demo data (allowed now, provisional)
- [ ] `types.ts`: `Role`, `Volunteer`, `ShiftType`, `Shift`, `Task`, `Cat`, `Clinic`, `VetTrip`. Mark the file `// Provisional: revise after docs/requirements.md`.
  - Suggested starting fields: Volunteer {id, name, personaId, role, canGiveMedication, drives}; Shift {id, type, date, start, end, capacity, volunteerIds, taskIds, catIds, vetTrip?}; Task {id, title, requiresMedicationTraining}; Cat {id, name, notes}; Clinic {id, name, address, phone}; VetTrip {catId, carrier, clinicId}.
- [ ] Demo data for **one week** from `TODAY`: morning and evening shifts every day, two weekend adoption visits, two vet trips. Times in 24-hour format.
- [ ] The data must contain these cases, each with a comment naming the problem it shows:
  - an empty shift within the next two days (Pr1)
  - a full shift next to an empty one on the same day (Pr3)
  - a shift that P3 holds every Tuesday morning
  - a vet trip assigned to P4 with cat, carrier and clinic address (Pr6)
  - an evening shift with Pätkä's 18:00 medication task (Pr4, Pr5)
  - cats Miro and Pätkä with the notes from the case (Pr5); other cats and people are invented
- [ ] Mark every data file `// Invented demo data based on the case description`.

### Phase 2 — App shell (allowed now)
- [ ] `theme.ts` with the constants from rule 7.
- [ ] Shared components: `BigButton`, `StatusLabel` (text + optional colour), `RoleSwitcher` (demo users P1–P5, clearly marked "Demo mode").
- [ ] `App.tsx`: role switch at the top, simple screen switching with `useState`. **Ask me** before choosing a navigation approach.
- [ ] Placeholder screens with a title only. Do not design their content yet.

### GATE — stop here until `docs/requirements.md` and `docs/decision-table.md` exist

### Phase 3 — Screens and logic from the decision table
- [ ] Work through `docs/decision-table.md` **row by row**. For each UI-n: implement it, tag it (rule 5), commit it.
- [ ] Rules such as status, who may sign up, why a task is locked and which shifts are unfilled go into `logic/` as pure functions. The UI only calls them.
- [ ] A disabled action always shows **why** in text (for example, why a medication task is locked for P5).
- [ ] If a requirement cannot be verified in this prototype, stop and tell me. Do not change the requirement.
- [ ] Do not build anything that the decision table marks as "not built".

### Phase 4 — Test support
- [ ] Write `docs/test-table.md`: one row per R with *Demo role to select → Do this → Expect this*, using the real demo data. Leave the Result column empty: I run the tests myself on the phone.
- [ ] Write a screenshot list: screen, role and state for every screenshot the report needs.
- [ ] Check every M feature in `docs/scope.md` against the screens and list any that are missing.

### Phase 5 — One improvement
- [ ] When I report a failed test or a walkthrough problem, first create the git tag `before-improvement`.
- [ ] Make the smallest fix, update the tags, and give me the re-test steps for the affected R.

### Phase 6 — Finish
- [ ] README in English: what the app is, how to run it (`npm install`, `npx expo start`, Expo Go), demo roles, a note that the data is hard-coded, and where the report is.
- [ ] Final checks, listing every hit:
  - `npx tsc --noEmit` passes
  - every interactive element has a `UI-n` tag and every `UI-n` in the decision table is in the code
  - no `allowFontScaling={false}`, no status shown only by colour
  - no unused files, components or data fields

## 5. Always ask me before you
- add a dependency
- add, remove or rename a screen
- add a feature that is not in `docs/decision-table.md`
- change demo data that a test in `docs/test-table.md` relies on
- change anything in `docs/` except `test-table.md`

## 6. First prompt for a new session
> Read CLAUDE.md. Do Phase 0 only, then stop and report.