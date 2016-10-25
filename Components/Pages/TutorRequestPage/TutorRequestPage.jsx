import React, { Component } from "react";
import MenuButtons from "../../MenuButtons/MenuButtons.jsx";
import "./TutorRequestPage.css";
import TutorCheckboxes from "../../TutorCheckboxes/TutorCheckboxes.jsx";


class TutorRequest extends Component {

	render() {

		return (

			<div className="TutorRequestPage_main">			

				<MenuButtons
					feedback = "inactive"
					tutor = "active"
					absence = "inactive"
				/>
				<div className="TutorRequestPage_p">
					<p>
						Was this week's homework super hard for you? Do you want someone to walk you through the solution and help you understand some of the basics behind the code you're seeing?
					</p>

					<p>
						If so, we have a wonderful group of senior students who'd love to provide some 1:1 tutoring sessions to get you the extra help you need to be successful.  Please complete the form below to tell us more about where you need help so that we can match you with the right tutor.
					</p>
				</div>

				<div className = "row remove-all-margin-padding TutorRequestPage_input">

					<div className ="form-group">
						<label className= "tutTxt" htmlFor="usr">Full Name</label>
						<input type="text" className="form-control tutorInput" />
					</div>
			
					<div className ="form-group">
						<label className= "tutTxt" htmlFor="usr">Email</label>
						<input type="email" className="form-control tutorInput" />
					</div>

				</div>

				<div className="row remove-all-margin-padding TutorRequestPage_dropdownDiv">	

					<div className="form-group">
					  <label htmlFor="sel1" className="TutorRequestPage_dropQues">Which cohort are you in?</label>
					  <select className="form-control TutorRequestPage_dropdownMenu">
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
	
					<div className="form-group">
					  <label  htmlFor="sel1" className="TutorRequestPage_dropQues">Which week of the program are you in?</label>
					  <select className="form-control TutorRequestPage_dropdownMenu">
					    <option>Choose</option>
					    <option>1</option>
					    <option>2</option>
					    <option>3</option>
					    <option>4</option>
					    <option>5</option>
					    <option>6</option>
					    <option>7</option>
					    <option>8</option>
					    <option>9</option>
					    <option>10</option>
					    <option>11</option>
					    <option>12</option>
					    <option>13</option>
					    <option>14</option>
					    <option>15</option>
					    <option>16</option>
					    <option>17</option>
					    <option>18</option>
					    <option>19</option>
					    <option>20</option>
					    <option>21</option>
					    <option>22</option>
					    <option>23</option>
					    <option>24</option>
					    <option>25</option>
					    <option>26</option>
					  </select>
					</div>
				</div>

				<div className="row remove-all-margin-padding">
					<h2 className="quesTut">How comfortable are you with the material covered in class so far?</h2>
					<h3 className="leftSideTut">Very Shaky</h3>
					<div className ="col-md-6 multRads3">
			 			<label className="radio-inline radioButtTut"><input className="bubble" type="radio" name="optradio"/> 1</label>
			 			<label className="radio-inline radioButtTut"><input className="bubble" type="radio" name="optradio"/> 2</label>
			 			<label className="radio-inline radioButtTut"><input className="bubble" type="radio" name="optradio"/> 3</label>
			 			<label className="radio-inline radioButtTut"><input className="bubble" type="radio" name="optradio"/> 4</label>
			 			<label className="radio-inline radioButtTut"><input className="bubble" type="radio" name="optradio"/> 5</label>
			 		</div>
					<h3 className="rightSideTut">Very Confident</h3>
				</div>

				<div className="row remove-all-margin-padding">
					<h2 className="quesTut">Which are the best times for you to meet with a tutor?</h2>
					<div className ="col-md-6 multRads4">
			 			<label className="radio radioButtTut2"><input  className ="bubble2" type="radio" name="selectOpt2"/> Weekday (daytime)</label>
			 			<label className="radio radioButtTut2"><input  className ="bubble2" type="radio" name="selectOpt2"/> Weekday (evening)</label>
			 			<label className="radio radioButtTut2"><input  className ="bubble2" type="radio" name="selectOpt2"/> Weekend (daytime)</label>
			 			<label className="radio radioButtTut2"><input  className ="bubble2" type="radio" name="selectOpt2"/> Weekend (evening)</label>
			 		</div>
				</div>
				<div className="row remove-all-margin-padding">
					<h2 className="quesTut">Which topics are you looking to cover?</h2>
					<div className ="col-md-12 multRads5">

					<TutorCheckboxes/>
			 			
			 		</div>
				</div>

				<div className="form-group TutorRequestPage_comment">

					  <label htmlFor="comment" className="TutorRequestPage_commentLabel">Additional Comments</label>
					  <textarea className="form-control" rows="5" id="commentSpace"></textarea>
				</div>

					<input id="resetButtTut" className="btn btn-default" type="reset" value="Reset"/>						
					<button id="submitTut" type="submit" className="btn btn-default">Submit</button>
			</div>
		);
	}
}

export default TutorRequest;


