import React, { useEffect, useState } from 'react';
//styling
const buttonStyle = {
    backgroundColor: 'lightPink',
    width: '100%',
    height: '100%',
    border: 'white',
    color: 'white',
    padding: '10px 20px',
    textDecoration: 'none',
    borderRadius: '5px',
    textAlign: 'center',
    fontFamily: 'Georgia',
    fontSize: '24px',
    margin: '6px'
  }
  const textStyle = {
    fontSize: '34px',
    textAlign: 'center',
    fontFamily: 'Georgia'
  }
  const howtoStyle = {
    fontSize: '24ppx',
    textAlign: 'center',
    fontFamily: 'Georgia',
    padding: '20px',
    borderStyle: 'solid'
  }
//function
function Running({ name, tick, howtoRun }) {
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
            <div style={textStyle} >{name}</div>
            <div style={howtoStyle}>{howtoRun}</div>
            <div style={textStyle} >{seconds}:{milliseconds}</div>
            <button 
            style={buttonStyle} 
            onClick={() => setRun(Date.now())}>Start
            </button>
            <button style={buttonStyle}
            onClick={() => reset()}>Reset
            </button>
        </>
    );
}

export default Running;