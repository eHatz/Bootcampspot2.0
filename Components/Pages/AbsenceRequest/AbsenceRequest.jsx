import React, { Component } from "react";
import MenuButtons from "../../MenuButtons/MenuButtons.jsx";
import "./AbsenceRequest.css";


class AbsenceRequest extends Component {

	render() {

		return (

			<div>			
				
				<MenuButtons 
					feedback = "inactive"
					tutor = "inactive"
					absence = "active"
				/>
			</div>
		);
	}
}

export default AbsenceRequest;

