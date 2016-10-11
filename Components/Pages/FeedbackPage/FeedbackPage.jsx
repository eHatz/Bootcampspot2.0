import React, { Component } from "react";
import "./FeedbackPage.css";
import { form, label, select, input } from "react-bootstrap";
import LogoutBar from "../../LogoutBar/LogoutBar.jsx";
import Navbar from "../../Navbar/Navbar.jsx";

class FeedbackPage extends Component {

	render() {

		return (

			<div className="feedbackBackground">
			 		<div className="row">
			 			<h1>Student Feedback</h1>
				 			<div className="col-md-6">
				 				<form>
				 					  <div className="form-group">
									    <label for="exampleSelect1">Class</label>
									    <select className="form-control" id="exampleSelect1">
									      <option>1</option>
									      <option>2</option>
									      <option>3</option>
									      <option>4</option>
									      <option>5</option>
									    </select>
									  </div>
				 				</form>
				 			</div>
			 			<div className="col-md-6">
			 					<form>
			 					  <div className="form-group">
								    <label for="exampleSelect2">Class Week</label>
								    <select className="form-control" id="exampleSelect2">
								      <option>1</option>
								      <option>2</option>
								      <option>3</option>
								      <option>4</option>
								      <option>5</option>
								    </select>
								  </div>
			 				</form>
			 			</div>
			 				<div className= "row">
			 					<h3> How was class this week?</h3>
			 				</div>
			 				<div className="row">
			 					<div className ="col-md-4">
			 						<h3>Not so Great</h3>
			 					</div>
			 					<div className ="col-md-4">
						 			<label className="radio-inline"><input type="radio" name="optradio"/>Option 1</label>
						 			<label className="radio-inline"><input type="radio" name="optradio"/>Option 2</label>
						 			<label className="radio-inline"><input type="radio" name="optradio"/>Option 3</label>
						 			<label className="radio-inline"><input type="radio" name="optradio"/>Option 4</label>
						 			<label className="radio-inline"><input type="radio" name="optradio"/>Option 5</label>
						 		</div>
						 		<div className = "col-md-4">
					 				<h3>Excellent!</h3>
					 			</div>
					 		</div>

			 		</div>				
			</div>
			
		);
	}
}

export default FeedbackPage;

