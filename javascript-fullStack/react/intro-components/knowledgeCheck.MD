# Knowledge Check

## What does a React element look like?

It is an independent and reusable chunk of UI of the main app in the shape of a JavaScript function

## How would you create a functional component?

```jsx
function Greeting() {
  return <h1>Hello, World!</h1>;
}
```

## How do you export and then import a component?

```jsx
// Greeting.jsx
function Greeting() {
  return <h1>Hello, World!</h1>;
}

// Default export
export default Greeting;

// Named export
export {Greeting}
```

```jsx
// main.jsx

// Default import
import Greeting from './Greeting.jsx'

// Named import
import { Greeting } from './Food.jsx'
```
