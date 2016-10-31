import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import "./FeedbackRadialQuest.css";

class FeedbackRadialQuest extends Component{

	render(){
		return(
			<div>
				<div className="row remove-all-margin-padding">
					<h2 className="questionTextRad">{ this.props.question }</h2>
				</div>

				<div className="row remove-all-margin-padding">
					<div className="col-md-3 remove-all-margin-padding">
						<h3 className="leftSide">{ this.props.leftEnd }</h3>
					</div>
					<div className ="col-md-6 romove-all-margin-padding">
						<div className='multRads'>
				 			<label className="radio-inline radioButt"><input className= "theCircle" type="radio" name="optradio"/> 1</label>
				 			<label className="radio-inline radioButt"><input className= "theCircle" type="radio" name="optradio"/> 2</label>
				 			<label className="radio-inline radioButt"><input className= "theCircle" type="radio" name="optradio"/> 3</label>
				 			<label className="radio-inline radioButt"><input className= "theCircle" type="radio" name="optradio"/> 4</label>
				 			<label className="radio-inline radioButt"><input className= "theCircle" type="radio" name="optradio"/> 5</label>
				 		</div>
				 	</div>
		 			<div className="col-md-3 remove-all-margin-padding">
						<h3 className="rightSide">{ this.props.rightEnd }</h3>
					</div>
				</div>
			</div>
		)
	}

}

export default FeedbackRadialQuest;