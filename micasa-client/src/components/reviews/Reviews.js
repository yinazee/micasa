import React, { Component } from 'react';
import Review from './ReviewCard';

class Reviews extends Component {

  render() {
// debugger
    const { reviews, homeId, deleteReview } = this.props;

    const associatedReviews = reviews.filter(review => review.homeId === homeId);

    const reviewList = associatedReviews.map((review, index) => {
      return <Review key={index} review={review} deleteReview={deleteReview} />
    })

    return (
      <div>
        <ul>
          {reviewList}
        </ul>
      </div>
    );
  }

};

export default Reviews;
