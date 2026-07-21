React Hooks are special functions that let function components use React features such as state. The useState Hook stores data and, whenever that data changes using its setter function (like setCounter), React automatically renders the component again so the UI always shows the latest value. That's why we use Hooks instead of normal variables when we want changes to appear on the screen.










# React Hooks - `useState`

## Why doesn't a normal variable update the UI?

Consider this example:

```jsx
function App() {

  let counter = 10;

  const addValue = () => {
    counter = counter + 1;
    console.log(counter);
  };

  return (
    <>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Value</button>
    </>
  );
}
```

### Output

- The `counter` value changes in JavaScript.
- It can be seen in the console.
- **But the UI never updates.**

### Why?

React renders the component only once. Changing a normal JavaScript variable does **not** tell React that something has changed.

React has no idea that it needs to render the component again.

---

# What is a Hook?

A **Hook** is a special function provided by React that gives React components extra features.

For example:

- storing data (state)
- updating the UI
- handling side effects
- accessing lifecycle features

The most commonly used Hook is **`useState()`**.

---

# Importing the Hook

```jsx
import { useState } from "react";
```

`useState` is imported from the React library.

---

# useState()

```jsx
const [counter, setCounter] = useState(15);
```

`useState()` returns **two values**.

```jsx
const [stateVariable, updateFunction] = useState(initialValue);
```

Example:

```jsx
const [counter, setCounter] = useState(15);
```

Here,

- `counter` → stores the current value.
- `setCounter()` → updates the value.

Initial value:

```jsx
15
```

can be anything:

```jsx
useState(0)
useState("")
useState([])
useState({})
useState(true)
useState(false)
```

---

# Why do we use setCounter()?

Instead of writing

```jsx
counter = counter + 1;
```

we write

```jsx
setCounter(counter + 1);
```

Because:

- `setCounter()` updates the state.
- React notices the state has changed.
- React renders the component again.
- The UI updates automatically.

---

# Add Value

```jsx
const addValue = () => {
  setCounter(counter + 1);
};
```

When the button is clicked,

Current value

```
15
```

becomes

```
16
```

React automatically updates the screen.

---

# Remove Value

```jsx
const removeValue = () => {
  if (counter > 0) {
    setCounter(counter - 1);
  }
};
```

This prevents the counter from becoming negative.

---

# Complete Example

```jsx
import { useState } from "react";

function App() {

  const [counter, setCounter] = useState(15);

  const addValue = () => {
    setCounter(counter + 1);
  };

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <h1>React</h1>

      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>
        Add Value
      </button>

      <br />

      <button onClick={removeValue}>
        Remove Value
      </button>
    </>
  );
}

export default App;
```

---

# How React Updates the UI

```
Button Click
      │
      ▼
setCounter(newValue)
      │
      ▼
State Changes
      │
      ▼
React Detects Change
      │
      ▼
Component Renders Again
      │
      ▼
Updated UI
```

---

# Important Points

- A normal variable does **not** update the UI.
- State variables **do** update the UI.
- `useState()` is a React Hook.
- Hooks can only be used inside React function components (or custom hooks).
- `useState()` returns two values:
  - current state
  - state updating function
- Always update state using the setter function (`setCounter`), not by assigning directly.

---

# Difference Between Variable and State

| Normal Variable | State (`useState`) |
|-----------------|--------------------|
| Stores data | Stores data |
| Can change | Can change |
| UI does **not** update | UI updates automatically |
| React doesn't know it changed | React knows it changed |
| `counter = counter + 1` | `setCounter(counter + 1)` |

---

# Easy Interview Definition

**Hook:**  
A Hook is a special function in React that lets function components use React features like state and lifecycle methods. The most common Hook is `useState`, which stores data and updates the UI whenever that data changes.