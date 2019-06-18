import React, { Component } from 'react';
import Homes from './Homes';
import './App.css';

// const API_URL = process.env.REACT_APP_API_URL;

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      homes: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/homes')
    .then(response => response.json())
    .then(homes => this.setState({ homes }))
  }

  render() {
    return(
      <div className="App">
      <Homes homes={this.state.homes}/>
      </div>
    )
  }
}

export default App;
