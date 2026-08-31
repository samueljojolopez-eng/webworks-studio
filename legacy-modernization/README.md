# Southtown Plant Co. — Week 2 Inherited Client Site

## Scenario
WebWorks Studio has inherited this small-business website from a previous developer.

The site is functional, but the underlying front-end code reflects practices common in older websites. Your assignment is to modernize the code while preserving the client's content and general visual identity.

## Before You Edit
1. Keep an untouched copy of this starter project.
2. Put your working copy in:
   `webworks-studio/week02-build-better/`
3. Open the entire project folder in Visual Studio Code.
4. Preview `index.html` in a browser.
5. Resize the browser window and observe the existing behavior before you change anything.

## Important
The inherited site is intentionally **not responsive**.

Do not simply redesign the site from scratch. Refactor it according to the requirements in the Week 2 Canvas assignment.

## Preserve
- Client content
- General color palette and visual identity
- Working navigation and links
- Meaningful image alternative text
- Required site information

## Your Goal
Make the code easier for another developer to understand, maintain, and extend.

Refer to the Canvas assignment for all required technical work, GitHub workflow, and submission directions.

## Changes made week 1 include:

Modern Document Setup: Updated to HTML5 <!DOCTYPE html> with <meta name="viewport"> for responsive scaling, removing old HTML 4.01 transitional markup.

Semantic Layout: Replaced layout tables, spacer GIFs, broken table tags (<tr> without <table>), and obsolete presentation elements (<font>, bgcolor, border=0) with modern semantic containers (<header>, <nav>, <main>, <section>, <aside>, <footer>, <ul>).

Clean Modern CSS: Replaced table-based multi-column layout with Flexbox and CSS Grid. Added CSS variables for standard color definitions and responsive image handling.

Accessibility & Standard Anchors: Replaced outdated <a name="..."> tags with id="..." attributes on target elements. Cleaned up alt text and removed fixed "800x600" text.

## Changes made week 2 include:
CSS Grid Layout: Applied to the main page wrapper (#container) and the plant section (.plant-grid), allowing items to wrap smoothly without breaking the layout.

Flexbox Layout: Applied to the header, main navigation, hero section, two-column layout, about block, and visit banner so elements wrap neatly on mobile.

Responsive Media: Images now use max-width: 100% and height: auto so they shrink smoothly within smaller screens.

Breakpoint Design: Added clean, content-driven media queries at 768px and 480px to adjust layout grid structures only when necessary.

Keyboard Accessibility: Added explicit :focus-visible styles for keyboard navigation to make interactive elements clearly identifiable.