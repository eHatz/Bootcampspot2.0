import React, { Component } from "react";
import "./FeedbackPage.css";
import { form, label, select, input } from "react-bootstrap";
import LogoutBar from "../../LogoutBar/LogoutBar.jsx";
import Navbar from "../../Navbar/Navbar.jsx";
// import FeedbackRadialQuest from "../../FeedbackRadialQuest/FeedbackRadialQuest.jsx";
// import FeedbackInputQuest from "../../FeedbackInputQuest/FeedbackInputQuest.jsx";

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
		question:"How much new learning did you acheive this week?",
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

const formInputData = [
	{
		inputquestion: "How many hours did you spend outside of class last week on homework, code review, etc?"
	},
	{
		inputquestion: "What did you spend most of that time on?"
	},
	{
		inputquestion: "Any additional comments about the pace of the class?"
	},
	{
		inputquestion: "Any additional comments about the Academic support?"
	},
	{
		inputquestion: "Any additional comments about your instructor?"
	},

]


class FeedbackPage extends Component {

	render() {

		return (

			<div className="feedbackBackground">
			 		<div id= "bigFeedbackDiv"className="row">
			 			<h1 className= "studentFeedback">Student Feedback</h1>
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

				 		{formInputData.map((item, index) =>{
				 			return (<FeedbackInputQuest
				 				inputquestion= { item.inputquestion }
				 				key = { index }
				 				/>)
				 		})}
			 		</div>				
			</div>
			
		);
	}
}

export default FeedbackPage;

