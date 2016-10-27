import React, { Component } from "react";
import MenuButtons from "../../MenuButtons/MenuButtons.jsx";
import "./AbsenceRequestPage.css";
import AbsenceInputQuest from "../../AbsenceInputQuest/AbsenceInputQuest.jsx";
import AbsenceRadialQuest from "../../AbsenceRadialQuest/AbsenceRadialQuest.jsx";

const AbsenceRequestData=[
{
	question:"Full Name"
},
{
	question:"Email address (You will receive and email at this address once your request has been processed)."
},
{
	question:"Reason for the absence."
},
{
	question:"Which day are you requesting to be excused from class?"
}
]

const AbsenceRadialQuestData=[
{
	question:"Will you be able to attend virtually on this day?"
},
{
	question:"Do you agree to watch the class recording for the class that you've missed and complete the HW by the date assigned regardless of the class that you are missing?"
}

]

class AbsenceRequest extends Component {

	render() {

		return (

			<div className="row remove-all-margin-padding">			
			
				<MenuButtons 
					feedback = "inactive"
					tutor = "inactive"
					absence = "active"
				/>
			
				{AbsenceRequestData.map((item, index) =>{
					 			return 	(<AbsenceInputQuest
						 			question= { item.question } 
						 			key = { index }
					 			/>)
					 		})}
				<div className="row remove-all-margin-padding">		
					<div className="form-group">
					  <label className="sel1" htmlFor="sel1">Who is your instructor?</label>
					  <select className="form-control" id="sel1">
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
				{AbsenceRadialQuestData.map((item, index) =>{
					 			console.log(item);
					 			return 	(<AbsenceRadialQuest
						 			question= { item.question } 
						 			key = { index }
					 			/>)
					 		})}


				<input id="resetButtAbs" className="btn btn-default" type="reset" value="Reset"/>
											
				<button id="submitAbs" type="submit" className="btn btn-default">Submit</button>
			</div>
		)
	}
}

export default AbsenceRequest;

