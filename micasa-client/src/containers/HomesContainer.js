import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeCard from '../components/homes/HomeCard';
import HomeInput from '../components/homes/HomeInput.js';
import '../components/homes/Homes.css';

class HomesContainer extends Component {

  render() {
    return (
    <div className="HomesContainer">
      <h1> Mi Casa </h1>
      <h2>A List of Homes</h2>
      <HomeInput addHome={this.props.addHome} />
      <HomeCard
        homes={this.props.homes.map(home => <HomeCard key={home.id} home={home}/>)}
        deleteHome={this.props.deleteHome} />
    </div>
    )
  }
}

const mapStateToProps = state => ({ homes: state.homes })

const mapDispatchToProps = dispatch => ({
  addHOME: text => dispatch({ type: 'ADD_HOME', text }),
  deleteHOME: id => dispatch({ type: 'DELETE_HOME', id })
})


export default connect(mapStateToProps, mapDispatchToProps)(HomesContainer);
