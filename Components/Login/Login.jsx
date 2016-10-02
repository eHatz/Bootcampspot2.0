import React, { Component } from "react";
import {Grid, Row, Col} from "react-bootstrap";
import Titlebar from "../Titlebar/Titlebar.jsx";
import styles from "./Login.css";

class Login extends Component {

	render() {

		return (

			<div>

				<Titlebar title="Login page" />

				<Row className="show-grid">

					<p>Epic login paragraph</p>
					<a href="#/Attendance">Go to Attendance page</a>

				</Row>

			</div>
		);
	}
}

export default Login;

