# 🚀 Dev Stack - Build Your Ideal Tech Stack

Dev Stack is an interactive web application designed for developers to explore, filter, and curate their personalized technology stack for modern software development.

---

## 🌟 Features

* **Interactive Technology Showcase:** Browse through a clean, 3-column responsive grid displaying technologies with detailed badges, star ratings, and difficulty levels.
* **Smart Stack Builder:** Effortlessly add technologies to your personal stack. Includes duplicate prevention, disabled state management for added items, and quick removal (single item or "Remove All").
* **Real-time Notifications & Dynamic UI:** Enhanced user experience featuring sticky navigation, responsive mobile drawer, single-source CSS brand gradient theme, loading states, and custom dynamic alerts using `react-toastify`.

---

## 🛠️ Technologies Used

* **Frontend Framework:** React.js (Bootstrapped with Vite)
* **Language:** TypeScript / JavaScript (ES6+)
* **Styling:** Tailwind CSS, DaisyUI
* **Icons:** React Icons (`react-icons`)
* **Notifications:** React-Toastify
* **Data Source:** Custom JSON Data

---

## ❓ React Conceptual Questions & Answers

### 1. What is JSX, and why is it used in React?
**Answer:** JSX (JavaScript XML) is a syntax extension for JavaScript that allows us to write HTML-like structures directly inside JavaScript files. It is used in React because it makes building component layouts intuitive, visually readable, and enables us to render dynamic JavaScript expressions effortlessly within the UI.

---

### 2. What is the difference between props and state?
**Answer:** 
* **Props (Properties):** Read-only data passed from a parent component down to a child component. They cannot be modified by the child component itself.
* **State:** Local data managed internally within a component that can change over time. When state updates, React automatically re-renders the component to reflect the changes.

---

### 3. What does the `useState` hook do, and where did you use it in this project?
**Answer:** The `useState` hook allows functional components to store and manage local state. In this project, `useState` was used to manage the selected items in the `stack` array (for adding/removing items in "Your Stack") and to track loading states while fetching technology data.

---

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?
**Answer:** The `useEffect` hook handles side effects in React components, such as data fetching, subscriptions, or DOM manipulations. In this project, `useEffect` was used to trigger an asynchronous `fetch` request that loaded technology data from the local JSON file when the component first mounted.

---

### 5. Why does every item in a `.map()` list need a unique `key` prop?
**Answer:** React uses the unique `key` prop to identify which items in a list have changed, been added, or removed. It helps React's Virtual DOM update and re-render only the modified elements efficiently rather than re-rendering the entire list.

---

### 6. What is conditional rendering? Show one place you used it.
**Answer:** Conditional rendering is the process of displaying different JSX UI elements or components based on certain conditions (like `if` statements or ternary operators). 

**Example from project:** Rendering the empty state message when the stack is empty, versus rendering the stack items list when `stack.length > 0`:

```tsx
{stack.length === 0 ? (
  <p className="text-gray-400">Your stack is empty.</p>
) : (
  <Stacks setStack="{setStack}" stack="{stack}"/>
)}
