import React, { Component } from 'react';
import Cohort from '../Cohort/Cohort';
import people from '../../data/yearbook-data.js';
import AddStudent from '../AddStudent/AddStudent'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      staff: people.staff,
      students: people.students
    }
  }

  render() {
    return (
      <div className="App">
      <header className="App-header">
      <h1>Turing Yearbook</h1>
      </header>
      <AddStudent />
      <Cohort data={this.state.staff}/>
      <Cohort data={this.state.students}/>
      </div>
    );
  }
}

export default App;
