import React, { Component } from "react";
import {Grid, Row, Col} from "react-bootstrap";
import Navbar from "../../Navbar/Navbar.jsx";
import styles from "./Attendance.css";

class Attendance extends Component {

	render() {

		return (


			<div className="row">
				<div className="col-sm-4 linkDiv">
					<Navbar />
				</div>
			</div>
	
		);
	}
}

export default Attendance;

