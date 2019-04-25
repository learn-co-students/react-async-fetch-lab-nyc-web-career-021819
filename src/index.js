import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './App.css';


ReactDOM.render(<App />, document.getElementById('root'));


// Deliverables
// This lab is missing the App component that index.js is looking for. To pass the tests in this lab:

// Create an App class component from scratch
// Write a componentDidMount method. Inside the method, send a fetch request to 
// http://api.open-notify.org/astros.json, a free API that returns a list of people currently in space.

// Note: This lab uses some packages that need a relatively new version of node. 
// If you've got [nvm][https://github.com/creationix/nvm], run nvm install node to update.
