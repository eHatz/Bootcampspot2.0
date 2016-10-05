import React, { Component } from "react";
import {Grid, Row, Col} from "react-bootstrap";
import Panel from "../../Panel/Panel.jsx";
import "./HomePage.css";

class HomePage extends Component {

	render() {

		return (

			<div>
				<div className="row">
					<div id="HomePage_logoDiv">
						<a href="/#">
							<img id="HomePage_logo" src="/assets/images/logo1.png" alt="logo"/>
						</a>
						<div>
							<a href="/#github">
								<img id="HomePage_login" src="/assets/images/github.png" alt="githubLogo"/>
								{/*<h4 id="login">LOGIN WITH GITHUB</h4>*/}
							</a>
						</div>
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