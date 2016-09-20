import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
// import {createHistory} from 'history';

/*-------------------------------------
| Import Components
-------------------------------------*/
import App from './components/App';
import Manage from './components/Manage';
/*-------------------------------------
| Router stuff
-------------------------------------*/

var routes = (
	<Router history={browserHistory}>
		<Route path="/" component={App}/>
		<Route path="/Manage" component={Manage}/>
	</Router>
)

ReactDOM.render(
  routes,
  document.getElementById('root')
);
