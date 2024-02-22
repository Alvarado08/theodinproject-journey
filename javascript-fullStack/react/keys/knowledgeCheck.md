# Knowledge Check

## Why does React need keys?

Keys help keep track of items if they are updated or moved. Prevents re-rendering the entire data. React matches the keys of each of the previous list to the updated list. React will only update the items that have changed.

## How do you use keys?

```jsx
<Component key={keyValue} />
//or
<div key={keyValue} />
```

## Where should the key value ideally come from?

A key should ideally come from a unique id.

## When can we use an array index as the key value?

An array index is ok to use when we know for a fact the list will remain unchanged.

## What is an anti-pattern when using keys?

An anti-pattern is using on the fly generated id values as keys such as `key={Math.random()}` or `key={uuid()}`
