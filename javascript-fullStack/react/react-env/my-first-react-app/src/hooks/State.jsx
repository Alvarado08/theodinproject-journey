import { useState } from "react";

export default function State(){
    const [count, setCount] = useState(0);
    
    function increment(){
        setCount(count + 1);
    }
    function decrement(){
        count > 0 && setCount(count - 1);
    }
    return(
        <>
            <p>{count}</p>
            <button onClick={increment}>Increment Me!</button>
            <br />
            <br />
            <button onClick={decrement}>Decrement Me!</button>
        </>
    )
}