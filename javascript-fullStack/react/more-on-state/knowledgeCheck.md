# Knowledge Check

## What should you keep in mind while declaring state?

State should not be mutated. We should treat state as if it was immutable.

## Why should we always use setState to update our state?

To re-render the entire component instead of just changing the state variable on the fly.

## What does “state as a snapshot” mean?

State updates are asynchronous. State variables are not reactive. Rather, a change in state triggers components to re-render.

## What’s the difference between passing a value vs a callback to the setState function?

When a callback is passed to the `setState` function, it ensures that the latest state is passed in as an argument to the callback. When a value is passed, it uses the current state value instead of the latest value.

## Why should we always provide a new Object to setState?

Because if we don’t provide a new object to setState it is not guaranteed to re-render the page. `setState` uses `Object.is` to determine if the previous state is the same.

## Why would you want to control a component?

To add any custom state hooks and control additional behaviors. For example, inputs.
