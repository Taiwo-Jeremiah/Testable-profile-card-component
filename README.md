# Stage 1B: Testable Profile Card

A responsive, highly accessible, and automated-test-ready Profile Card built entirely with **Vanilla HTML, CSS, and JavaScript**. This project focuses heavily on semantic HTML structuring, accessibility (WCAG AA), and precise DOM manipulation for live data rendering.

## 🚀 Live Demo

(https://taiwo-jeremiah.github.io/Testable-profile-card-component/)

## 🛠️ Key Features & Requirements Met

- **Semantic Architecture:** Built avoiding generic `<div>` tags where possible, utilizing `<article>`, `<figure>`, `<section>`, and `<nav>` to create a meaningful document outline.
- **Live Epoch Time:** Implements a JavaScript interval that fetches and displays the current system time in milliseconds (`Date.now()`), updating exactly every 1000ms.
- **Responsive Layout:** Mobile-first design using CSS Flexbox/Grid that stacks vertically on small screens and transitions to a clean side-by-side layout on desktop.
- **Robust Text Handling:** CSS handles long, unbroken text strings gracefully without breaking the card layout using `word-wrap` and `overflow-wrap`.
- **Automated QA Ready:** Every required element is tagged with exact `data-testid` attributes for stable automated grading.

## 📂 How to Run Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Taiwo-Jeremiah/Testable-profile-card-component.git
   ```
2. **Navigate to the directory:**
   ```bash
   cd Your-Repo-Name
   ```
3. **Open the project:**
   - Open the `index.html` file in any modern web browser.
   - No build steps or packages are required.

## 🧠 Design & Technical Decisions

### 1. Accessibility (A11y) First

- **Live Regions:** The dynamic epoch time is wrapped in an element with `aria-live="polite"`. This ensures screen readers announce the time updates without interrupting the user's current flow.
- **Keyboard Navigation:** All interactive elements (social links) have visible focus states (`:focus-visible`) so users navigating via the Tab key can easily see where they are.
- **Secure Links:** All external social links open in a new tab (`target="_blank"`) and are secured using `rel="noopener noreferrer"`.
- **Visual Contrast:** Text and background colors were explicitly chosen to pass WCAG AA contrast standards.

### 2. JavaScript Approach

- The JavaScript is intentionally minimal. Rather than using bloated date-formatting libraries, it directly leverages the native `Date.now()` method to satisfy the specific "epoch time in milliseconds" requirement, wrapped in a `setInterval` for accurate live ticking.

## 🧪 Technical Specifications (Test IDs)

The following `data-testid` attributes are implemented exactly as required:

- Root Container: `test-profile-card`
- Name: `test-user-name`
- Biography: `test-user-bio`
- Time Display: `test-user-time`
- Avatar: `test-user-avatar`
- Social Links Wrapper: `test-user-social-links`
- Individual Links: `test-user-social-github`, `test-user-social-linkedin`, `test-user-social-twitter`
- Hobbies List: `test-user-hobbies`
- Dislikes List: `test-user-dislikes`
