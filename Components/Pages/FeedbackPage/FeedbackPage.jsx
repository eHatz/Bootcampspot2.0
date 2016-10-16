import React, { Component } from "react";
import "./FeedbackPage.css";
import { form, label, select, input } from "react-bootstrap";
import LogoutBar from "../../LogoutBar/LogoutBar.jsx";
import Navbar from "../../Navbar/Navbar.jsx";
import FeedbackRadialQuest from "../../FeedbackRadialQuest/FeedbackRadialQuest.jsx";
import FeedbackInputQuest from "../../FeedbackInputQuest/FeedbackInputQuest.jsx";
import MenuButtons from "../../MenuButtons/MenuButtons.jsx";




const formData=[
	{
		question: "1. How was class this week?",
		leftEnd: "Not so great",
		rightEnd: "Excellent!"

	},
	{
		question: "2. How would you rate the pace of the class this week?",
		leftEnd: "Too Slow",
		rightEnd: "Too Fast"
	},
	{
		question:"3. Do you feel that you have enough academic support?",
		leftEnd: "Not Enough",
		rightEnd: "Definitely Enough"
	},
	{
		question: "4. How would you rate the pace of class this week?",
		leftEnd:"Too fast",
		rightEnd:"Too slow"
	},
	{
		question:"5. How much new learning did you acheive this week?",
		leftEnd:"Not much",
		rightEnd: "A lot"
	},
	{
		question: "6. How well do you feel you have mastered the concepts covered in class this week?",
		leftEnd: "Not Well",
		rightEnd: "Great"
	},
	{
		question: "7. How engaging was the teacher in his/her instruction?",
		leftEnd: "Not engaged",
		rightEnd: "Very Connected"
	},
	{
		question: "8. How knowledgable did your instructor seem in the subject area?",
		leftEnd: "Not knowledgable",
		rightEnd: "Very knowledgable"
	}

];

const formInputData = [
	{
		inputquestion: "9. How many hours did you spend outside of class last week on homework, code review, etc?"
	},
	{
		inputquestion: "10. What did you spend most of that time on?"
	},
	{
		inputquestion: "11. Any additional comments about the pace of the class?"
	},
	{
		inputquestion: "12. Any additional comments about the Academic support?"
	},
	{
		inputquestion: "13. Any additional comments about your instructor?"
	},

]


class FeedbackPage extends Component {

	render() {

		return (

			<div className="feedbackBackground">
			 		<div className="row">
			 		<MenuButtons 
					feedback = "active"
					tutor = "inactive"
					absence = "inactive"
					/>
			 			
			 		</div>
			 		<div className="row">
				 			<div className="col-md-6">
				 				<form>
				 					  <div className="form-group">
									    <label id = "exampleSelectText1" htmlFor="exampleSelect1">Class</label>
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
								    <label id= "exampleSelectText2" htmlFor="exampleSelect2">Class Week</label>
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
			 		</div>
			 		<div className ="row">
			 			
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
				 
				 		<div className="form-group">
						  <label className="commentText" for="comment">Additional Comments:</label>
						  <textarea className="form-control" rows="5" id="comment"></textarea>
						</div>
							<input id="resetButt" className="btn btn-default" type="reset" value="Reset"/>
											
				 			<button type="submit" className="btn btn-default">Submit</button>			 			 		
			</div>
			
		);
	}
}

export default FeedbackPage;

