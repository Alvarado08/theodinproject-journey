import { useState } from "react";

export default function Color(){
    const [color,setColor] = useState('bg-red-500');
    const [count,setCount] = useState(0);

    function handleState(){
        const colors = ['bg-red-500','bg-green-500','bg-blue-500','bg-yellow-500','bg-pink-500','bg-purple-500'];
        setColor(colors[Math.floor(Math.random()*colors.length)]);
        setCount(count+1);
    }

    return(
        <>
            <div className="flex items-center justify-center min-h-screen">
                <main>
                    <h1 className="text-xl">Count: {count}</h1>
                    <div className={`${color} w-20 h-20 rounded shadow my-2`}></div>
                    <button onClick={handleState}>Change color</button>
                </main>
            </div>
        </>
    )
}