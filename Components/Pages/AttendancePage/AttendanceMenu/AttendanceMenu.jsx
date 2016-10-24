import React, { Component } from "react";
import { Form, FormGroup, FormControl, ButtonGroup, Button } from "react-bootstrap";
import "./AttendanceMenu.css";



class AttendanceMenu extends Component {

	componentWillMount() {
		console.log("AttendanceMenu");
		//Request class list from server

	}

	render() {
		const { sections, attendanceMenuSectionHandler, switchDisplay } = this.props;
		return (

			<form>

				<FormGroup className="attendGroupDiv">

					<FormControl className="attendField"
						componentClass="select" 
						placeholder="select"
						onChange={attendanceMenuSectionHandler}
						required
					>

						{sections.map((section, index) => 

							<option key={index} value={index}>{section.Title}</option>
						)}

					</FormControl>

				</FormGroup>

				<ButtonGroup className="attendButtDiv" justified>

					<ButtonGroup>
						<Button className="attendButt" onClick={switchDisplay} value="allSessions">All Class Sessions</Button>
					</ButtonGroup>
					<ButtonGroup>
						<Button className="attendButt" onClick={switchDisplay} value="singleSession">Single Class Session</Button>
					</ButtonGroup>
					<ButtonGroup>
						<Button className="attendButt" onClick={switchDisplay} value="singleStudent">Individual Student</Button>
					</ButtonGroup>

				</ButtonGroup>
				

			</form>

		);
	}
}


export default AttendanceMenu;






/*






onClick={switchView("allSessions")}
onClick={switchView("singleSession")}
onClick={switchView("singleStudent")}




<FormGroup onChange={switchView}>

					<Radio inline value="allSessions" bsClass="radio">
						View by Session
					</Radio>
					<Radio inline value="singleSession" bsClass="radio">
						View by Session
					</Radio>
					<Radio inline value="singleStudent" bsClass="radio">
						View by Student
					</Radio>
			
				</FormGroup>
*/