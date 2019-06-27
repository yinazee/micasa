import React, { Component } from 'react';
import { addHome } from '../actions';
import uuid from 'uuid';
import { connect } from 'react-redux';

export class HomeInput extends Component {

  state = {
    name: '',
    price: '',
    image: '',
    location: ''
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }


  handleOnSubmit = event => {
    event.preventDefault();
    const home = {...this.state, id: uuid() };
    this.props.addHome(home);
    this.setState({
      name: '',
      price: '',
      image: '',
      location: ''
    });
  }

  render() {
    return(
      <h2>Add a New Home</h2>
      <form onSubmit={(event) => this.handleOnSubmit(event)}>
        <p>
          <input
            type="text"
            onChange={(event) => this.handleOnChange(event)}
            name="name"
            value={this.state.name}
            placeholder="home name" />
        </p>
        <p>
          <input
            type="text"
            onChange={(event) => this.handleOnChange(event)}
            name="price"
            value={this.state.price}
            placeholder="home price" />
        </p>
        <p>
          <input
            type="text"
            onChange={(event) => this.handleOnChange(event)}
            name="image"
            value={this.state.image}
            placeholder="home image" />
        </p>
        <p>
          <input
            type="text"
            onChange={(event) => this.handleOnChange(event)}
            name="location"
            value={this.state.location}
            placeholder="home Location" />
        </p>
        <input type="submit" />
      </form>
    );
  }
};

export default connect(null, { addHome })(HomeInput);
