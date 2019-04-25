import React, { Component } from 'react'

class App extends Component {

  state = {
    peopleInSpace: []
  }

  render() {
    return (
      <div>
        {this.state.peopleInSpace.map(person => <p key={Math.random()}>{person.name}</p>)}
      </div>
    )
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
      .then(response => response.json())
      .then(data => {
        this.setState({
          peopleInSpace: data.people
        })
      })
  }
}

export default App
