import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeCard from '../components/HomeCard';
import HomeForm from './HomeForm';
import './Homes.css';

class Homes extends Component {

  componentDidMount() {
    this.props.dispatch({
      type: 'GET_HOME_SUCCESS',
      homes: [ {name: "test", price: 56, image: "test", location: "test"}]
  })
}

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

const mapStateToProps = state => {
  return {
    homes: state.homes
  }
}

export default connect(mapStateToProps)(Homes);
