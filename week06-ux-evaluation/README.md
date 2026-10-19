# Week 6 — UX Evaluation Brief
## Hill Country Trail Guide

**Primary User:** Maya Torres  
**Primary Task:** Choose a beginner-appropriate Saturday hike that can be completed in about three hours or less.

---

## 1. Task Walkthrough
Briefly describe what Maya would try to do first, what she would look for, and where she might hesitate.

I think that maya would first look at the featured trails but then turn to the simple buttons to limit surch. there may be a bit of hesitation when it comes to the more info buttons and the plan your hike button.

---

## 2. Five UX Findings

Document **exactly five meaningful findings**.

### Finding 1
**Observation:**  
The trail category filters look like interactive pill buttons, but they are static text elements with no interactive button or checkbox functionality.

**Evidence:**  
In index.html (lines 29–33), the difficulty and distance tags are built using standard <span> tags (<span class="fake-control">Easy</span>) instead of <button> or <input type="checkbox"> elements.

**User Impact:**  
Maya would click "Easy" or "Under 5 miles" expecting the trail list to narrow down. When nothing happens, she is unable to filter routes for her schedule or skill level, leading to confusion and unnecessary searching.

**Principle:**  
Feedback & User Expectations and Accessibility

**Priority:** High

**Recommendation:**  
Convert static container elements into semantic, keyboard-accessible button controls or checkable inputs with active visual states and dynamic filter behaviors.

### Finding 2
**Observation:**  
all featured cards are "easy" and "Moderate" but there is no imidiate showing of a "hard" or "dog friendly" trail which may intrest more people.
**Evidence:** 

**User Impact:**
When Maya scans the page, seeing no imidiate option for the "dog friendly" or "under 5 miles" catagory may lead her to go off the page or loose intrest all together.
**Principle:**
Clarity and Contextual Navigation
**Priority:**  Medium
**Recommendation:**  
update the list to show some more beginer appieling trails first.

### Finding 3
**Observation:**  
Clicking a trail card's details link abruptly jumps the user down to a long wall of unstructured body text further down the same page, breaking the browsing layout.
**Evidence:** 
In index.html (lines 76–90), detailed trail descriptions are rendered as plain <section class="wrap detail-block"> paragraphs stacked sequentially directly beneath the main card grid.
**User Impact:**
When Maya selects a trail to inspect, she is suddenly thrown down to dense paragraphs at the bottom of the page, losing her visual place in the grid. Comparing multiple trails forces her into endless scrolling up and down, causing high cognitive friction and disorientation.
**Principle:** 
Information Hierarchy & Layout Consistency / Decision-Making Support
**Priority:**
High
**Recommendation:**  
Reorganize trail detail blocks into structured, contextual UI components so users can view trail specifics without losing their place in the primary list.

### Finding 4
**Observation:**  
Primary header navigation options and call-to-action buttons lead to non-functional dead ends using empty placeholder hash links.
**Evidence:**
In index.html, lines 11–14 feature header links configured as <a href="#"> (Trails, Conditions, Tips, About), and line 95 renders the main call-to-action button as <a class="cta" href="#">Plan your hike</a>.

**User Impact:**  
When Maya attempts to check current conditions or plan her trip before leaving home, clicking these links simply jumps to the top of the page without displaying new information or taking her to the promised tools, resulting in frustration and dead-end navigation.
**Principle:**  
Visibility of Important Information / Navigation Reliability and User Trust
**Priority:**
High
**Recommendation:**  
Connect all primary navigation links and call-to-action buttons to real functional target sections, active sub-pages, or smooth-scrolling page anchors.

### Finding 5
**Observation:**  
On mobile viewports, header navigation links stack closely together without sufficient tap padding or clearance between touch targets.
**Evidence:**
In styles.css (lines 43–45), the mobile media query (@media (max-width: 760px)) wraps navigation links in a flex container with standard inline text spacing and no vertical block padding.
**User Impact:** 
When Maya navigates the site on her smartphone, sitting or standing near a trail, the tightly packed text links make it easy to accidentally tap the wrong option (e.g., hitting "Tips" instead of "Conditions"), causing frustrating mis-clicks.
**Principle:** 
Mobile Usability
**Priority:**  
Medium
**Recommendation:**  
Increase the physical touch target area and spacing for mobile navigation links to ensure each link meets standard touch target height guidelines and prevents accidental taps.
---

## 3. Top Three Priorities
Identify the three findings that should move forward into Week 7.

1. finding 1
2. finding 3
3. finding 4

For each, briefly explain why it matters to Maya's primary task.

---

## Week 7 Handoff
Week 7 will turn your top three priorities into interface requirements, wireframes, and a prototype.
