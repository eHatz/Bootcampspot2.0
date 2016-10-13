import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import "./FeedbackInputQuest.css";


class FeedbackInputQuest extends Component{
	render(){
		return(
			<div className = "row">

				<div className =" form-group">
				  <label id = "feedbackInputQuestion" for="usr"> { this.props.inputquestion } </label>
				  <input type="text" className="form-control" id="usr"/>
				</div>
			</div>
			)
	}
}




export default FeedbackInputQuest;