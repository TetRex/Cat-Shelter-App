# Requirements (R table)

> Written by Claude Code from the case description in CLAUDE.md; accepted by the author on 2026-11-26.

Patterns follow EARS: **Ubiquitous** (The app shall …), **Event** (When …, the app shall …), **State** (While …, the app shall …), **Unwanted** (If …, then the app shall …).

Words used below:
- **Current user**: the demo user chosen in the role switch.
- **Trained**: a volunteer who may give medication (`canGiveMedication` in the demo data).
- **Needs people**: a shift with fewer volunteers than its capacity.

| ID | Pattern | Requirement | F |
|----|---------|-------------|---|
| R1 | Ubiquitous | The app shall list all shifts from TODAY to TODAY + 6 days, grouped by day, each with its type, start time and end time in 24-hour format. | F1 |
| R2 | Ubiquitous | The app shall show the status of each shift as text: "Your shift" if the current user is on it, otherwise "Full" if it has reached capacity, "Free" if nobody is on it, and "n of m" in all other cases. | F2 |
| R3 | Event | When the current user taps "Sign up" on a shift that is not full and that they are not on, the app shall add them to the shift and show the status "Your shift". | F3 |
| R4 | Unwanted | If a shift is full, then the app shall disable "Sign up" for that shift and show the text "This shift is full." next to it. | F3 |
| R5 | Unwanted | If the current user is not trained, then the app shall show every task that needs medication training as locked, with the text "Only trained volunteers can give medication." | F4 |
| R6 | Unwanted | If the current user is not trained, the shift has a task that needs medication training, and no trained volunteer is on the shift, then the app shall disable "Sign up" and show the text "A trained volunteer must sign up first." | F3, F4 |
| R7 | State | While the current user is the coordinator, the app shall show above the shift list how many shifts from TODAY to TODAY + 2 days need people, and list them. | F5 |
| R8 | Event | When the current user taps "Offer for swap" on one of their own shifts, the app shall mark that shift "Swap offered" for all demo users. | F6 |
| R9 | Event | When a current user who is not on a shift taps "Take this shift" on a shift marked "Swap offered", the app shall replace the offering volunteer with the current user and remove the mark. | F7 |
| R10 | Ubiquitous | The app shall show each cat's notes next to the cat's name, both on the shifts that list the cat and in the cat list. | F8 |
| R11 | State | While a shift is a vet trip, the app shall show the cat, the carrier, and the clinic's name, address and phone number on that shift. | F9 |
| R12 | Ubiquitous | The app shall list the current user's own shifts in date order on "My shifts", and show "You have no shifts this week." when there are none. | F10 |
| R13 | Ubiquitous | The app shall use body text of at least 18 pt and touch targets of at least 48 × 48 dp, and all content shall stay readable and reachable at the largest system text size. | all |
| R14 | Ubiquitous | The app shall never show a status by colour alone; every status shall have a text label. | F2 |
| R15 | Event | When a demo user is chosen in the role switch, the app shall show every screen as that user. | F11 |

## Assumptions

- **R6 (decided 2026-11-26):** the case says P5 is "not yet allowed to give medication *alone*". This is read as: P5 may join a shift with a medication task only when a trained person is already on it. Shifts without a medication task are not affected. R5 (the locked task) applies as well.
- **"Free"** is kept as the label (decided 2026-11-26).
- **R7's window** is TODAY + 2 days (Monday to Wednesday in the demo data). The case says empty shifts are "noticed the day before", so the window has to be at least one day.
- **Swaps** (R8, R9) are done inside the Shift list and My shifts screens, without a separate swap screen, because you chose the screens Shift list, My shifts and Cats. There is no "withdraw offer". Add it if you need it.
- **Leaving a shift** without a swap is not possible. The case moves swaps into the app, but does not mention cancelling.
