import './App.css';
import Squats from './components/RepetitionExercise';
import Running from './components/DurationExercise';
import React, { useEffect, useState } from 'react';

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
const headerStyle = {
  backgroundColor: 'lightPink',
  color: 'white',
  fontSize: '44px',
  fontFamily: 'Georgia',
  textAlign: 'center'
}
export default function App() {
  let [currentCount, setCurrentCount] = useState(0);
  let [displayComp, setDisplayComp] = useState(-1);
  const [tick, setTick] = useState(0);
  let componenets = [
    <Squats name="Squats" count={currentCount} setCount={setCurrentCount}></Squats>,
    <Running name="Running" minutes={2} tick={tick} increment></Running>
  ]
//intervaling per tick and clearing when returned
  useEffect(() => {
    const timer = setInterval(() => { setTick(tick => tick + 1); }, 100);
    return () => clearInterval(timer);
  }, []);
  return (
    <>
      <h1 style={headerStyle}>Choose your workout!</h1>
      {(displayComp !== -1 ?
        <>
          {displayComp !== -1 ? componenets[displayComp] : undefined}
          <button style={buttonStyle} onClick={() => setDisplayComp(-1)}>Return</button>
        </>
        : <>
          <p>
            <button style={buttonStyle} onClick={() => setDisplayComp(0)}>Squats</button>
          </p>
          <p>
            <button style={buttonStyle} onClick={() => setDisplayComp(1)}>Running</button>
          </p>
        </>
      )
      }
    </>
  );
}