import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import "./FeedbackRadialQuest.css";

class FeedbackRadialQuest extends Component{
	render(){
		console.log(this.props.question)
		return(
			<div className="row">
				<h2 className="questionTextRad">{ this.props.question }</h2>
				<div className ="col-md-3">
					<h3 className="rightSide">{ this.props.leftEnd }</h3>
				</div>
				<div className ="col-md-6">
		 			<label className="radio-inline radioButt"><input type="radio" name="optradio"/> 1</label>
		 			<label className="radio-inline radioButt"><input type="radio" name="optradio"/> 2</label>
		 			<label className="radio-inline radioButt"><input type="radio" name="optradio"/> 3</label>
		 			<label className="radio-inline radioButt"><input type="radio" name="optradio"/> 4</label>
		 			<label className="radio-inline radioButt"><input type="radio" name="optradio"/> 5</label>
		 		</div>
	 			<div className = "col-md-3">
					<h3 className="leftSide">{ this.props.rightEnd }</h3>
				</div>
				
			</div>


			)
	}

}

export default FeedbackRadialQuest;