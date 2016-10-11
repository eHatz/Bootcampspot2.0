import React, { Component } from "react";
import "./FeedbackPage.css";
import LogoutBar from "../../LogoutBar/LogoutBar.jsx";
import Navbar from "../../Navbar/Navbar.jsx";

class FeedbackPage extends Component {

	render() {

		return (

			<div className="feedbackBackground">
				<div className="btn-group" role="group" aria-label="...">
			 		<div className="row">
			 			<div>
						   <button type="button" className="btn btn-default" id="studentFeedback">Student Feedback</button>	
						</div>
					</div>
					<div className="row"> 
					  <button type="button" className="btn btn-default" id="absenceForm">Absence Form</button>
					  <button type="button" className="btn btn-default" id="tutorSession">Tutor Session</button>
					</div>
				</div>
			</div>
			
		);
	}
}

export default FeedbackPage;

