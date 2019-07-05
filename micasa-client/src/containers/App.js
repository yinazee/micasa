import React, { Component } from 'react'
import Homes from './Homes'
import './App.css'


// const homes = [
//   {
//     name: "Lightning",
//     image: "https://data.whicdn.com/images/99519718/original.jpg",
//     price: 90,
//     city: "New York",
//     state: "New York"
//
//   },
//   {
//     name: "Buttercup Bliss",
//     image: "https://www.parisperfect.com/g/apartment-hero-images/hi_1-languedoc-apartment.jpg",
//     price: 180,
//     city: "Springfield",
//     state: "Ohio"
//
//   }
// ]


class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      homes: []
    }
  }


  componentDidMount() {
    fetch('http://localhost:3001/api/homes')
    .then(response => {
      return response.json()
    }).then(homes => this.setState({ homes }))
  }


  render() {
    console.log(this.state)
    return (
      <div className="App">
        App Container
        <Homes homes={this.state.homes}/>
      </div>
    )
  }

}

export default App
