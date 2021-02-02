import React, { Component } from 'react';
// import people from '../../data/yearbook-data.js';
import './AddStudent.css';

class AddStudent extends Component {
  constructor(props) {
    super()

    this.state = {
      id: '',
      name: '',
      quote: '',
      superlative: '',
      photo: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.id]: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.appendStudents({
      id: this.state.id,
      name: this.state.name,
      quote: this.state.quote,
      superlative: this.state.superlative,
      photo: this.state.photo
    })
  }

  render() {
    return (
      <div className="AddStudent">
        <h2>Add A New Student</h2>
        <form onSubmit={this.handleSubmit}>
          <input id="id" type="text" value={this.state.id} onChange={this.handleChange} placeholder="id"></input>
          <input id="name" type="text" value={this.state.name} onChange={this.handleChange} placeholder="name"></input>
          <input id="quote" type="text" value={this.state.quote} onChange={this.handleChange} placeholder="quote"></input>
          <input id="superlative" type="text" value={this.state.superlative} onChange={this.handleChange} placeholder="superlative"></input>
          <input id="photo" type="text" value={this.state.photo} onChange={this.handleChange} placeholder="photo"></input>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default AddStudent;
