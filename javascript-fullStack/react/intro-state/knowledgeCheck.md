# Knowledge Check

## What is state?

State is a term that is widley and universally used. Not just in programming. In React, state is a component's memory. Basically a way to track dynamic data.

## What is the useState hook and how to use it?

A hook in React is basically a function in charge of handling data changes. Functions that let you use React features. All hooks are recognizable by the `use` prefix.

`useState` allows you to define state in a functional component. It takes an initial value as a parameter and returns an array with two elements that we can destructure to get:

* Current state value
* A function to update the state value

State definition with `useState` commonly follows this pattern:

```jsx
const [stateValue, setStateValue] = useState(initialValue);
const [backgroundColor, setBackgroundColor] = useState(initialColor);
```

## What happens to the component when one of its state is changed?

When a component's state is changed, it preforms something called rerender. It essentially destroys and recreates the component from scratch but this time the latest state value will be returned from `useState`.

Rerendering is a key feature of React that enables it to efficiently update the user interface in response to changes in the underlying data.

## What are some of the rules of hooks?

* Can only be called from the top level of a functional component
* Can't be used inside loops or conditions
