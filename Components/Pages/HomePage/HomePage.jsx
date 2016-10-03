import React, { Component } from "react";
import {Grid, Row, Col} from "react-bootstrap";
import Panel from "../../Panel/Panel.jsx";
import styles from "./homePage.css";

class HomePage extends Component {

	render() {

		return (

				<div className="row height">
					<Panel name="Attendance" panelId="attendance" img="/assets/images/attendance_icon.png"/>
					<Panel name="Homework" panelId="homework" img="/assets/images/homework_icon.png"/>
					<Panel name="Syllabus" panelId="syllabus" img="/assets/images/syllabus_icon.png"/>
					<Panel name="Projects" panelId="projects" img="/assets/images/projects_icon.png"/>
				</div>	
			
		);
	}
}

export default HomePage;