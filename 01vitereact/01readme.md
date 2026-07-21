# React Day 1 Notes

---

# What is React?

- React is a **JavaScript library** used to build user interfaces (UI).
- It helps create **interactive, reusable components**.

React itself does **not** create websites or mobile apps directly.

React can be used with:

- **react-dom** → Websites
- **react-native** → Mobile applications

```
React
│
├── react-dom      → Web
└── react-native   → Mobile
```

---

# Creating a React Project

## Old Method (Create React App)

```bash
npx create-react-app my-app
```

- Bulky
- Slower
- Mostly replaced by Vite

---

## Modern Method (Vite)

```bash
npm create vite@latest
```

Then:

```bash
cd project-name
npm install
npm run dev
```

### Why `npm install`?

It downloads all dependencies listed in **package.json** and creates:

```
node_modules/
```

---

# Why React?

Browsers only understand:

- HTML
- CSS
- JavaScript

They **do not understand JSX or React directly.**

React code is converted into JavaScript before running in the browser.

---

# Project Structure

```
project
│
├── public/
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   └── ...
│
├── package.json
└── index.html
```

---

# Entry Point

The application starts from:

```
src/main.jsx
```

Example:

```jsx
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <App />
);
```

`main.jsx` renders the **App** component into the webpage.

---

# Role of index.html

There is only **one HTML page**.

Inside it:

```html
<div id="root"></div>
```

and

```html
<script type="module" src="/src/main.jsx"></script>
```

The browser loads **main.jsx**, and React inserts the application inside:

```
<div id="root">
```

This is why React applications are called **Single Page Applications (SPAs)**.

---

# ReactDOM

ReactDOM connects React with the browser.

It renders React components into the webpage.

React keeps a **Virtual DOM**, compares changes efficiently, and updates only the necessary parts of the browser DOM.

---

# StrictMode

In `main.jsx`:

```jsx
<StrictMode>
    <App />
</StrictMode>
```

Purpose:

- Helps detect potential problems
- Gives development warnings
- Has no effect in production

---

# Components

A React component is simply a JavaScript function that returns JSX.

Example:

```jsx
function App() {
    return <h1>Hello React</h1>;
}
```

---

# Creating Your Own Component

Create:

```
src/Newfille.jsx
```

```jsx
function Newfille() {
    return (
        <h3>This is ready</h3>
    );
}

export default Newfille;
```

Use it inside `App.jsx`:

```jsx
import Newfille from "./Newfille";

function App() {
    return (
        <Newfille />
    );
}

export default App;
```

Custom components are used like HTML tags:

```jsx
<Newfille />
```

---

# Component Naming Rules

✅ Component names must start with a capital letter.

Correct:

```jsx
function Header() {}
```

Incorrect:

```jsx
function header() {}
```

It is also best practice to capitalize the filename:

```
Header.jsx
Navbar.jsx
Footer.jsx
```

---

# JSX Files

If a file returns JSX (HTML-like syntax):

```
Component.jsx
```

If it contains only JavaScript logic:

```
utils.js
```

Although Vite usually uses `.jsx` for React components.

---

# Returning JSX

A component can return **only one parent element**.

❌ Incorrect

```jsx
return (
    <h1>Hello</h1>
    <h2>World</h2>
)
```

✅ Correct

```jsx
return (
    <>
        <h1>Hello</h1>
        <h2>World</h2>
    </>
)
```

The empty tags

```jsx
<>
</>
```

are called **React Fragments**.

They group multiple elements without adding extra HTML.

---

# Important Idea

React lets us write HTML-like code **inside JavaScript** using JSX.

Example:

```jsx
function App() {
    return (
        <h1>Hello React</h1>
    );
}
```

Although it looks like HTML, it is actually JSX.

---

# Workflow

```
Browser
     │
     ▼
index.html
     │
     ▼
main.jsx
     │
     ▼
<App />
     │
     ▼
Other Components
     │
     ▼
Rendered inside #root
```

---

# Today's Key Takeaways

- React is a JavaScript library.
- ReactDOM is used for websites.
- React Native is used for mobile apps.
- Vite is the modern way to create React projects.
- `main.jsx` is the entry point.
- `index.html` contains only one root element.
- React apps are Single Page Applications.
- Components are JavaScript functions that return JSX.
- Component names should start with a capital letter.
- JSX files usually have a `.jsx` extension.
- A component must return one parent element.
- React Fragments (`<> </>`) allow multiple children without extra HTML.