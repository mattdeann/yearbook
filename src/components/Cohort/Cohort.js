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
        {props.data.map(person => <Person data={person} />)}
      </section>
    </>
  )
}

export default Cohort;
