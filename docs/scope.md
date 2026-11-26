# Scope (Kano)

> Written by Claude Code from the case description in CLAUDE.md; accepted by the author on 2026-11-26.

Kano classes: **M** must-be · **P** performance (one-dimensional) · **A** attractive · **I** indifferent.

## In scope (built in the prototype)

| ID | Feature | Kano | Persona | Problem |
|----|---------|------|---------|---------|
| K1 | Shift list for one week, grouped by day | M | all | Pr3 |
| K2 | Status of each shift in text ("Free", "1 of 2", "Full", "Your shift") | M | all | Pr1, Pr3 |
| K3 | Sign up for a shift | M | P2, P3, P5 | Pr3 |
| K4 | Medication task locked for untrained volunteers, with the reason in text | M | P5 | Pr4 |
| K5 | Vet trip details: cat, carrier, clinic name, address and phone | M | P4 | Pr6 |
| K6 | Large text and big touch targets that work at the largest system font size | M | P3 | — |
| K7 | Shifts that need people in the next days, shown to the coordinator | P | P1 | Pr1, Pr3 |
| K8 | Offer one of my shifts for a swap | P | P2 | Pr2 |
| K9 | Take over a shift someone offered | P | P2, P3 | Pr2 |
| K10 | Cat notes on the shift and in a cat list | P | P3, P5 | Pr5 |
| K11 | "My shifts" list for the current user | P | P3, P4 | — |

## Out of scope (not built)

| ID | Feature | Kano | Why not |
|----|---------|------|---------|
| K12 | Reminders and push notifications | A | Needs a backend; not possible in a hard-coded prototype |
| K13 | Mark a shift as recurring ("every Tuesday") | A | Nice for P3, but one week of demo data cannot show it |
| K14 | Chat or group messages | I | WhatsApp stays outside the app (decision already made) |
| K15 | Call a volunteer from the app | I | Phone stays outside the app (decision already made) |
| K16 | Login and accounts | M in a real app | Replaced by the demo role switch in the prototype |
| K17 | Fostering kittens at home | — | Out of scope in the case |

## Assumptions

- The Kano classes are my estimate from the personas. They are not based on a Kano survey. If your report has survey results, use those.
- K16 is "M in a real app" but not built. You may want to describe this in the report as a limitation of the prototype.
