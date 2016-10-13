import React, { Component, cloneElement } from 'react';
import { render } from 'react-dom'
import { browserHistory, Router, Route, Link, withRouter } from 'react-router'
import {Grid, Row, Col} from "react-bootstrap";
import Sidebar from "react-sidebar";
import Navbar from "./Navbar/Navbar.jsx";
import "./Application.css";
import auth from '../auth'


class Application extends Component {

	constructor(props, context) {
		// whenever you overwrite React Component's constructor method, you must
		// call super() so it will instantiate the Component class it inherits
		// from
		super(props, context);

		// set initial state
		this.state = {
			loggedIn: auth.loggedIn(),
			UserInfo: {}
		};
	}

	updateAuth(loggedIn) {
		this.setState({
			loggedIn
		})

	}

	logout() {
		auth.logout()

	}

	componentWillMount() {
		auth.onChange = this.updateAuth.bind(this);
		auth.login();
		fetch('/login', {credentials: 'include'})
		.then((response) => response.json())
		.then((json) => {
			this.setState({ UserInfo: json.userData })
			//prevents user from accessing the website if their user info/session has expired
			if (!json.userData) {
				this.logout();
			}
		})
	}

	render() {

		return (

			<div id="width" className="container">

				<div id="Application" className="Application_main">
					{
						cloneElement(this.props.children,{
							loggedIn: this.state.loggedIn,
							UserInfo: this.state.UserInfo
						})
					}

				</div>
			</div>
		)
	}
}

export default Application;


