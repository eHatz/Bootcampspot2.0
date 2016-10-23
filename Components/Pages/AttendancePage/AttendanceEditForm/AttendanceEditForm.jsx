import React, { Component } from "react";
import { Form, FormGroup, ControlLabel, Button } from 'react-router';

class AttendanceEditForm extends Component {


	render(){

		const panelHeader = ( <h1>CHANGE ATTENDANCE:</h1> )

		return (
			<Panel header={panelHeader}>
				<Form inline>

					<FormControl 
						componentClass="select" 
						placeholder="select"
						onChange={}
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
		);
	}

}