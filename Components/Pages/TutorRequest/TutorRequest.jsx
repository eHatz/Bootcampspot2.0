import React, { Component } from "react";
import MenuButtons from "../../MenuButtons/MenuButtons.jsx";


class TutorRequest extends Component {

	render() {

		return (

			<div>			
				
				<MenuButtons
					feedback = "inactive"
					tutor = "active"
					absence = "inactive"
				/>
			</div>
		);
	}
}

export default TutorRequest;