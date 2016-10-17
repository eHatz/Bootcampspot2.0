import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import "./FeedbackInputQuest.css";


class FeedbackInputQuest extends Component{
	render(){
		return(
			<div className = "row">
				<div className = "container">
					<div className =" form-group">
					  <label id="inputQuesText" htmlFor="usr"> { this.props.inputquestion } </label>
					  <input type="text" className="form-control" id="usr"/>
					</div>
				</div>
			</div>
			)
	}
}


export default FeedbackInputQuest;