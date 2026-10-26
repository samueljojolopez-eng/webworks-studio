# Week 10: Meet React — Component-Based Web Development

## Project Overview

**Role:** Junior Front-End Developer  
**Project:** Community Connect React Service Directory

Briefly describe what you refactored and added.

[Write 2–3 sentences here.]

---

# React Decisions

Document approximately three meaningful React decisions.

## Decision 1

**React Concept:**  
[Component, props, list rendering, state, or event]

**Used For:**  
[What did you implement?]

**Why It Helps:**  
[How does this improve the code or interface?]

## Decision 2

**React Concept:**  

**Used For:**  

**Why It Helps:**  

## Decision 3

**React Concept:**  

**Used For:**  

**Why It Helps:**  

---

# React Reflection

Write approximately **75–100 words** responding to:

> How is working with React components different from manipulating the DOM directly as you did in Week 8? What seems easier, and what seems more complex?

[Write your response here.]

---

# Testing Notes

- [ ] `npm install` completed successfully
- [ ] `npm run dev` runs the project
- [ ] ServiceCard is reusable
- [ ] Services render from the supplied array
- [ ] Every rendered service uses a stable key
- [ ] All filter works
- [ ] Health filter works
- [ ] Housing filter works
- [ ] Community filter works
- [ ] Active filter is visually clear
- [ ] Active filter uses an accessible programmatic state
- [ ] Keyboard interaction works
- [ ] Browser console has no unresolved warnings/errors
- [ ] `npm run build` completes successfully

---

# Final Handoff Check

- [ ] My project folder is named `week10-react`
- [ ] I used the supplied React/Vite project
- [ ] `ServiceCard.jsx` exists
- [ ] I used props
- [ ] I used `map()`
- [ ] I used stable keys
- [ ] I used `useState()`
- [ ] I used React event handling
- [ ] I used native buttons for filters
- [ ] `node_modules` is not committed
- [ ] My README is complete
- [ ] I committed and pushed the completed project


# Community Connect — Week 10 React Service Directory

## 1. Project Summary
Community Connect is an introductory React service directory application built for WebWorks Studio. It displays local health, housing, and community support resources, allowing users to instantly filter listings by category through reactive state management.

## 2. Component Structure & Props
* **`App.jsx`**: Manages the master service data array, holds the active filter state via `useState`, and renders the category buttons and grid layout.
* **`ServiceCard.jsx`**: A reusable card component that receives individual service properties (`title`, `category`, `description`, `contact`) via props and renders them inside a clean article element.

## 3. Key React Concepts Used
* **State Management (`useState`)**: Tracks the currently selected category (`All`, `Health`, `Housing`, or `Community`).
* **Array `.map()` & Stable Keys**: Dynamically generates cards and category buttons using unique service IDs (`service.id`) as reliable React keys.
* **Conditional Filtering**: Filters the master data array on the fly before mapping over results.

## 4. Accessibility Notes
* **`aria-pressed`**: Applied to filter buttons so assistive technologies announce which category button is currently active.
* **`aria-live`**: A polite live region immediately communicates the number of active search results whenever a filter button is clicked.
* **Keyboard Focus**: All interactive filter buttons feature clear focus rings for keyboard navigation.

## 5. Testing & Build Notes
* **Viewports**: Tested across mobile, tablet, and desktop viewports to ensure the CSS grid collapses and expands gracefully.
* **Production Build**: Verified that `npm run build` runs successfully without JSX or Vite bundling errors.