import React, { useEffect, useState } from 'react';

function Running({ name, tick }) {
    const [run, setRun] = useState(undefined);
    const [seconds, setSeconds] = useState(0);
    const [milliseconds, setMilliseconds] = useState(0);

    //reset the timer back to 00:00
    function reset() {
        setRun(undefined);
        setSeconds(0);
        setMilliseconds(0);
    }
    //incrementing the time by seconds and milliseconds 
    useEffect(() => {
        if (run) {
            const timer = new Date(Date.now() - run)
            setSeconds(timer.getSeconds());
            setMilliseconds(timer.getMilliseconds());
        }
    }, [tick]);
    //to initiate reset
    useEffect(() => {
        return () => reset();
    }, []);
    //returning the time and two buttons
    return (
        <>
            <div>{name}</div>
            <div>{seconds}:{milliseconds}</div>
            <button onClick={() => setRun(Date.now())}>Start</button>
            <button onClick={() => reset()}>Reset</button>
        </>
    );
}
export default Running;