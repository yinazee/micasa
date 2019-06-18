import React from 'react';
// import './Homes.css';

const Homes = (props) => (
  <div>
  <h1> Mi Casa </h1>
  <h2>A List of Homes</h2>
    {props.homes.map(home =>
      <div key={home.id} className="HomeCard">
      <h3>{home.name}</h3>
      <img className="HomeImage" src={home.image} alt={home.name}/>
      <p>Price Per Night: {home.price}</p>
      <p>Location: {home.location}</p>
      </div>
    )}
  </div>
);

export default Homes;
