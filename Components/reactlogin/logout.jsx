import React, { Component } from "react";
import { browserHistory, Router, Route, Link, withRouter } from 'react-router';
import auth from '../../auth';
import HomePage from "../Pages/HomePage/HomePage.jsx";
import "./login.css";
import $ from "jquery";
const Logout = withRouter(

	React.createClass({
		componentDidMount() {
			auth.logout()
			const { location } = this.props

	        if (location.state && location.state.nextPathname) {
	          this.props.router.replace(location.state.nextPathname)
	        } else {
				$.ajax({
					url: '/logout',
					type: "GET"
				}).then((response) => {
					this.props.router.replace('/');
				});
			};
		},

		render() {
			return (
				<div>
				</div>
			)
		}
	})
)
export default Logout;