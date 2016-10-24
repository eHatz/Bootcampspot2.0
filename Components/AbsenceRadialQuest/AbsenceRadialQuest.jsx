import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import "./AbsenceRadialQuest.css";


class AbsenceRadialQuest extends Component{
	render(){
	
		return(
			<div>
				<div className="row remove-all-margin-padding">
					<h4 className="absRadQ">{ this.props.question }</h4>
				</div>
				<div className="row remove-all-margin-padding">		
					<div className ="col-md-6 multRads2">
			 			<label className="radio-inline yesNo"><input className="absCircle" type="radio" name="optradio"/> Yes</label>
			 			<label className="radio-inline yesNo"><input className="absCircle" type="radio" name="optradio"/> No</label>
			 		</div>
				</div>
			</div>

			)
	}

}

export default AbsenceRadialQuest;