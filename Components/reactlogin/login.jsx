import React, { Component } from "react";
import { browserHistory, Router, Route, Link, withRouter } from 'react-router';
import auth from '../../auth';
import HomePage from "../Pages/HomePage/HomePage.jsx";
import "./login.css";
import $ from "jquery";
		
const Login = withRouter(
	React.createClass({

		getInitialState() {
			return {
				error: false
			}
		},

		componentWillMount() {
			$.ajax({
				url: '/login',
				type: "GET"
			}).then((response) => {
				const access = response.access;
				auth.login(access, (loggedIn) => {
					if (!loggedIn)
					return this.setState({ error: true })

					const { location } = this.props

					if (location.state && location.state.nextPathname) {
						this.props.router.replace(location.state.nextPathname)
					} else {
						this.props.router.replace('/#')
					}
				})
			})
		},

		render() {
			return (
				<div>
				</div>

			)
		}
	})
)
export default Login;