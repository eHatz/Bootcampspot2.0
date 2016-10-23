import React, { Component } from "react";
import {Grid, Row, Col} from "react-bootstrap";
import Panel from "../../Panel/Panel.jsx";
import "./HomePage.css";

class HomePage extends Component {

	render() {
		const { loggedIn, UserInfo, location } = this.props;
		console.log('home page', loggedIn, UserInfo)
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
									<div id='HomePage_login'>
										<h4 id='logoutBar_username'>Hi {UserInfo.FirstName}</h4>
										<h4 id='logoutBar_logout'>Log Out</h4>
									</div>
								</a>
							) : (
								<a href="/login/github">
									<img id="HomePage_login" src="/assets/images/githubLogin.png" alt="githubLogo"/>
								</a>
							)}
						</div>
					</div>
				</div>
	
				<div className="row">

					<Panel background="#181818" name="ATTENDANCE" panelId="attendancePanel" pageLink="attendance" img="/assets/images/attendance_icon.png"/>
					<Panel background="#302e2e" name="ASSIGNMENTS" panelId="assignmentsPanel" pageLink="assignments" img="/assets/images/assigments_icon.png"/>
					<Panel background="#8a8a8a" name="SYLLABUS" panelId="syllabusPanel" pageLink="syllabus" img="/assets/images/syllabus_icon.png"/>
					<Panel background="#cdcbcb" name="ANNOUNCEMENTS" panelId="announcementsPanel" pageLink="announcements" img="/assets/images/announcements_icon.png"/>
					<Panel background="#cc0000" name="FEEDBACK" panelId="feedbackPanel" pageLink="feedback" img="/assets/images/feedback_icon.png"/>

					{UserInfo.Role === 'Admin'  ? (
						 <Panel background="#990000" name="ADMIN" panelId="adminPanel" pageLink="admin" img="/assets/images/admin_icon.png"/>
					) : (
						 <Panel background="#990000" name="CAREER" panelId="careerPanel" pageLink="career" img="/assets/images/career_icon.png"/>
					)}


				</div>	
			</div>
			
		);
	}
}

export default HomePage;
