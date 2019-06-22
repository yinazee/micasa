import React, { Component } from 'react';
import HomeCard from '../components/HomeCard';
import HomeForm from './HomeForm';
import './Homes.css';

class Homes extends Component {

  render() {
    return (
    <div className="HomesContainer">
      <h1> Mi Casa </h1>
      <h2>A List of Homes</h2>
      {this.props.homes.map(home => <HomeCard key={home.id} home={home}/>)}
    <HomeForm />
    </div>
    )
  }
}


export default Homes;
