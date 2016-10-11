import React, { Component, cloneElement } from 'react';
import {Grid, Row, Col} from "react-bootstrap";
import Navbar from "./Navbar/Navbar.jsx";
import LogoutBar from "./LogoutBar/LogoutBar.jsx";
import { Modal } from "react-bootstrap";

import "./LoggedIn.css";


class LoggedIn extends Component {
	constructor(props, context) {

		super(props, context);
		this.state = {

			showModal: false,
		};
	}

	close(){
		this.setState({ showModal: false });
	}

	open(){
		this.setState({ showModal: true });
	}
	render() {

		return (

			<div id="width" className="container remove-all-margin-padding">
				<LogoutBar 
					showModal= {this.state.showModal}
					openModal= {this.open.bind(this)} 
					closeModal= {this.close.bind(this)}
				/>
				<div className='row'>
					<div className= "col-sm-3 remove-all-margin-padding hideBar">
						<Navbar/>
					</div>
					<div id="pageContent" className= "col-sm-9 remove-all-margin-padding">
						{
							cloneElement(this.props.children, {
								showModal: this.state.showModal,
								openModal: this.open.bind(this),
								closeModal: this.close.bind(this)
							})
						}

					</div>
				</div>
			</div>
		)
	}
}

export default LoggedIn;






