import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer'

class HomeCard extends Component {

  handleOnClick() {
    this.props.deleteHome(this.props.home.id);
  }

  render() {
    let homes = this.props.homes.map(home =>
      <div>
      <li key={home.id}>
      <h3>{home.name}</h3>
      <img className="HomeImage" src={home.image} alt={home.name}/>
      <p>Price Per Night: ${home.price}</p>
      <p>Location: {home.location}</p>
      <button onClick={() => this.handleOnClick()}> X </button>
      </li>

      <ReviewsContainer home={home}/>
      </div>
    )

    return (
      <div></div>
    )
  }
}

export default HomeCard;
