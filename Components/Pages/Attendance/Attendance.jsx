import React, { Component } from "react";
import {Grid, Row, Col} from "react-bootstrap";
import Titlebar from "../../Titlebar/Titlebar.jsx";
import styles from "./Attendance.css";

class Attendance extends Component {

	render() {

		return (

			<div>

				<Titlebar />

				<Row className="show-grid">

					<p className={styles.Attendance_paragraph}>Even more epic Attendance paragraph</p>
					<a href="#/">Go to Login page</a>

				</Row>

			</div>
		);
	}
}

export default Attendance;

