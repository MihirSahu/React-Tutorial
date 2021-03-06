import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({name: 'peter', age: 24, message: 'random message'})
  const changeMessage = () => {
    setPerson({...person, message: 'hello world!'})     // ... keeps all other values the same
  }  

  return <div>
    <h3>{person.name}</h3>
    <h3>{person.age}</h3>
    <h3>{person.message}</h3>
    <button className='btn' onClick={() => changeMessage()}>Change Message</button>
  </div>
};

export default UseStateObject;
