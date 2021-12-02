import React, {useState} from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = useState(data)
  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id)
    setPeople(newPeople)
  }

  return <div>
    {people.map((person) => {
      return <div key={person.id} className='item'>
        <h4>{person.name}</h4>
        <button onClick={() => removeItem(person.id)}>Remove Person</button>
      </div>
    })}
    <button onClick={() => setPeople([])}>Clear Items</button>
  </div>
};

export default UseStateArray;
