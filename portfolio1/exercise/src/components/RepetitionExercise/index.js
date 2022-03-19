import React, { useState } from "react";
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
function Squats({ name, howtoSquat }) {
    let [count, setCount] = useState(0)
    return (
        <>
            <div style={textStyle}>{name}</div>
            <div style={howtoStyle}>{howtoSquat}</div>
            <div style={textStyle}>The rep count is {count}</div>
            <button 
            style={buttonStyle}
            onClick={() => setCount(count => count + 1)}>Add rep
            </button>
            <button 
            style={buttonStyle}
            onClick={() => setCount(count => 0)}>Reset
            </button>
        </>
    )
}

export default Squats;

