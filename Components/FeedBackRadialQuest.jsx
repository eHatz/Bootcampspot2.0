import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";





class FeedbackRadialQuest extends Component{
	render(){
		return(

			<div className="row">
				<div className ="col-md-4">
					<h3>Not so Great</h3>
				</div>
				<div className ="col-md-4">
		 			<label className="radio-inline"><input type="radio" name="optradio"/>Option 1</label>
		 			<label className="radio-inline"><input type="radio" name="optradio"/>Option 2</label>
		 			<label className="radio-inline"><input type="radio" name="optradio"/>Option 3</label>
		 			<label className="radio-inline"><input type="radio" name="optradio"/>Option 4</label>
		 			<label className="radio-inline"><input type="radio" name="optradio"/>Option 5/</label>
		 		</div>
	 			<div className = "col-md-4">
					<h3>Excellent!</h3>
				</div>
			</div>



			)

	}

}