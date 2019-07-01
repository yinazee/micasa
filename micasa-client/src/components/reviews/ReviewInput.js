import React, { Component } from 'react';

class ReviewInput extends Component {

  state = {
    text: '',
    author: ''
  }

  handleOnChange = event => {
    this.setState({
      text: event.target.value,
    });
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.addReview({text: this.state.text, author: this.state.author, homeId: this.props.homeId });
    this.setState({
      text: '',
      author: ''
    });
  }

  render() {
    return (
     <div>
        <form onSubmit={this.handleOnSubmit} >
          <label>Add Review</label>
          <input
            type="text"
            value={this.state.text}
            onChange={this.handleOnChange} />
          <input
            type="author"
            value={this.state.author}
            onChange={this.handleOnChange} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
