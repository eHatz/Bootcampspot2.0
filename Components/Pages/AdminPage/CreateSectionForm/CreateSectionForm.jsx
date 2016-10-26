import React, { Component } from "react";
import { FormGroup, FormControl, ControlLabel, Checkbox, Button } from "react-bootstrap";
import "./CreateSectionForm.css";
import $ from "jquery";

class CreateSectionForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			Title: "",
			Location: "",
			SlackWebhook: "",
			SlackToken: "",
			StartDate: "",
			EndDate: ""
		};

		this.handleTitleChange = this.handleTitleChange.bind(this);
		this.LocationChange = this.LocationChange.bind(this);
		this.SlackWebhookChange = this.SlackWebhookChange.bind(this);
		this.SlackTokenChange = this.SlackTokenChange.bind(this);
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

	SlackWebhookChange(event) {
		this.setState({ SlackWebhook: event.target.value });
	}

	SlackTokenChange(event) {
		this.setState({ SlackToken: event.target.value });
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
			SlackWebhook: "",
			SlackToken: "",
			StartDate: "",
			EndDate: ""
		});
	}

	sectionCreate(event){
		$.ajax({
			url: '/admin/createSection',
			type: "POST",
			data: {
				Title: this.state.Title,
				Location: this.state.Location,
				SlackWebhook: this.state.SlackWebhook,
				SlackToken: this.state.SlackToken,
				StartDate: this.state.StartDate,
				EndDate: this.state.EndDate
	        }
		}).then((response) => {
			this.props.getSections();
		});

	    this.clearInput();
	    event.preventDefault();
	}
	
	render() {

		return (
			<div className="row remove-all-margin-padding">
				<div className="sectionDiv">
					<form onSubmit={this.sectionCreate}>
						<FormGroup controlId="formBasicText">
							<div className="col-md-2 sectionField">
								<FormControl
			      					type="text" 
			      					value={this.state.Title}
			      					placeholder="Section Title" 
			      					onChange={this.handleTitleChange}
			      					required
			      				/>
		      				</div>

							<div className="col-md-2 sectionField">
								<FormControl
			      					type="text" 
			      					value={this.state.Location}
			      					placeholder="Location" 
			      					onChange={this.LocationChange}
			      					required
			      				/>
		      				</div>

							<div className="col-md-2 sectionField">
								<FormControl
			      					type="text" 
			      					value={this.state.SlackWebhook}
			      					placeholder="Slack Webhook" 
			      					onChange={this.SlackWebhookChange}
			      				/>
		      				</div>

		      				<div className="col-md-2 sectionField">
								<FormControl
			      					type="text" 
			      					value={this.state.SlackToken}
			      					placeholder="Slack Token" 
			      					onChange={this.SlackTokenChange}
			      				/>
		      				</div>
							
							<div className="col-md-2 sectionField">
								<FormControl
			      					type="date" 
			      					value={this.state.StartDate}
			      					placeholder="Start Date" 
			      					onChange={this.StartDateChange}
			      					required
			      				/>
		      				</div>

		      				<div className="col-md-2 sectionField">
								<FormControl
			      					type="date" 
			      					value={this.state.EndDate}
			      					placeholder="End Date" 
			      					onChange={this.EndDateChange}
			      					required
			      				/>
		      				</div>

							{/*
								<div className="col-md-2 sectionField">
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
							</div>
							*/}
							<div className="col-md-2">
						    	<Button id="sectionButton" type="submit">Submit</Button>
						    </div>
						</FormGroup>
					</form>
				</div>
			</div>
		);
	}
}
export default CreateSectionForm;