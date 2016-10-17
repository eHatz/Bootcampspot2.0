import React, { Component } from "react";
import { FormGroup, FormControl, ControlLabel, Checkbox, Button } from "react-bootstrap";
import "./CreateSectionForm.css";

class CreateSectionForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			Title: "",
			Location: "",
			Slack: "",
			StartDate: "",
			EndDate: ""
		};

		this.handleTitleChange = this.handleTitleChange.bind(this);
		this.LocationChange = this.LocationChange.bind(this);
		this.SlackChange = this.SlackChange.bind(this);
		this.StartDateChange = this.StartDateChange.bind(this);
		this.EndDateChange = this.EndDateChange.bind(this);
		this.clearInput = this.clearInput.bind(this);
		this.sectionCreate = this.sectionCreate.bind(this);
	}

	handleTitleChange(event) {
		this.setState({ Title: event.target.value });
	}

	LocationChange(event) {
		this.setState({ Location: event.target.value });
	}

	SlackChange(event) {
		this.setState({ Slack: event.target.value });
	}

	StartDateChange(event) {
		this.setState({ StartDate: event.target.value });
	}
	EndDateChange(event) {
		this.setState({ EndDate: event.target.value });
	}

	DaysChange(event) {
		// this.setState({ EndDate: event.target.value });
	}


	clearInput(){
		this.setState({
			Title: "",
			Location: "",
			Slack: "",
			StartDate: "",
			EndDate: ""
		});
	}

	sectionCreate(event){
		fetch('/admin/createSection', {
			credentials: 'include',
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				Title: this.state.Title,
				Location: this.state.Location,
				Slack: this.state.Slack,
				StartDate: this.state.StartDate,
				EndDate: this.state.EndDate
	        })
		})
		this.props.getSections();
	    this.clearInput();
	    event.preventDefault();
	}
	
	render() {

		return (
			<div id='userFormDiv'>
				<form onSubmit={this.sectionCreate}>
					<FormGroup controlId="formBasicText">
						<ControlLabel>Title</ControlLabel>
						<FormControl
	      					type="text" 
	      					value={this.state.Title}
	      					placeholder="Section Title" 
	      					onChange={this.handleTitleChange}
	      				/>

						<ControlLabel>Location</ControlLabel>
						<FormControl
	      					type="text" 
	      					value={this.state.Location}
	      					placeholder="First Name" 
	      					onChange={this.LocationChange}
	      				/>

						<ControlLabel>Slack Key</ControlLabel>
						<FormControl
	      					type="text" 
	      					value={this.state.Slack}
	      					placeholder="Last Name" 
	      					onChange={this.SlackChange}
	      				/>
						
						<ControlLabel>Start Date</ControlLabel>
						<FormControl
	      					type="text" 
	      					value={this.state.StartDate}
	      					placeholder="Last Name" 
	      					onChange={this.StartDateChange}
	      				/>

	      				<ControlLabel>End Date</ControlLabel>
						<FormControl
	      					type="text" 
	      					value={this.state.EndDate}
	      					placeholder="Last Name" 
	      					onChange={this.EndDateChange}
	      				/>

						<ControlLabel>Meeting Days</ControlLabel>
						<FormControl
							componentClass="select"
							onChange={this.DaysChange}
							placeholder="select"
						>
							<option value="Sunday">Sunday</option>
							<option value="Monday">Monday</option>
							<option value="Tuesday">Tuesday</option>
							<option value="Wednesday">Wednesday</option>
							<option value='Thursday'>Thursday</option>
							<option value='Friday'>Friday</option>
							<option value='Saturday'>Saturday</option>
						</FormControl>

					    <Button type="submit">Submit</Button>
					</FormGroup>
				</form>
			</div>
		);
	}
}
export default CreateSectionForm;