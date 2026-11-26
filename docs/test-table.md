# Test table

One test per requirement. All tests use the demo data (TODAY = Monday 30 November 2026).

**Before every test**, reload the app so the demo data is back to its starting state: shake the phone and tap **Reload**, or press `r` in the terminal running Expo. Choose the demo user with the P buttons at the top. "Open a shift" means tapping it in the list.

| R | Demo role to select | Do this | Expect this | Result |
|---|---------------------|---------|-------------|--------|
| R1 | P2 | Open **Shift list** and scroll to the end. | Seven day headings from "Monday 30 November" to "Sunday 6 December". Each day has a morning shift 07:00–10:00 and an evening shift 17:00–19:00. Wednesday and Friday also have a vet trip, and Saturday and Sunday an adoption visit 12:00–15:00. | |
| R2 | P2 | Open **Shift list** and read the labels. | Monday morning "Full", Monday evening "1 of 2", Tuesday evening "Free", Wednesday morning "Your shift". | |
| R3 | P2 | **Shift list** → open Tuesday evening → tap **Sign up**. Then switch to P3. | For P2, Tuesday evening shows "Your shift" and the Sign up button is gone. For P3, Tuesday evening shows "1 of 2". | |
| R4 | P2 | **Shift list** → open Thursday morning. | The status is "Full". **Sign up** is greyed out with a dashed border and does nothing when tapped. Under it: "This shift is full." | |
| R5 | P5 | **Shift list** → open Monday evening. Then switch to P2 and open it again. | For P5, under "Give Pätkä the medicine at 18:00" it says "Locked: Only trained volunteers can give medication." For P2, there is no lock text. | |
| R6 | P5 | **Shift list** → open Tuesday evening. Then open Monday evening, then Friday's vet trip. | Tuesday evening: **Sign up** is greyed out with "A trained volunteer must sign up first." Monday evening (Emma, trained, is on it): **Sign up** works. Friday vet trip (no medication task): **Sign up** works. | |
| R7 | P1 | Open **Shift list**. Then switch to P2. | For P1, a box above the list reads "4 shifts need people by Wednesday" and lists Monday 30 November Evening feeding (1 of 2), Tuesday 1 December Morning feeding and cleaning (2 of 3), Tuesday 1 December Evening feeding (Free), and Wednesday 2 December Morning feeding and cleaning (2 of 3). For P2, the box is not shown. | |
| R8 | P2, then P3 | As P2: **My shifts** → open Wednesday morning → tap **Offer for swap**. Switch to P3 → **Shift list**. | For P2, Wednesday morning shows "Swap offered" and the button is gone. For P3, Wednesday morning in the Shift list shows "2 of 3" and "Swap offered". | |
| R9 | P2, then P3 | Do R8 first. As P3: open Wednesday morning → tap **Take this shift**. Then switch to P2 → **My shifts**. | For P3, Wednesday morning shows "Your shift" and no "Swap offered". For P2, My shifts lists only Friday evening and Sunday morning. | |
| R10 | P3 | Open **Cats**. Then **Shift list** → open Tuesday morning, Tuesday evening and Friday's vet trip. | Cats: Miro "Bites when picked up.", Pätkä "Needs medicine at 18:00.", Nuppu "No notes." Tuesday morning lists Miro with Miro's note, Tuesday evening lists Pätkä with Pätkä's note, and Friday's vet trip lists Topi with "No notes." | |
| R11 | P4 | **My shifts** → open the vet trip. | Wednesday 2 December, Vet trip 10:00–12:00. Cat: Ruska. Carrier: Large grey carrier (shelf 2). Clinic: Northside Vet Clinic. Address: Rantakatu 5, 70100 Kuopio. Phone: +358 40 000 0001. Under Cats: Ruska, "Gets stressed in the car." | |
| R12 | P3, then P4 and P2 | As P3: open **My shifts**. Then as P4: **My shifts** → open the vet trip → **Offer for swap**. As P2: **Shift list** → open Wednesday's vet trip → **Take this shift**. As P4: **My shifts**. | P3 sees only Tuesday 1 December, Morning feeding and cleaning 07:00–10:00. At the end, P4 sees "You have no shifts this week." | |
| R13 | P3 | In phone settings, set the text size to the largest (iPhone: Settings → Accessibility → Display & Text Size → Larger Text, switch on and drag to the right. Android: Settings → Display → Font size, largest). Open all three screens and open one shift. Then switch to P1 and open **Shift list**. | All text is larger, nothing is cut off or overlapping, and everything can be reached by scrolling. All buttons are at least finger-sized. No word is split across two lines: day headings use the short form (for example "Tue 1 Dec"), and P1's box reads "4 shifts need people by Wed". Set the text size back afterwards. | |
| R14 | P2 | Turn on grayscale (iPhone: Settings → Accessibility → Display & Text Size → Color Filters → Grayscale. Android: Settings → Accessibility → Color correction → Grayscale). Open **Shift list**. | Every status can still be told apart by its text: "Full", "1 of 2", "Free", "Your shift". Turn grayscale off afterwards. | |
| R15 | P1, then P3 | As P1: open **My shifts**. Tap **P3**. | The line under the P buttons changes from "You are Sanna Virtanen (P1, Coordinator)" to "You are Raili Mäkinen (P3, Retired volunteer)". My shifts changes from Saturday's adoption visit to Tuesday's morning shift. In the Shift list, the coordinator box is gone. | |

## M features check (Phase 4)

Every M feature in `scope.md` against the screens:

| Scope | Feature | Where | Covered |
|-------|---------|-------|---------|
| K1 | Shift list for one week, grouped by day | Shift list (UI-3) | yes |
| K2 | Status in text | Shift list, My shifts (UI-4) | yes |
| K3 | Sign up for a shift | Shift list (UI-6) | yes |
| K4 | Medication task locked, with reason | Shift list, My shifts (UI-7, UI-8) | yes |
| K5 | Vet trip details | Shift list, My shifts (UI-14) | yes |
| K6 | Large text and big touch targets | all screens (theme, UI-2, UI-5) | yes |
| K16 | Login and accounts ("M in a real app") | — | not built: replaced by the demo role switch (UI-1), as decided in scope.md |
