import React, { Component } from 'react';
import Login from './Login.js';
// import logo from '../logo.svg';

/*-------------------------------------
| Import Components
-------------------------------------*/
import Manage from './Manage';
import 'normalize.css';
import '../css/App.css';

class App extends Component {
  render() {
	return (
		<div className="App">
			<header>
			<h1> Not Quicken </h1>
			<Login/>
			</header>
			<Manage/>
		</div>
    );
  }
}

export default App;