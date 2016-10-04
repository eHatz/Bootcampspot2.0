import React, { Component } from "react";
import {Grid, Row, Col} from "react-bootstrap";
import Panel from "../../Panel/Panel.jsx";
import styles from "./homePage.css";

class HomePage extends Component {

	render() {

		return (

				<div className="row height">
					<Panel name="ATTENDANCE" panelId="attendance" img="/assets/images/attendance_icon.png"/>
					<Panel name="HOMEWORK" panelId="homework" img="/assets/images/homework_icon.png"/>
					<Panel name="SYLLABUS" panelId="syllabus" img="/assets/images/syllabus_icon.png"/>
					<Panel name="PROJECTS" panelId="projects" img="/assets/images/projects1_icon.png"/>
					<Panel name="FEEDBACK" panelId="feedback" img="/assets/images/feedback_icon.png"/>
					<Panel name="CAREER" panelId="career" img="/assets/images/career_icon.png"/>
				</div>	
			
		);
	}
}

export default HomePage;