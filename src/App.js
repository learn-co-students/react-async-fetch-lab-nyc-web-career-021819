// create your App component here
import React, { Component } from 'react'

export default class App extends Component {

    state = {
        apiResponse: []
    }

    componentDidMount() {
        (async () => {
        const resp = await fetch('http://api.open-notify.org/astros.json')
        const jsonResp = await resp.json()
        this.setState({apiResponse: jsonResp})
        })()
    }

    render() {

        return(<div>{JSON.stringify(this.state.apiResponse)}</div>)
    }
}