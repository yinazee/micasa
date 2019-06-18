import React, { Component } from 'react';
import Homes from './Homes';
import './App.css';

const homes = [
  {
    name: "Lilac Cottage",
    price: 90,
    location: "Montauk, NY",
    image: "https://data.whicdn.com/images/99519718/original.jpg",
  },
  {
    name: "Drexley Highrise",
    price: 150,
    location: "Portland, OR",
    image: "https://i.pinimg.com/originals/e8/16/ca/e816ca9c389643b2f5b9d888fdd13dce.jpg",
  },
  {
    name: "Greenwich Villa",
    type: "Villa",
    price: 90,
    location: "New York, NY",
    image: "https://www.parisperfect.com/g/apartment-hero-images/hi_1-languedoc-apartment.jpg",
  }
]


class App extends Component {
  //
  // constructor(props) {
  //   super(props)
  //
  //   this.state = {
  //     properties: [],
  //     loading: true
  //   }
  // }

  // componentDidMount() {
  //   fetch('http://localhost:3001/api/surfboards')
  //   .then(response => response.json())
  //   .then(properties => this.setState({ properties, loading: false }))
  // }

  render() {
    return(
      <div className="App">
      <Homes homes={homes}/>
      </div>
    )
  }
}

export default App;
