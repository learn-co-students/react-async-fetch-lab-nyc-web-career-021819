// create your App component here
import React, { Component } from 'react';

class App extends Component {
	componentDidMount() {
		fetch('http://api.open-notify.org/astros.json').then((res) => res.json()).then(function(json) {
			console.log(json);
		});
	}
	render() {
		return <div>hi?</div>;
	}
}

export default App;
