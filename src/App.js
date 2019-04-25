// create your App component here
import React from 'react'

export default class App extends React.Component {

    state = {
        hi: []
    }

    render() {        
        return null
    }

    componentDidMount() {
        fetch(`http://api.open-notify.org/astros.json`)
        .then(res => res.json())
        .then(data => {
            this.setState({
                hi: data.people
            })
        })
    }
}