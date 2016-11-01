import React, { Component } from "react";
import {Grid, Row, Col} from "react-bootstrap";
import Panel from "../../Panel/Panel.jsx";
import { Modal, Button } from "react-bootstrap"; //Add to new LogoutBar
import "./HomePage.css";
import $ from "jquery";
	
class HomePage extends Component {
	constructor(props, context) {

		super(props, context);
		this.state = {
			showModal: false
		};
		this.open = this.open.bind(this);
		this.close = this.close.bind(this);
	}

	close(){
		this.setState({ showModal: false });
	}

	open(){
		this.setState({ showModal: true });
	}
	componentWillMount() {
		if (!this.props.UserInfo.FirstName) {
			this.setState({ showModal: true });
		};
	}

	render() {
		const { loggedIn, UserInfo, location } = this.props;
		return (

			<div>
				<div className="row">
					<Modal id="homeModal" show={this.state.showModal} onHide={this.close}>
						<Modal.Header className='demoModal-header'>
								
							<button className="modalHeaderWidth" type="button" onClick={this.close} data-dismiss="modal" aria-label="Close">
								<img id="close" src="assets/images/close_button.png"/>
								<a href="/#">
									<img id='demoModal-logo' src='/assets/images/logo2.png'/>
								</a>
							</button>
						</Modal.Header>
						<Modal.Body>
							<p id='demoInstructions'>This is a demo version of the app. Please select 
							the type of user you would like to login as.</p>
							<a  href='/login/admin'>
								<button className="demoButtons btn btn-danger" id="adminLogin" type="button">
									Login As Admin
								</button>
							</a>
							<a  href='/login/student'>
								<button className="demoButtons btn btn-danger" id="studentLogin" type="button">
									Login As Student
								</button>
							</a>
							<a  href='/login/teacher'>
								<button className="demoButtons btn btn-danger" id="teacherLogin" type="button">
									Login As Teacher
								</button>
							</a>
						</Modal.Body>
					</Modal>
					<div id="HomePage_logoDiv">
						<a href="/#">
							<img id="HomePage_logo" src="/assets/images/logo1.png" alt="logo"/>
						</a>
						<div>
							{loggedIn ? (
								<a href="/#/logout">
									<div id='HomePage_login'>
										<h4 id='logoutBar_username'>Hi {UserInfo.FirstName}</h4>
										<h4 id='logoutBar_logout'>Log Out</h4>
									</div>
								</a>
							) : (
								<a onClick={this.open}>
									<img id="HomePage_login" src="/assets/images/githubLogin.png" alt="githubLogo"/>
								</a>
							)}
						</div>
					</div>
				</div>
	
				<div className="row">

					<Panel background="#181818" name="ATTENDANCE" panelId="attendancePanel" pageLink="attendance" img="/assets/images/attendance_icon.png"/>
					<Panel background="#302e2e" name="ASSIGNMENTS" panelId="assignmentsPanel" pageLink="assignments" img="/assets/images/assignments_icon.png"/>
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
