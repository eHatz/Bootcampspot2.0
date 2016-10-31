import React, { Component, cloneElement } from 'react';
import { render } from 'react-dom'
import { browserHistory, Router, Route, Link, withRouter } from 'react-router'
import {Grid, Row, Col} from "react-bootstrap";
import Sidebar from "react-sidebar";
import Navbar from "./Navbar/Navbar.jsx";
import "./Application.css";
import auth from '../auth';
import $ from "jquery";




class Application extends Component {

	constructor(props, context) {
		// whenever you overwrite React Component's constructor method, you must
		// call super() so it will instantiate the Component class it inherits
		// from
		super(props, context);

		// set initial state
		this.state = {
			loggedIn: auth.loggedIn(),
			UserInfo: {},
			UserSection: null
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
		$.ajax({
			url: '/login',
			type: "GET"
		})
		.then((response) => {
			this.setState({ UserInfo: response.userData, UserSection: response.userSection })
			//prevents user from accessing the website if their user info/session has expired
			if (!response.userData) {
				this.logout();
			};
		});
	};

	render() {
		return (

			<div id="width" className="container">

				<div id="Application" className="Application_main">
					{
						cloneElement(this.props.children,{
							loggedIn: this.state.loggedIn,
							UserInfo: this.state.UserInfo,
							UserSection: this.state.UserSection
						})
					}

				</div>
			</div>
		)
	}
}

export default Application;


