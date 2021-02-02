import React from 'react';
import Person from '../Person/Person';
import './Cohort.css';


function Cohort(props) {

  return (
    <>
      <h1>
        Staff
      </h1>
      <section className="cohort">
        {props.data.map(person => {
          return (
            <div>
              <p>{person.name}</p>
              <img className="person-image" src={person.photo} alt="personal"/>
              <p>{person.quote}</p>
              <p>{person.superlative}</p>
            </div>
          )
        })}
      </section>
    </>
  )
}

export default Cohort;
