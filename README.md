# Cat Shelter Shifts

This is the app part of a graded course project (Savonia UAS, Product Design & Development, autumn 2026).

A small Expo prototype for a cat shelter with about 40 volunteers and 30 cats. It replaces the shared spreadsheet as the shift list and moves shift swaps into the app. WhatsApp and phone calls stay outside the app.

The app has three screens:

- **Shift list**: the week's shifts grouped by day, each with a status in text ("Free", "1 of 2", "Full", "Your shift"). Tap a shift to see its tasks, cats and vet trip details, and to sign up or take an offered swap. The coordinator also sees which shifts need people by Wednesday.
- **My shifts**: the current user's own shifts, where they can offer a shift for a swap.
- **Cats**: every cat with its notes.

## How to run it

You need [Node.js](https://nodejs.org) and the **Expo Go** app on your phone (App Store or Google Play).

```bash
npm install
npx expo start
```

Scan the QR code with your phone: on Android from inside Expo Go, on iPhone with the Camera app. The phone and the computer must be on the same Wi-Fi network.

On a Mac with Xcode installed, you can instead press `i` in the terminal to open the app in the iOS simulator.

## Demo roles

There is no login. A yellow "Demo mode" bar at the top switches between five demo users, one per persona:

| Button | Demo user | Persona |
|--------|-----------|---------|
| P1 | Sanna Virtanen | Coordinator (sees the "shifts need people" summary) |
| P2 | Jere Korhonen | Student |
| P3 | Raili Mäkinen | Retired volunteer, every Tuesday morning |
| P4 | Pekka Laine | Driver, vet trips only |
| P5 | Aino Heikkinen | New volunteer, not yet trained to give medication |

## Demo data

All data is hard-coded in `data/` and invented from the case description. The demo date is fixed to **Monday 30 November 2026** (`TODAY` in `data/demo.ts`), so every test gives the same result. Sign-ups and swaps are kept only in memory: **reloading the app resets everything**. There is no backend, network or storage.

## Where things are

| Path | Contents |
|------|----------|
| `docs/` | Scope (Kano), functions, requirements, decision table, scenarios, test table and screenshot list |
| `logic/` | The rules as pure functions (status, who may sign up, swaps) and all UI texts (`labels.ts`) |
| `components/`, `screens/` | The UI. Every element is tagged `{/* UI-n → Rx */}` with its row in `docs/decision-table.md` |
| `CLAUDE.md` | The working rules used while building the app |

The course report is submitted separately: _add the report's file name or link here_.
