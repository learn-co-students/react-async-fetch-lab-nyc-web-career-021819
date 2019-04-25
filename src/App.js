// create your App component here\

import React from 'react'


class App extends React.Component {

  render(){
    return "hi"
  }


  componentDidMount(){
    fetch('http://api.open-notify.org/astros.json')
    .then(res => res.json())
    .then(console.log)
  }


}
export default App;
