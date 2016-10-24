import React, { Component } from "react";
import "./AbsenceInputQuest.css";



class AbsenceInputQuest extends Component{
	render(){
		return(
			<div className = "row remove-all-margin-padding">
				<div className ="form-group">
					<label id="AbsQuest" htmlFor="usr"> { this.props.question } </label>
					<input type="text" className="form-control absenceInput" id=""/>
				</div>
			</div>
			)
	}
}


export default AbsenceInputQuest;