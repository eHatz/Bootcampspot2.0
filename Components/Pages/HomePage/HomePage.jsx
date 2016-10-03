import React, { Component } from "react";
import {Grid, Row, Col} from "react-bootstrap";
import Panel from "../../Panel/Panel.jsx";
import styles from "./homePage.css";

class HomePage extends Component {

	render() {

		return (

			<div className="row">
				<Panel name="Attendance" panelId="attendance" img="/assets/images/attendance_icon.png"/>
			</div>
		);
	}
}

export default HomePage;