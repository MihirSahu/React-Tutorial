import React, { useState } from 'react';

const UseStateCounter = () => {
  const [counter, setCounter] = useState(0)
  const Decrease = () => {
    setCounter(counter - 1)
  }
  const Increase = () => {
    setCounter(counter + 1)
  }
  const Reset = () => {
    setCounter(0)
  }

  return <div>
    <section style={{margin:'4rem 0'}}>
      <h1>{counter}</h1>
      <button className='btn' onClick={() => Decrease()}>Decrease</button>
      <button className='btn' onClick={() => Increase()}>Increase</button>
      <button className='btn' onClick={() => Reset()}>Reset</button>
    </section>
  </div>
};

export default UseStateCounter;
