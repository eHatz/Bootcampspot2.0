import React, { Component } from "react";
import { Form, Button, Panel, FormControl } from 'react-bootstrap';

class AttendanceEditForm extends Component {

	render(){

		const panelHeader = ( <h1>CHANGE ATTENDANCE:</h1> );
		const { isDisplayed } = this.props
		const display = isDisplayed ? {display: "inline-block"} : {display: "none"};

		return (
			<div style={display}>
				<Panel header={panelHeader} >
					<Form inline>

						<FormControl 
							componentClass="select" 
							placeholder="select"
						>
								<option value="Early">"Early"</option>
								<option value="Late">"Late"</option>
								<option value="Absent">"Absent"</option>

						</FormControl>

						{' '}
						<Button type="submit">
						Submit Attendance Change
						</Button>

					</Form>
				</Panel>
			</div>
		);
	}

}

export default AttendanceEditForm;