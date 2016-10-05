import React, { Component } from "react";
import {Grid, Row, Col} from "react-bootstrap";
import Panel from "../../Panel/Panel.jsx";
import styles from "./HomePage.css";

class HomePage extends Component {

	render() {

		return (

			<div>
				<div className="row">
					<div id={styles.logoDiv}>
						<a href="/#">
							<img id={styles.logo} src="/assets/images/logo1.png" alt="logo"/>
						</a>
					</div>
				</div>
	
				<div className="row height">
					<Panel name="ATTENDANCE" panelId="attendance" img="/assets/images/attendance_icon.png"/>
					<Panel name="HOMEWORK" panelId="homework" img="/assets/images/homework_icon.png"/>
					<Panel name="SYLLABUS" panelId="syllabus" img="/assets/images/syllabus_icon.png"/>
					<Panel name="PROJECTS" panelId="projects" img="/assets/images/projects_icon.png"/>
					<Panel name="FEEDBACK" panelId="feedback" img="/assets/images/feedback_icon.png"/>
					<Panel name="CAREER" panelId="career" img="/assets/images/career_icon.png"/>
				</div>	
			</div>
			
		);
	}
}

export default HomePage;