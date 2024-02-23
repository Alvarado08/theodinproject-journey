# Knowledge Check

## How does data flow between React components? From child to parent? From parent to child? Both?

Data transfer is unidirectional. Parent to child.

## Why do we use props in React?

We use props to have dynamic reusable components and preventing DRY.

## How do we define default properties on a React component? What are some benefits in doing so?

In order to stop repeating ourselves re-defining these common values, and to protect our application from undefined values, we can define default props that will be used by the component in the absence of supplied values.

```jsx
function Button({text, size = 70, color = "blue"}){
    const buttonStyle = {
        color: color,
        fontSize: fontSize + "px"
    };

    return <button style={buttonStyle}>{text}</button>
}
export default function App() {
  return (
    <div>
      <Button />
      <Button text="Don't Click Me!" color="red" />
      <Button fontSize={20} />
    </div>
  );
}
```

## How can we pass functions as props?

```jsx
function Button({ text = "Click Me!", color = "blue", fontSize = 12, handleClick }) {
    const buttonStyle = {
        color: color,
        fontSize: fontSize + "px"
    };

    return (
        <button onClick={handleClick} style={buttonStyle}>
        {text}
        </button>
    );
}

export default function App() {
    const handleButtonClick = () => {
        window.location.href = "http://www.google.com";
    };

    return (
        <div>
        <Button handleClick={handleButtonClick} />
        </div>
    );
}
```

* The function handleButtonClick is defined in the parent component
* A reference to this function is passed through as the value for the handleClick prop on the Button component
* The function is received in Button and is called on a click event

Things to note:

* We only pass through a reference to `handleButtonClick`, i.e. we do not include parenthesis when passing the function to `Button`. If we were to do something like `handleClick={handleButtonClick()}` then the function would be called as the button renders
* You can rename the function to whatever you like when passing through as props, the prop name and value do not need to be the same. We could just as easily write `superCoolFunction={handleButtonClick}`
* Every `Button` calling this function will navigate to the same page. We can refactor the function and supply a parameter within `Button` to customize this functionality

```jsx
function Button({ text = "Click Me!", color = "blue", fontSize = 12, handleClick }) {
  const buttonStyle = {
    color: color,
    fontSize: fontSize + "px"
  };

  return (
    <button onClick={() => handleClick('https://www.theodinproject.com')} style={buttonStyle}>
      {text}
    </button>
  );
}

export default function App() {
  const handleButtonClick = (url) => {
    window.location.href = url;
  };

  return (
    <div>
      <Button handleClick={handleButtonClick} />
    </div>
  );
}
```

When supplying a parameter to the function we can’t just write `onClick={handleClick('www.theodinproject.com')}`, and instead must attach a reference to an anonymous function which then calls the function with the parameter. Like the previous example, this is to prevent the function being called during the render.
