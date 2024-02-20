# Knowledge Check

## How do you render a list of elements/components in JSX?

```jsx
return(
    <ul>
        {animals.map(animal => <li key={animal}>{animal}</li>)}
    </ul>
)
```

## What are the ways you could render UI conditionally?

* if/else statements
* ternary operator
* && operator
* switch

## How would you conditionally return JSX?

```jsx
return (
  <li className="item">
    {isPacked ? name + ' ✔' : name}
  </li>
);
```
