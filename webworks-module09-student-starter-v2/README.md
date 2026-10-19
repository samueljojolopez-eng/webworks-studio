# WebWorks Studio — Module 9 Student Starter
## Mission City Makers Market

You are the **Junior Front-End Developer** assigned to improve a fictional client page using two different professional tools:

1. **Alpine.js** — create one lightweight custom interaction.
2. **Preline UI** — choose and adapt one reusable component.

The goal is not to add as many effects as possible. The goal is to choose the right tool for the right job.

## Start Here

Open this entire folder in Visual Studio Code.

In the VS Code terminal, run:

```bash
npm install
npm run dev
```

Keep `npm run dev` running while you work.

The `dev` command:

- copies Preline's browser JavaScript to `js/vendor/preline.js`;
- starts Tailwind watch mode;
- rebuilds `css/output.css` when your HTML changes.

Preview `index.html` with Live Server.

## What Is Already Set Up?

- Tailwind CSS 4
- Preline UI
- Tailwind Forms
- Alpine.js through the approved CDN
- responsive client page
- accessible baseline HTML
- client content and starter images
- clearly marked Alpine and Preline work areas
- Mac/Windows-friendly npm scripts

### Versions

- Tailwind CSS 4.3.3
- Tailwind CLI 4.3.3
- Preline UI 4.2.0
- Tailwind Forms 0.5.11
- Alpine.js CDN 3.17.1

Do not change versions unless your instructor tells you to.

# Requirement 1 — Alpine-Powered Exploration Tool

Use Alpine to help a visitor explore, narrow, compare, select, or better understand the supplied maker content.

Required:

- `x-data`
- at least one user event
- at least one additional reactive directive
- visible, understandable interface response
- semantic, keyboard-accessible controls

Search `index.html` for:

`TODO: REQUIRED ALPINE INTERACTION`

Do not copy the classroom Alpine playground unchanged.

# Requirement 2 — Adapted Preline Component

Choose one Preline component that improves the supplied client page.

Possible choices:

- accordion
- tabs
- modal
- dropdown
- alert
- another instructor-approved component

Required:

- solve a real client/user need
- use official Preline structure
- retain meaningful client content
- adapt styling with Tailwind utilities
- remain keyboard usable
- preserve accessibility behavior
- work at narrow, medium, and wide widths

Search `index.html` for:

`TODO: REQUIRED PRELINE COMPONENT`

# Scope Rule

Your Alpine interaction and Preline component must solve **different problems**.

# Why `js/vendor/preline.js` Exists

`node_modules` should not be committed or relied on by GitHub Pages.

Running:

```bash
npm run dev
```

or:

```bash
npm run build
```

copies Preline from:

```text
node_modules/preline/dist/preline.js
```

to:

```text
js/vendor/preline.js
```

Commit the copied runtime with your finished project.

# Before Pushing to GitHub

Run:

```bash
npm run build
```

Then confirm these contain real generated code:

```text
css/output.css
js/vendor/preline.js
```

Commit both files.

Do not commit `node_modules/`.

# Required README Documentation

Replace each TODO before submitting.

## Project Summary

TODO

## Alpine Decision

**User/client need:**  
TODO

**Alpine directives used:**  
TODO

**Why Alpine was appropriate:**  
TODO

## Preline Decision

**Preline component selected:**  
TODO

**Problem it solves:**  
TODO

**How you adapted it:**  
TODO

## Accessibility Notes

1. TODO
2. TODO

## Testing Notes

**Narrow viewport:** TODO  
**Medium viewport:** TODO  
**Wide viewport:** TODO  
**Keyboard testing:** TODO  
**Browser console:** TODO

## Dependencies

**Alpine.js — how used:** TODO  
**Preline UI — how used:** TODO  
**Tailwind CSS — how used:** TODO

## Official Documentation Used

- Alpine.js: TODO
- Preline UI: TODO

# Official References

- https://alpinejs.dev/start-here
- https://alpinejs.dev/directives/
- https://preline.co/docs/
- https://preline.co/docs/components.html
- https://preline.co/docs/accessibility.html

# Final Check

- [ ] `npm run build` completes.
- [ ] Tailwind styles load.
- [ ] Alpine interaction works.
- [ ] Preline component works.
- [ ] They solve different needs.
- [ ] Keyboard testing works.
- [ ] Responsive testing is complete.
- [ ] Console has no unresolved errors.
- [ ] README is complete.
- [ ] `css/output.css` is committed.
- [ ] `js/vendor/preline.js` is committed.
- [ ] `node_modules` is not committed.
- [ ] Work is pushed to GitHub.


finished readme

## 1. Project Summary
For this project, I added two purposeful interaction layers to the Mission City Makers Market event page to help visitors plan their visit without overloading the page. First, I created a custom, interactive Maker Category Filter and keyword search tool using Alpine.js so users can quickly explore local vendors. Second, I integrated and visually adapted Preline UI's accordion component to streamline the Visitor Questions section, replacing an unorganized card grid with a clean, collapsable FAQ.

## 2. Alpine Decision
* **Need Solved:** Visitors need a fast way to narrow down vendors by craft category (Ceramics, Printmaking, Textiles, Woodcraft) or keyword without scrolling past irrelevant listings.
* **Directives Used:** `x-data` (to manage reactive state for `selectedCategory` and `searchQuery`), `@click` (for button category selection), `x-model` (for real-time input binding), `x-show` and `x-transition` (for smooth card filtering), `x-text` (for dynamic results messaging), and `x-if` (for conditional search output).
* **Why Alpine Was Appropriate:** Alpine.js provided lightweight, inline reactive state directly within the HTML markup. Building a simple filter tool did not require a heavy JavaScript framework or complex custom DOM manipulation.

## 3. Preline Decision
* **Component Selected:** Preline Accordion (`hs-accordion` / `hs-accordion-group`).
* **Problem Solved:** The original layout presented visitor questions as static grid cards, which took up significant vertical space and made scanning difficult for mobile users.
* **How It Was Adapted:** I adapted Preline's structure using custom Tailwind utility classes that match the client's brand palette (navy `#142b3a`, teal `#246b63`, and stone borders `#d8d1c5`). I preserved all ARIA attributes (`aria-expanded`, `aria-controls`, `role="region"`) and smooth transition animations.

## 4. Accessibility Notes
1. **Keyboard Operability & Focus Management:** All filter buttons and accordion toggles are native `<button>` elements with visible focus rings (`focus:ring-2 focus:ring-[#246b63]`), ensuring keyboard users can tab through and interact seamlessly.
2. **Screen Reader Announcements:** The Alpine filter includes an `aria-live="polite"` region that dynamically announces the current filter state to assistive technologies whenever a user changes categories or types in the search box.

## 5. Testing Notes
* **Narrow Viewports (Mobile):** Verified that filter buttons wrap cleanly without overflowing and that touch targets remain comfortable to tap. Confirmed accordion panels expand fully without causing horizontal scrolling.
* **Medium & Wide Viewports (Tablet & Desktop):** Verified that the search bar aligns neatly next to filter controls and that maker cards maintain a responsive multi-column grid layout as cards hide and show.
* **Keyboard Navigation:** Tested navigation entirely using the `Tab` and `Shift + Tab` keys to focus controls, using `Space` / `Enter` to activate accordion items and category filters.

## 6. Dependencies
* **Alpine.js (v3.17.1):** Loaded via CDN script to handle lightweight client-side state management, reactive input binding, and dynamic visibility toggling.
* **Preline UI (v4.2.0):** Installed via npm and included via `preline.js` script to supply robust, accessible, JS-powered UI component behavior.
* **Tailwind CSS (v4.3.3):** Processed via the Tailwind CLI to provide modern utility classes for responsive layout grids, brand typography, custom spacing, and theme colors.

## 7. Sources
* [Alpine.js Official Documentation](https://alpinejs.dev/docs)
* [Preline UI Accordion Documentation](https://preline.co/docs/accordion.html)