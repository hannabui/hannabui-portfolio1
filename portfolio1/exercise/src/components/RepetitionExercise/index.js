import React, { useState } from "react";

function Squats({ name }) {
    let [count, setCount] = useState(0)
    return (
        <>
            <div>{name}</div>
            <div>The rep count is {count}</div>
            <button onClick={() => setCount(count => count + 1)}>Add rep</button>
            <button onClick={() => setCount(count => 0)}>Reset</button>
        </>
    )
}

export default Squats;

