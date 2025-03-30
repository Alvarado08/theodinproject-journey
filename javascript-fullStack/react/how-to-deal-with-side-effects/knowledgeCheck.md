# Knowledge Check

## What is an effect?

An effect is an interaction with the outside world. An effect runs code in order to synchronize a component as necessary.

## What constitutes a `useEffect` hook?

The `useEffect` hook is a mechanism outside the concepts that React applies, and allows you to sync your component with various external systems like a server, API, or browser DOM.

## What is the one question we can ask to know when to use an effect?

The single question that you can ask yourself before you use an effect is if there are any such external systems that need to be synced with, apart from props or state.

## What do we mean by lifting up the state?

If multiple children are required to make use of a single state, it should be moved up to the parent that has all of the components that need it.
