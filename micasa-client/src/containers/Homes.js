import React from 'react'
import './Homes.css'


const Homes = (props) =>
  <div className="HomeContainer">
  <h1>Homes Component</h1>
  {props.homes.map(home =>
    <div className="HomeCard">
    <h3>{home.name}</h3>
    <img className="HomeImage" src={home.image} alt={home.name}/>
    <p>Price per Night: {home.price}</p>
    <p>Location: {home.location}</p>
    </div>
  )}
  </div>


export default Homes
