# Cedar & Stone Home Services — Week 5 Starter Project

## Project
**Week 5 — Build with a System: Bootstrap**

WebWorks Studio is creating a responsive service page for Cedar & Stone Home Services. The client content and visual direction are supplied. Your job is to implement the approved direction using **Bootstrap 5.3**.

This week, use the professional workflow:

**Identify Requirement → Find Bootstrap Pattern → Implement → Adapt → Test**

## Before You Begin
1. Create `webworks-studio/week05-bootstrap/` inside your semester repository.
2. Place all starter files inside that folder.
3. Open the entire `week05-bootstrap` folder in Visual Studio Code.
4. Open `design-reference.svg` and review the approved client direction.
5. Preview `index.html` before editing.
6. Review the TODO comments in `index.html`.
7. Identify what each section needs to accomplish before choosing Bootstrap classes or components.

## Bootstrap Setup
Bootstrap CSS and the Bootstrap JavaScript bundle are already connected in `index.html`.

**Do not replace the supplied Bootstrap CDN links with an older version from a tutorial.**

The starter uses Bootstrap **5.3.8**.

Remember: Bootstrap CSS handles appearance and layout. Interactive Bootstrap components may depend on the supplied JavaScript bundle.

## Required Bootstrap Work

### 1. Bootstrap Responsive Grid
Use Bootstrap's `container → row → column` structure where appropriate.

Choose responsive behavior intentionally. Test the page at narrow, medium, wide, and in-between viewport widths rather than assuming Bootstrap's defaults automatically produce the best layout.

### 2. Required Component: Responsive Navbar
Convert the supplied header/navigation into a Bootstrap **Navbar**.

The navigation must:
- display appropriately on larger screens;
- collapse at smaller viewport widths;
- use Bootstrap's documented collapse behavior;
- remain keyboard usable; and
- retain required Bootstrap structure and accessibility attributes.

Use the official Bootstrap documentation to identify an appropriate navbar pattern. Adapt the documented pattern to Cedar & Stone rather than rebuilding responsive navigation from scratch.

### 3. Required Component: Cards
Convert the three service offerings into Bootstrap **Cards**.

The cards should:
- use a consistent structure;
- respond appropriately across viewport widths;
- include the supplied image, category, heading, description, and link;
- align visually as a group; and
- use Bootstrap utilities where appropriate before adding custom CSS.

### 4. Bootstrap Utilities
Use Bootstrap utilities where they reasonably solve common spacing, display, alignment, sizing, gap, border, typography, and button needs.

Before writing custom CSS for a common interface behavior, ask:

**Does Bootstrap already provide an appropriate utility for this?**

### 5. Limited Client-Specific CSS
Use `css/custom.css` only when the Cedar & Stone brand direction requires styling that Bootstrap does not reasonably provide.

Appropriate custom CSS may support client-specific color, typography, or a targeted visual treatment.

Do not rebuild Bootstrap's grid, cards, buttons, or common utility behavior in your custom stylesheet.

## Optional Bootstrap Components
After completing the required work, you may use another Bootstrap component if it genuinely fits an interface requirement. Possible examples include List Group, Badge, or Alert.

Additional components are **not required**. Do not add a component simply because Bootstrap provides one.

## Preserve
Do not unnecessarily change the supplied client content, meaningful image alternative text, section order, working links, or client contact information.

Preserve semantic HTML wherever possible. You may modify markup when necessary to implement correct Bootstrap component structure.

## Test Before Handoff
Before submitting, verify:
- responsive behavior at narrow, medium, wide, and in-between widths;
- navbar collapse/expand behavior;
- all links and interactive controls;
- keyboard operation and visible focus;
- logical headings and semantic structure;
- meaningful alternative text;
- readable contrast;
- no hidden, clipped, overlapping, or missing content.

Bootstrap provides a system. It does **not** remove your responsibility to test the finished interface.

# Developer Handoff — Required

Complete all three responses below. Keep each response concise and specific to **your Cedar & Stone implementation**.

## 1. Framework Choice
**Identify one feature Bootstrap made significantly faster to implement. Briefly explain what Bootstrap provided and why that helped this project.**

[Replace this text with your response.]

## 2. Adaptation
**Identify one Bootstrap default you intentionally changed for the client. Explain what you changed and how the adaptation better supports Cedar & Stone.**

[Replace this text with your response.]

## 3. Professional Judgment
**Identify one part of the project you would not rebuild from scratch because Bootstrap already provides an appropriate solution. Explain why keeping the framework solution is the better professional choice.**

[Replace this text with your response.]

## Live Site
[Add your published GitHub Pages URL here.]

## Final Reminder
The goal is not to use as many Bootstrap classes as possible.

**Identify → Find → Implement → Adapt → Test → Handoff → Deliver**
