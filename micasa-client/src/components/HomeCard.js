import React from 'react';

const HomeCard = ({ home }) => (
  <div key={home.id} className="HomeCard">
  <h3>{home.name}</h3>
  <img className="HomeImage" src={home.image} alt={home.name}/>
  <p>Price Per Night: {home.price}</p>
  <p>Location: {home.location}</p>
  </div>
)


export default HomeCard;
