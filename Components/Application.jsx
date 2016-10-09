import React, { Component, cloneElement } from 'react';
import {Grid, Row, Col} from "react-bootstrap";
import Sidebar from "react-sidebar";
import Navbar from "./Navbar/Navbar.jsx";
import "./Application.css";


class Application extends Component {

	constructor(props, context) {
		// whenever you overwrite React Component's constructor method, you must
	  // call super() so it will instantiate the Component class it inherits
	  // from
		super(props, context);

		// set initial state
		this.state = {
			LoggedIn: false,
			UserInfo: []
		};
	}

	componentWillMount() {
		console.log('RUNNNNNNNNNNIIIIIIIIIIINNNNNNNNNNNNNGGGGGGGGGGG');
		
		fetch('/login').then(function(response) {  
			if (response.status !== 200) {  
				console.log(response.status);  
				return;  
			};
			console.log(response.json);
			response.json().then(function(data) {
				// this.setState({ 
				// 	LoggedIn: true,
				// 	UserInfo: [data]
				//  }); 
				console.log(data);  
			});  
		})  
	}

	render() {

		return (

			<div id="width" className="container">

				<div id="Application" className="Application_main">
					{
						cloneElement(this.props.children,{})
					}
					
				</div>
			</div>
		)
	}
}

export default Application;
