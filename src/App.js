import React, {Component} from "react"

class App extends Component {
  state = {
    spacemen: []
  }


  componentDidMount(){
    const url = 'http://api.open-notify.org/astros.json'
    fetch(url)
    .then(res => res.json())
    .then(({people}) =>
          this.setState({spacemen: people
          }))

    console.log('componentDidMount');
  }

  renderSpacemen=()=>{
    return this.state.spacemen.map((person, id) => <h1 key={id}>{person.name}</h1>)
  console.log(this.state);
  }

  render(){
    return(
      <div>{this.renderSpacemen()}</div>
    )
  }
}

export default App;
