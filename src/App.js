// create your App component here
import React, { Component } from 'react';

class App extends Component {

  state = {
    peopleInSpace: []
  }

  componentDidMount() {
    fetch("http://api.open-notify.org/astros.json")
      .then(response => response.json())
      .then(data => {
        console.log(data.people)
        this.setState({
          peopleInSpace: data.people
        })
      })
  }

  render() {
    let arr = this.state.peopleInSpace.map((person) => {
      return <h3>{person.name}</h3>
    })
    return(
      <div>{arr}</div>
    )
  }


}

export default App;
