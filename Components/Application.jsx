import React, { Component, cloneElement } from 'react';
import {Grid, Row, Col} from "react-bootstrap";
import Sidebar from "react-sidebar";
import Navbar from "./Navbar/Navbar.jsx";
import "./Application.css";


class Application extends Component {

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






