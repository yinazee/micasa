import React, { Component } from 'react';


class ReviewCard extends Component {

handleOnClick = () => {
  this.props.deleteReview(this.props.review.id)
}

render() {
  return (
    <div className="ReviewCard">
      <li>
        {this.props.review.text}
        {this.props.review.author}
      </li>
      <button onClick={this.handleOnClick}> x </button>
    </div>
    )
  }
}


export default ReviewCard;
