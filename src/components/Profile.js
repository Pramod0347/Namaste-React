import { useState, useEffect } from "react";

const profile = (props) => {

    const [count, setCount] = useState(0);

    useEffect(() => {

        const timer = setTimeout(() => {
            console.log('useEffect Timer');
        }, 1000);
        console.log('useEffect');

        return () => {
            clearInterval(timer);
            console.log('useEffect Returned');
            
        };
    },[]);



    return (
        <div>
            <h1>Profile {props.name}</h1>
            <p>Count : {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    )
}

export default profile;