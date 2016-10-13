import React, { Component } from "react";
import "./FeedbackPage.css";
import { form, label, select, input } from "react-bootstrap";
import LogoutBar from "../../LogoutBar/LogoutBar.jsx";
import Navbar from "../../Navbar/Navbar.jsx";
import FeedbackRadialQuest from "../../FeedbackRadialQuest/FeedbackRadialQuest.jsx";

const formData=[
	{
		question: "How was class this week?",
		leftEnd: "Not so great",
		rightEnd: "Excellent!"

	},
	{
		question: "How would you rate the pace of the class this week?",
		leftEnd: "Too Slow",
		rightEnd: "Too Fast"
	}
];




class FeedbackPage extends Component {

	render() {

		return (

			<div className="feedbackBackground">
			 		<div className="row">
			 			<h1>Student Feedback</h1>
				 			<div className="col-md-6">
				 				<form>
				 					  <div className="form-group">
									    <label htmlFor="exampleSelect1">Class</label>
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
								    <label htmlFor="exampleSelect2">Class Week</label>
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
			 			{formData.map((item, index) =>{
				 			console.log(item);
				 			return 	(<FeedbackRadialQuest 
					 			question= { item.question } 
					 			leftEnd = { item.leftEnd }
					 			rightEnd = { item.rightEnd }
					 			key = { index }
				 			/>)
				 		})}
			 		</div>				
			</div>
			
		);
	}
}

export default FeedbackPage;

