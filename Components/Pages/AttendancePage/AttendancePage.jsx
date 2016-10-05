import React, { Component } from "react";
import {Grid, Row, Col} from "react-bootstrap";
import Navbar from "../../Navbar/Navbar.jsx";
import LogoutBar from "../../LogoutBar/LogoutBar.jsx";
import styles from "./AttendancePage.css";

class AttendancePage extends Component {

	render() {

		return (

			<div>

				<Navbar />
				<LogoutBar UserName='Tim' />
				<Row className="show-grid">
				</Row>

			</div>
		);
	}
}

export default AttendancePage;

