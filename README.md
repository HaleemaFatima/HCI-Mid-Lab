# HCI-Mid-Lab

A single-page expressive interface demo built to explore emotional design and expressive interaction techniques for a Human–Computer Interaction (HCI) lab.

---

## One-line purpose (Packages used)

- `uuid` — generate unique IDs for components, saved states, and user-created items.
- `react-color` — provide polished, interactive color pickers for expressive controls.
- `@types/react-color` (dev) — TypeScript types for `react-color` for safer development.
- `react-bootstrap-icons` — lightweight vector icons to improve visual affordance and clarity.
- `@chakra-ui/react` & `@emotion/react` — accessible, composable UI primitives and styling foundations for building responsive, themeable interfaces.
- `@chakra-ui/cli snippet add` (npx) — add Chakra UI code snippets to speed up component scaffolding during development.
- `react-konva` & `konva` — performant, canvas-based drawing and animation primitives for expressive imagery and micro-interactions.

---

## Table of Contents

- [About](#about)
- [Installation](#installation)
- [Development](#development)
- [Design & HCI Rationale](#design--hci-rationale)
  - [Fitts' Law & Layout](#fitts-law--layout)
  - [Shneiderman's Golden Rules](#shneidermans-golden-rules)
  - [Emotional Design & Expressive Interface](#emotional-design--expressive-interface)
  - [Micro-interactions, Storytelling, and Positive Surprise](#micro-interactions-storytelling-and-positive-surprise)
  - [Accessibility & Usability](#accessibility--usability)
- [Features](#features)
- [License](#license)
- [Group Members](#group-members)

---

## About

This lab project demonstrates how to design an expressive, emotionally engaging UI while following HCI best practices. The app combines interactive color selection, canvas drawing/animation, and responsive components to create an interface that is both delightful and usable. The objective is to build an expressive interface that elicits emotion and communicates intent, using design patterns from emotional design research (visceral, behavioral, reflective levels).

---

## Installation

1. Clone the repo
   - git clone https://github.com/minalDev-git/HCI-Mid-Lab.git
2. Install dependencies
   - npm install
   - npm install uuid
   - npm install react-color
   - npm install --save-dev @types/react-color
   - npm install react-bootstrap-icons --save
   - npm i @chakra-ui/react @emotion/react
   - npx @chakra-ui/cli snippet add
   - npm install react-konva konva --save

(You can also run the single `npm install` after adding these to package.json; the individual commands here document the packages used for the lab.)

---

## Development

- Start the dev server:
  - npm start
- Build for production:
  - npm run build

The project uses Chakra UI for layout and theme primitives, React-Konva for canvas-based expressive imagery and animations, and `react-color` for color controls. `uuid` is used where persistent unique identifiers are needed.

---

## Design & HCI Rationale

This section explains how the app intentionally applies HCI principles while pursuing expressive interface goals.

### Fitts' Law & Layout

- Primary interactive targets (e.g., main action buttons, primary palette swatches) are large, well-contrasted, and positioned at predictable locations, reducing movement time.
- Frequently used controls are placed near each other and near expected cursor landing zones to shorten pointer travel.
- Hit areas are intentionally larger than visual affordances to reduce selection error (especially on touch).

### Shneiderman's Golden Rules

- Strive for consistency: visual styles, iconography (via react-bootstrap-icons), and interaction patterns (Chakra components) are consistent across the app.
- Enable shortcuts: keyboard-accessible actions and accelerators are supported for power users (behavioral layer).
- Offer informative feedback: every user action provides immediate visual/micro-interaction feedback (button ripple, color preview, animated confirmation).
- Design dialogs for closure: actions that complete tasks show clear completion states and optional undo affordances to reduce anxiety.
- Prevent errors and provide clear error messages with recovery options.

### Emotional Design (Expressive Interface)

- Visceral level: the UI uses expressive imagery and joyful micro-animations (Konva-driven) to create an immediate aesthetic appeal and a friendly first impression.
- Behavioral level: interactions are smooth and provide meaningful feedback; the user feels competent and in control.
- Reflective level: the app evokes stories and identity through expressive visuals and the opportunity to save/share creations, giving users reasons to reflect and value their outputs.

We intentionally use HCI vocabulary: "visceral", "behavioral", and "reflective" to describe emotional design and "expressive interface" to describe the way the system communicates personality through motion, color, and feedback.

### Micro-interactions, Storytelling, and Positive Surprise

- Micro-interactions (small transitions, hover states, animated icons) signal system state changes and reward interaction; they are designed to be subtle and not disruptive.
- Storytelling appears through progressive reveal of tools and playful default content that helps users imagine possibilities—this lowers the barrier to exploration.
- Positive surprise mechanisms (e.g., celebratory confetti, subtle sound cues, or an affectionate message on completion) are used sparingly to create delight without undermining usability.

### Expressive Imagery

- The canvas (react-konva + konva) supports layered, painterly interactions and animated elements that convey personality.
- Color pickers (react-color) and quick palettes let users craft expressive visual outcomes—color choices are previewed immediately for visceral feedback.

---

## Features

- Interactive color selection with immediate preview.
- Canvas-based drawing and animated elements using Konva.
- Accessible, responsive UI using Chakra UI.
- Iconography for clear affordances via react-bootstrap-icons.
- Unique ID management with uuid for saved artifacts.
- Thoughtful micro-interactions and animations to increase engagement.

---

## Accessibility & Usability

- Keyboard navigable: all key controls are reachable via keyboard and have visible focus states.
- Color contrast: color themes are chosen for sufficient contrast by default; color picker warns if combinations have poor contrast.
- ARIA roles and semantic HTML are used for assistive technologies.
- Touch-friendly controls and sufficiently large tap targets for mobile users.

---

## How to Extend

- Add new micro-interactions by extending the Konva animation layers.
- Create additional color palettes and save/load presets.
- Build more narrative onboarding steps to guide emotional engagement for new users.

---

## License

MIT

---

## Group Members

- Minal Shahid B23110006067 — https://github.com/minalDev-git
- Member Two — https://github.com/USERNAME-TO-REPLACE
- Member Three — https://github.com/USERNAME-TO-REPLACE
- Member Four — https://github.com/USERNAME-TO-REPLACE

(Please provide the real names and GitHub profile URLs for Members Two–Four and I will update this README with the correct information.)
