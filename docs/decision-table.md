# Decision table

> Written by Claude Code from the case description in CLAUDE.md; accepted by the author on 2026-11-26.

Each row is one UI decision. The code tags each element with `{/* UI-n → Rx */}`. Rows marked "not built" must not be implemented.

| ID | UI decision | Screen | Persona | Kano | F | R | Built |
|----|-------------|--------|---------|------|---|---|-------|
| UI-1 | Role switch at the top with a "Demo mode" banner and buttons P1–P5; the line "You are …" names the current user | all | P1–P5 | — (prototype) | F11 | R15 | built (Phase 2) |
| UI-2 | Screen menu with three large buttons: Shift list, My shifts, Cats; the selected one shows "✓" | all | all | M | F1, F8, F10 | R1, R10, R12, R13 | built (Phase 2) |
| UI-3 | Shifts grouped under a day heading (for example "Tuesday 1 December"; at very large text sizes the short form "Tue 1 Dec", so no word is split), times in 24-hour format | Shift list | P2, P3 | M | F1 | R1, R13 | yes |
| UI-4 | Status label as text on every shift ("Your shift", "Full", "Free", "n of m"), with colour added on top | Shift list, My shifts | all | M | F2 | R2, R14 | yes |
| UI-5 | Tap a shift to open its details in place (tasks, cats, vet trip, buttons); tap again to close | Shift list, My shifts | P3 | M | F1 | R1, R13 | yes |
| UI-6 | "Sign up" button in the open shift; when full, the button is disabled and "This shift is full." is shown | Shift list | P2, P3, P5 | M | F3 | R3, R4 | yes |
| UI-7 | Medication task shown with a lock text "Only trained volunteers can give medication." for untrained users | Shift list, My shifts | P5 | M | F4 | R5 | yes |
| UI-8 | For an untrained user on a shift with a medication task and no trained volunteer, "Sign up" is disabled with "A trained volunteer must sign up first." | Shift list | P5 | M | F3, F4 | R6 | yes |
| UI-9 | Coordinator summary above the list: "n shifts need people by Wednesday", followed by those shifts (short date forms at very large text sizes) | Shift list | P1 | P | F5 | R7, R13 | yes |
| UI-10 | "Offer for swap" button on the user's own shifts | My shifts | P2 | P | F6 | R8 | yes |
| UI-11 | "Swap offered" label and a "Take this shift" button on offered shifts | Shift list | P2, P3 | P | F7 | R8, R9 | yes |
| UI-12 | Cat names with their notes under them in the open shift, or "No notes." | Shift list, My shifts | P3, P5 | P | F8 | R10 | yes |
| UI-13 | Cat list with every cat's notes | Cats | all | P | F8 | R10 | yes |
| UI-14 | Vet trip block in the open shift: cat, carrier, clinic name, address, phone | Shift list, My shifts | P4 | M | F9 | R11 | yes |
| UI-15 | Own shifts in date order, or "You have no shifts this week." | My shifts | P3, P4 | P | F10 | R12 | yes |
| UI-16 | Reminder notifications before a shift | — | P2, P3 | A | — | — | not built |
| UI-17 | "Every Tuesday" marker on a recurring shift | — | P3 | A | — | — | not built |
| UI-18 | Call button next to a volunteer's name | — | P1 | I | — | — | not built |
| UI-19 | Chat or comments on a shift | — | all | I | — | — | not built |

## Assumptions

- **UI-5 (details open in place)** avoids a new "Shift details" screen, because you chose only three screens. At the largest font size a closed shift stays short, so P3 can scroll the week. A separate details screen would also work, but it adds a screen.
- **UI-9 shows a count and a list.** You could show only the list. The count gives P1 the answer to "are we covered?" in one line.
- **UI-2 and UI-1** were built in Phase 2 before these IDs existed. Their `UI-? → TODO` tags will be replaced by UI-1 and UI-2 in Phase 3.
