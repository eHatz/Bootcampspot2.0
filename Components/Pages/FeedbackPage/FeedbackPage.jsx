import React, { Component } from "react";
import "./FeedbackPage.css";
import LogoutBar from "../../LogoutBar/LogoutBar.jsx";
import Navbar from "../../Navbar/Navbar.jsx";

class FeedbackPage extends Component {

	render() {

		return (

			<div className="feedbackBackground">
				<div class="btn-group" role="group" aria-label="...">
				  <button type="button" className="btn btn-default">Student Feedback</button>
				  <button type="button" className="btn btn-default">Absence Form</button>
				  <button type="button" className="btn btn-default">Tutor Session</button>
				</div>
			</div>
			
		);
	}
}

export default FeedbackPage;

