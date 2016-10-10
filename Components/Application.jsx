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
			UserInfo: []
		};
	}

	updateAuth(loggedIn) {
		this.setState({
			loggedIn
		})
	}
	
	componentWillMount() {
		auth.onChange = this.updateAuth.bind(this);
		auth.login();
	}

	render() {

		return (

			<div id="width" className="container">

				<div id="Application" className="Application_main">
					{
						cloneElement(this.props.children,{
							loggedIn: this.state.loggedIn
						})
					}

				</div>
			</div>
		)
	}
}

export default Application;


// const App = React.createClass({
  

//   render() {
//     return (
//       <div>
//         <ul>
//           <li>
//             {this.state.loggedIn ? (
//               <Link to="/logout">Log out</Link>
//             ) : (
//               <Link to="/login">Sign in</Link>
//             )}
//           </li>
//           <li><Link to="/about">About</Link></li>
//           <li><Link to="/dashboard">Dashboard</Link> (authenticated)</li>
//         </ul>
//         {this.props.children || <p>You are {!this.state.loggedIn && 'not'} logged in.</p>}
//       </div>
//     )
//   }
// })

