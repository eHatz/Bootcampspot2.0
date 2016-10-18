import React, { Component } from "react";
import MenuButtons from "../../MenuButtons/MenuButtons.jsx";
import "./TutorRequestPage.css";


class TutorRequest extends Component {

	render() {

		return (

			<div>			

					<MenuButtons
						feedback = "inactive"
						tutor = "active"
						absence = "inactive"
					/>
					<div className="container">
						<p className="ptag">Was this week's homework super hard for you? Do you want someone to walk you through the solution and help you understand some of the basics behind the code you're seeing? <br/><br/>If so, we have a wonderful group of senior students who'd love to provide some 1:1 tutoring sessions to get you the extra help you need to be successful. 
						Please complete the form below to tell us more about where you need help so that we can match you with the right tutor.</p>
					</div>
				<div className = "row">
					<div className = "container">
						<div className =" form-group">
						  <label className= "tutTxt" htmlFor="usr">Full Name</label>
						  <input type="text" className="form-control tutorInput" />
						</div>
					</div>
				</div>
				<div className = "row">
					<div className = "container">
						<div className =" form-group">
						  <label className= "tutTxt" htmlFor="usr">Email</label>
						  <input type="email" className="form-control tutorInput" />
						</div>
					</div>
				</div>
				<div className="row">		
					<div className="form-group">
					  <label className="cohortSel" for="sel1">Which cohort are you in?</label>
					  <select className="form-control" id="cohDropdown">
					    <option>Choose</option>
					    <option>Peleg Rosenthal</option>
					    <option>Ahmed Haque</option>
					    <option>John Doughtery</option>
					    <option>Michael Stearne</option>
					    <option>Pavan Katepalli</option>
					    <option>Jesse Willard</option>
					    <option>Matt Kim</option>
					    <option>Dan Vassallo</option>
					  </select>
					</div>
				</div>
				<div className="row">		
					<div className="form-group">
					  <label className="weekSel" for="sel1">Which week of the program are you in?</label>
					  <select className="form-control" id="weekDropdown">
					    <option>Choose</option>
					    <option>Peleg Rosenthal</option>
					    <option>Ahmed Haque</option>
					    <option>John Doughtery</option>
					    <option>Michael Stearne</option>
					    <option>Pavan Katepalli</option>
					    <option>Jesse Willard</option>
					    <option>Matt Kim</option>
					    <option>Dan Vassallo</option>
					  </select>
					</div>
				</div>
				<div className="row">
					<h2 className="quesTut">How comfortable are you with the material covered in class so far?</h2>
					<h3 className="leftSideTut">Very Shaky</h3>
					<div className ="col-md-6 multRads3">
			 			<label className="radio-inline radioButtTut"><input type="radio" name="optradio"/> 1</label>
			 			<label className="radio-inline radioButtTut"><input type="radio" name="optradio"/> 2</label>
			 			<label className="radio-inline radioButtTut"><input type="radio" name="optradio"/> 3</label>
			 			<label className="radio-inline radioButtTut"><input type="radio" name="optradio"/> 4</label>
			 			<label className="radio-inline radioButtTut"><input type="radio" name="optradio"/> 5</label>
			 		</div>
					<h3 className="rightSideTut">Very Confident</h3>
				</div>
				<div className="row">
					<h2 className="quesTut">Which are the best times for you to meet with a tutor?</h2>
					<div className ="col-md-6 multRads4">
			 			<label className="radio radioButtTut2"><input type="radio" name="optradio"/> Weekday (daytime)</label>
			 			<label className="radio radioButtTut2"><input type="radio" name="optradio"/> Weekday (evening)</label>
			 			<label className="radio radioButtTut2"><input type="radio" name="optradio"/> Weekend (daytime)</label>
			 			<label className="radio radioButtTut2"><input type="radio" name="optradio"/> Weekend (evening)</label>
			 		</div>
				</div>
				<div className="row">
					<h2 className="quesTut">Which topics are you looking to cover?</h2>
					<div className ="col-md-6 multRads5">
			 			<label className="radio radioButtTut3"><input type="radio" name="optradio"/> Pep-talk/Advice</label>
			 			<label className="radio radioButtTut3"><input type="radio" name="optradio"/> HTML Layouts (HTML,CSS)</label>
			 			<label className="radio radioButtTut3"><input type="radio" name="optradio"/> Bootstrap Layouts</label>
			 			<label className="radio radioButtTut3"><input type="radio" name="optradio"/> Javascript Fundamentals</label>
			 			<label className="radio radioButtTut3"><input type="radio" name="optradio"/> HTML Layouts (HTML,CSS)</label>
			 			<label className="radio radioButtTut3"><input type="radio" name="optradio"/> Bootstrap Layouts</label>
			 			<label className="radio radioButtTut3"><input type="radio" name="optradio"/> Javascript Fundamentals</label>
				 		<label className="radio radioButtTut3"><input type="radio" name="optradio"/> jQuery, HTML Manipulation</label>
			 			<label className="radio radioButtTut3"><input type="radio" name="optradio"/> Javascript Activities</label>
			 			<label className="radio radioButtTut3"><input type="radio" name="optradio"/> AJAX</label>
			 			<label className="radio radioButtTut3"><input type="radio" name="optradio"/> Firebase</label>
			 			<label className="radio radioButtTut3"><input type="radio" name="optradio"/> MySQL</label>
			 			<label className="radio radioButtTut3"><input type="radio" name="optradio"/> Node</label>
			 			<label className="radio radioButtTut3"><input type="radio" name="optradio"/> All of the Above</label>
			 		</div>
				</div>

					<h4 className="lastQ">Anything else you'd like to mention in your help request?</h4>
					<input type="text" className="form-control lastQInput" />

					<input id="resetButtTut" className="btn btn-default" type="reset" value="Reset"/>						
					<button id="submitTut" type="submit" className="btn btn-default">Submit</button>
			</div>
		);
	}
}

export default TutorRequest;