import React from 'react';
import './Person.css';

function Person(props) {
  const person = props.data

  return (
    <div>
      <p>{person.name}</p>
      <img className="person-image" src={person.photo} alt="personal"/>
      <p>{person.quote}</p>
      <p>{person.superlative}</p>
    </div>
  )
}

export default Person;
