import React, { Component } from "react";
import { FormGroup, FormControl, ControlLabel, Checkbox, Button } from "react-bootstrap";
import "./CreateAnnouncement.css";
import $ from "jquery";
class createAnnouncement extends Component {
	constructor(props) {
		super(props);

		this.state = {
			title: "",
			message: "",
			sectionTitle: "",
			channel: ""
		};
		this.sectionChange = this.sectionChange.bind(this);
		this.channelChange = this.channelChange.bind(this);
		this.handleTitleChange = this.handleTitleChange.bind(this);
		this.clearInput = this.clearInput.bind(this);
		this.announcementCreate = this.announcementCreate.bind(this);
		this.messageChange = this.messageChange.bind(this);
	}
	sectionChange(event) {
		this.setState({ sectionTitle: event.target.value });
		this.props.getSlackChannels(event.target.value);
	}

	channelChange(event) {
		this.setState({ channel: event.target.value });
	}

	handleTitleChange(event) {
		this.setState({ title: event.target.value });
	}

	messageChange(event) {
		this.setState({ message: event.target.value });
	}

	clearInput(){
		this.setState({
			title: "",
			message: ""
		});
	}

	announcementCreate(event){

		$.ajax({
			url: '/createAnnouncement',
			type: "POST",
			data: {
	        	title: this.state.title,
				message: this.state.message,
				sectionTitle: this.state.sectionTitle,
				channel: this.state.channel
	        }
		}).then((response) => {
			this.props.getAnnouncements(this.state.sectionTitle);
		});

	    this.clearInput();
	    event.preventDefault();
	}
	
	render() {
		return (
			<div className="row remove-all-margin-padding">
				<div className="announcementsDiv">
					<form onSubmit={this.announcementCreate}>
						<FormGroup controlId="formBasicText">
							<div className="row remove-all-margin-padding">
								<div className="col-md-4">
									<FormControl
										type="text" 
										value={this.state.title}
										placeholder="title" 
										onChange={this.handleTitleChange}
										required
									/>
								</div>
								<div className="col-md-4">
									<FormControl
										componentClass="select"
										onChange={this.sectionChange}
										placeholder="select"
										required
									>
										<option value="">Select Section</option>
										{this.props.sectionList.map((item, index) =>
											<option key= {index} value={item.Title}>{item.Title}</option>

										)}
									</FormControl>
								</div>
								<div className="col-md-4">
									<FormControl
										componentClass="select"
										onChange={this.channelChange}
										placeholder="select"
										required
									>
										<option value="">Select Slack Channel</option>
										{this.props.channelList.map((item, index) =>
											<option key= {index} value={item.name}>{item.name}</option>

										)}
									</FormControl>
								</div>
							</div>
							<div className="row remove-all-margin-padding">
								<div className="col-md-12 messageInput">
									<FormControl
										componentClass="textarea"
										rows="4"
										value={this.state.message}
										placeholder="message" 
										onChange={this.messageChange}
										required
									/>
								</div>
								<div className="col-md-3">
							    	<Button id="homeworkButton" type="submit">Submit</Button>
							    </div>
							</div>
						</FormGroup>
					</form>
				</div>
			</div>
		);
	}
}
export default createAnnouncement;