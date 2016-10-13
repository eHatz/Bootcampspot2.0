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
	},
	{
		question:"Do you feel that you have enough academic support?",
		leftEnd: "Not Enough",
		rightEnd: "Definitely Enough"
	},
	{
		question: "How would you rate the pace of class this week?",
		leftEnd:"Too fast",
		rightEnd:"Too slow"
	},
	{
		question:"How much new learning did you acheive this weel?",
		leftEnd:"Not much",
		rightEnd: "A lot"
	},
	{
		question: "How well do you feel you have mastered the concepts covered in class this week?",
		leftEnd: "Not Well",
		rightEnd: "Great"
	},
	{
		question: "How engaging was the teacher in his/her instruction?",
		leftEnd: "I had a tough time paying attention",
		rightEnd: "I felt thoroughly connected to my instructor"
	},
	{
		question: "How knowledgable did your instructor seem in the subject area?",
		leftEnd: "Not knowledgable",
		rightEnd: "Very knowledgable"
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

