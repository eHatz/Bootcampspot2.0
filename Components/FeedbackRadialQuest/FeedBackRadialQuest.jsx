import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import "./FeedbackRadialQuest.css";

class FeedbackRadialQuest extends Component{
	render(){
		console.log(this.props.question)
		return(
			<div className="row">
				<h1>{ this.props.question }</h1>
				<div className ="col-md-4">
					<h3>{ this.props.leftEnd }</h3>
				</div>
				<div className ="col-md-4">
		 			<label className="radio-inline"><input type="radio" name="optradio"/>Option 1</label>
		 			<label className="radio-inline"><input type="radio" name="optradio"/>Option 2</label>
		 			<label className="radio-inline"><input type="radio" name="optradio"/>Option 3</label>
		 			<label className="radio-inline"><input type="radio" name="optradio"/>Option 4</label>
		 			<label className="radio-inline"><input type="radio" name="optradio"/>Option 5</label>
		 		</div>
	 			<div className = "col-md-4">
					<h3>{ this.props.rightEnd }</h3>
				</div>
			</div>

			)
	}

}

export default FeedbackRadialQuest;