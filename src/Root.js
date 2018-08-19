import './fonts/fonts.css';

import React, {Component} from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
} from 'react-router-dom';

import history from 'libs/history';

import Auth from 'controllers/Auth/Auth';

import EnsureLoggedInContainer from 'components/EnsureLoggedInComponent/EnsureLoggedInComponent';

export const routes = {
	auth: '/auth',
};

class Root extends Component {
	componentWillMount() {
		history.replace(routes.auth);
	}

  render() {
    return (
    	<Router>
			<Switch>
				<Route path={routes.auth} component={Auth} />
				<Route component={EnsureLoggedInContainer} />
			</Switch>
		</Router>
    );
  }
}

export default Root;
