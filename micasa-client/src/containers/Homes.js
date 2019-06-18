import React from 'react';
import HomeCard from '../components/HomeCard';
import './Homes.css';

const Homes = (props) => (
  <div className="HomesContainer">
  <h1> Mi Casa </h1>
  <h2>A List of Homes</h2>
    {props.homes.map(home => <HomeCard key={home.id} home={home}/>)}
  </div>
);

export default Homes;
