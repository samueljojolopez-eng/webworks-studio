# Hill & Hollow Coffee — Week 4 Starter Project

## Scenario
WebWorks Studio has received an approved visual direction for a small promotional landing page.

Your job is to implement that direction using **Tailwind CSS utility classes**.

## Important
The starter HTML is intentionally:
- semantic
- minimally styled
- responsive only after you add the appropriate Tailwind utilities

The Tailwind Play CDN script is already included in `index.html`.

## Before You Begin
1. Create:
   `webworks-studio/week04-tailwind/`
2. Place these starter files inside that folder.
3. Open the entire folder in Visual Studio Code.
4. Open `design-reference.svg` and review the supplied design direction.
5. Preview `index.html` in your browser.
6. Add Tailwind classes directly to the existing semantic HTML.

## Preserve
- Existing written content
- Semantic HTML structure
- Meaningful image alternative text
- Existing links and contact information

## Your Goal
Use Tailwind utilities to translate the supplied visual direction into a polished, responsive webpage.

## Tailwind Decisions
Before submitting, replace the placeholders below with approximately three examples.

### Decision 1
**Used:**  
**Why:**  

### Decision 2
**Used:**  
**Why:**  

### Decision 3
**Used:**  
**Why:**  

## Live Site
Add your published GitHub Pages URL here.

## Reminder
The Tailwind Play CDN is being used for this instructional sprint only. It is intended for development, not production deployment workflows.

Refer to the Week 4 Canvas assignment for all requirements and submission directions.


## updated assignment
## Tailwind Decisions

### 1. Responsive Plant Card Grid
* **Used:** `grid grid-cols-1 sm:grid-cols-3 gap-4`
* **Why:** Replaced legacy layout structures with a fluid grid system. On smaller mobile screens, the plant cards stack vertically in a single column for optimal readability. On tablet and desktop screens, they automatically arrange into a clean three-column grid with consistent spacing.

### 2. Flexible Hero & Content Layout
* **Used:** `flex flex-col md:flex-row gap-6 items-start`
* **Why:** Maintained a clean two-column layout without relying on rigid float or positioning CSS rules. On narrow viewports, the sidebars and images collapse into a single vertical column; on medium and larger viewports, they shift side-by-side naturally.

### 3. Accessible Focus Rings & Interactive States
* **Used:** `transition-colors hover:text-amber-800 focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:ring-offset-2`
* **Why:** Applied consistent hover state feedback for all navigation links and Call to Action buttons while ensuring visible keyboard focus rings for accessible tab navigation (`Tab` key).