import React, { Component } from "react";
import {Grid, Row, Col} from "react-bootstrap";
import Panel from "../../Panel/Panel.jsx";
import "./HomePage.css";

class HomePage extends Component {

	render() {
		const { loggedIn } = this.props;

		return (

			<div>
				<div className="row">
					<div id="HomePage_logoDiv">
						<a href="/#">
							<img id="HomePage_logo" src="/assets/images/logo1.png" alt="logo"/>
						</a>
						<div>
							{loggedIn ? (
								<a href="/#logout">
									<img id="HomePage_login" src="/assets/images/logos.png" alt="githubLogo"/>
								</a>
							) : (
								<a href="/login/github">
									<img id="HomePage_login" src="/assets/images/github.png" alt="githubLogo"/>
								</a>
							)}
						</div>
					</div>
				</div>
	
				<div className="row">
					<Panel background="#181818" name="ATTENDANCE" panelId="attendance" img="/assets/images/attendance_icon.png"/>
					<Panel background="#302e2e" name="HOMEWORK" panelId="homework" img="/assets/images/homework_icon.png"/>
					<Panel background="#8a8a8a" name="SYLLABUS" panelId="syllabus" img="/assets/images/syllabus_icon.png"/>
					<Panel background="#cdcbcb" name="PROJECTS" panelId="projects" img="/assets/images/projects_icon.png"/>
					<Panel background="#cc0000" name="FEEDBACK" panelId="feedback" img="/assets/images/feedback_icon.png"/>
					<Panel background="#990000" name="CAREER" panelId="career" img="/assets/images/career_icon.png"/>
				</div>	
			</div>
			
		);
	}
}

export default HomePage;

/*
#attendance {
	background-color: #181818;
}
#homework {
	background-color: #302e2e;
}
#syllabus{
	background-color: #8a8a8a;	
}
#projects{
	background-color: #cdcbcb;	
}
#feedback{
	background-color: #cc0000;	
}
#career{
	background-color: #990000;	
}
*/