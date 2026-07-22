# React Learning Notes

---

# 1. Tailwind CSS v4 Setup (Vite + React)

## Step 1: Install Tailwind

```bash
npm install tailwindcss @tailwindcss/vite
```

---

## Step 2: Configure Vite

Update **vite.config.js**:

```javascript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
});
```

---

## Step 3: Configure CSS

Replace the contents of **src/index.css** with:

```css
@import "tailwindcss";
```

---

## Step 4: Import CSS

Make sure **main.jsx** imports the CSS file:

```javascript
import "./index.css";
```

---

## Step 5: Restart the Development Server

```bash
npm run dev
```

---

# React VS Code Extension

Recommended extension:

- **ES7+ React/Redux/React-Native Snippets**

Useful snippets:

| Snippet | Description |
|----------|-------------|
| `rafce` | React Arrow Function Component with Export |
| `rfce` | React Function Component with Export |
| `useState` | Creates a useState hook |
| `useEffect` | Creates a useEffect hook |

---

# Props in React

## What are Props?

**Props (Properties)** are used to pass data from a **parent component** to a **child component**.

They make components **reusable**.

Instead of creating multiple similar components with different content, we create **one component** and pass different values using props.

---

## Example

### Parent Component

```jsx
<Card channel="maryyam" />
<Card channel="Ali" />
<Card channel="Sara" />
```

The same `Card` component is reused with different data.

---

# Passing Different Types of Data

Props can pass almost anything:

- Strings
- Numbers
- Booleans
- Objects
- Arrays
- Functions
- Variables

Example:

```jsx
let myObj = {
  username: "maryyam",
  age: 21,
};

<Card channel="maryyam" someObj={myObj} />
```

You can even pass arrays:

```jsx
const skills = ["React", "Node", "Django"];

<Card skills={skills} />
```

---

# Receiving Props

### Method 1: Receive the entire props object

```jsx
function Card(props) {
  return <h1>{props.channel}</h1>;
}
```

Access values using:

```jsx
props.channel
props.someObj
props.skills
```

---

### Method 2: Destructuring (Recommended)

Instead of writing `props.channel`, extract only what you need.

```jsx
function Card({ channel }) {
  return <h1>{channel}</h1>;
}
```

This is cleaner and easier to read.

---

# Default Props (Default Parameter Values)

You can provide default values if a prop is not passed.

```jsx
function Card({ channel, btnText = "New" }) {
  return <button>{btnText}</button>;
}
```

### Parent Component

```jsx
<Card channel="maryyam" />
```

Output:

```
New
```

---

If the parent passes a value:

```jsx
<Card
  channel="maryyam"
  btnText="Subscribe"
/>
```

Output:

```
Subscribe
```

The passed value overrides the default.

---

# Example

### Parent

```jsx
let myObj = {
  username: "maryyam",
  age: 21,
};

<Card
  channel="maryyam"
  btnText="Follow"
  someObj={myObj}
/>
```

### Child

```jsx
function Card({
  channel,
  btnText = "New",
  someObj,
}) {
  return (
    <>
      <h2>{channel}</h2>
      <p>{someObj.username}</p>
      <p>{someObj.age}</p>

      <button>{btnText}</button>
    </>
  );
}
```

---

# Flow of Props

```
Parent Component
       │
       │ Pass data
       ▼
<Card channel="maryyam" />
       │
       ▼
Child Component
function Card({ channel }) {
    return <h1>{channel}</h1>;
}
```

**Props flow only in one direction:**

```
Parent ➜ Child
```

A child component **cannot modify** props. If data needs to change, the parent should update it and pass the new value down.

---

# Important Points

- Props make components reusable.
- Props are read-only (immutable).
- Props are passed from parent to child.
- Use destructuring for cleaner code.
- Default values can be assigned using function parameters.
- Props can contain strings, numbers, objects, arrays, functions, and more.

---

# Quick Revision

### Pass Props

```jsx
<Card channel="maryyam" />
```

### Receive Props

```jsx
function Card({ channel }) {
  return <h1>{channel}</h1>;
}
```

### Pass an Object

```jsx
const user = {
  username: "maryyam",
  age: 21,
};

<Card someObj={user} />
```

### Receive Object

```jsx
function Card({ someObj }) {
  return <p>{someObj.username}</p>;
}
```

### Default Value

```jsx
function Card({
  btnText = "New",
}) {
  return <button>{btnText}</button>;
}
```

---

# Summary

- Install Tailwind CSS using `@tailwindcss/vite`.
- Add the Tailwind plugin to `vite.config.js`.
- Import Tailwind in `index.css`.
- Import `index.css` in `main.jsx`.
- Restart the Vite server after configuration.
- Use **props** to make components reusable.
- Pass data from parent to child.
- Destructure props for cleaner code.
- Use default parameter values for optional props.