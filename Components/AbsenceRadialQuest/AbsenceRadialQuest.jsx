import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import "./AbsenceRadialQuest.css";


class AbsenceRadialQuest extends Component{
	render(){
	
		return(
			<div>
				<div className="row">
					<h4>{ this.props.question }</h4>
				</div>
				<div className="row">		
					<div className ="col-md-6 multRads">
			 			<label className="radio-inline yesNo"><input type="radio" name="optradio"/> Yes</label>
			 			<label className="radio-inline yesNo"><input type="radio" name="optradio"/> No</label>
			 		</div>
				</div>
			</div>

			)
	}

}

export default AbsenceRadialQuest;