import './App.css';
import Squats from './components/RepetitionExercise';
import Running from './components/DurationExercise';
import React, { useEffect, useState } from 'react';

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
      <h1 style={{backgroundcolor: "#748b97"}}>Choose your workout!</h1>
      {(displayComp !== -1 ?
        <>
          {displayComp !== -1 ? componenets[displayComp] : undefined}
          <button onClick={() => setDisplayComp(-1)}>Return</button>
        </>
        : <>
          <p>
            <button onClick={() => setDisplayComp(0)}>Squats</button>
          </p>
          <p>
            <button onClick={() => setDisplayComp(1)}>Running</button>
          </p>
        </>
      )
      }
    </>
  );
}