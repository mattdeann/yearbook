import React, { Component } from 'react';
// import people from '../../data/yearbook-data.js';
import './AddStudent.css';

class AddStudent extends Component {
  constructor() {
    super();
    this.state = {
      id: '',
      name: '',
      quote: '',
      superlative: '',
      photo: '',
    }
  }

  handleSubmit(event) {
    event.preventDefault()
    console.log("done")
  }

  render() {
    return (
      <div className="AddStudent">
        <h2>Add A New Student</h2>
        <form onSubmit={this.handleSubmit}>
          <input placeholder="id"></input>
          <input placeholder="name"></input>
          <input placeholder="quote"></input>
          <input placeholder="superlative"></input>
          <input placeholder="photo"></input>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default AddStudent;
