# Personas and scenarios

> Written by Claude Code from the case description in CLAUDE.md; accepted by the author on 2026-11-26.

All scenarios use the demo data. TODAY is Monday 30 November 2026.

## Personas

| ID | Persona | Demo user | Needs |
|----|---------|-----------|-------|
| P1 | Coordinator, part-time employee | Sanna Virtanen | See early which shifts need people; stop phoning around the day before |
| P2 | Student whose free hours change weekly | Jere Korhonen | Sign up for shifts week by week; hand a shift over without long message threads |
| P3 | Retired volunteer, every Tuesday morning, old phone with large text, does not like apps | Raili Mäkinen | Find her own shift fast; large text; few steps |
| P4 | Driver, vet trips only | Pekka Laine | Know which cat, which carrier and which clinic before leaving |
| P5 | New volunteer, not yet allowed to give medication alone | Aino Heikkinen | Know which tasks she may do and why some are locked |

## Scenarios

**S1: Coordinator spots empty shifts (P1; Pr1, Pr3)**
On Monday morning Sanna opens the Shift list. Above the list she reads that 4 shifts need people by Wednesday: Monday evening (1 of 2), Tuesday morning (2 of 3), Tuesday evening (Free) and Wednesday morning (2 of 3). Tuesday evening has nobody, so Sanna phones volunteers outside the app, as before. Requirements: R7, R2.

**S2: Student signs up (P2; Pr1, Pr3)**
Jere has a free Tuesday evening. In the Shift list he opens Tuesday evening (Free), taps "Sign up", and the status changes to "Your shift". Thursday morning shows "Full", and "Sign up" is disabled with the text "This shift is full." Requirements: R2, R3, R4.

**S3: Swap without WhatsApp (P2 and P3; Pr2)**
Jere has an exam on Wednesday. In My shifts he taps "Offer for swap" on Wednesday morning. Raili switches in and sees "Swap offered" on Wednesday morning in the Shift list. Raili taps "Take this shift", and the shift moves from Jere to Raili. Requirements: R8, R9.

**S4: Retired volunteer checks her Tuesday (P3)**
Raili's phone uses the largest text size. Raili opens My shifts and sees only Tuesday morning, 07:00–10:00, then opens that shift and reads that Miro bites when picked up. Requirements: R12, R10, R13.

**S5: Driver prepares a vet trip (P4; Pr6)**
Pekka opens My shifts and sees the vet trip on Wednesday 10:00–12:00. It shows the cat Ruska, the large grey carrier on shelf 2, and Northside Vet Clinic with its address and phone number. Ruska's note reads "Gets stressed in the car." Requirements: R11, R10.

**S6: New volunteer and the medication task (P5; Pr4, Pr5)**
Aino opens Monday evening (1 of 2). The task "Give Pätkä the medicine at 18:00" shows "Only trained volunteers can give medication.", and Pätkä's note "Needs medicine at 18:00." is visible. Emma, who is trained, is already on the shift, so Aino signs up. On Tuesday evening, where nobody is signed up, "Sign up" is disabled for Aino with "A trained volunteer must sign up first." Requirements: R5, R6, R10, R3.
