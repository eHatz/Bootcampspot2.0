import React, { Component } from "react";
import { FormGroup, FormControl, ControlLabel, Checkbox, Button } from "react-bootstrap";
import "./SortUsersForm.css";

class SortUsersForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			sectionList: [],
			sortBy: 'nameAsc',
			sortSection: 'all'
		};

		this.sortBy = this.sortBy.bind(this);
		this.sortSection = this.sortSection.bind(this);
	}

	sortBy(event) {
		this.setState({ sortBy : event.target.value });
		this.props.getUsers(event.target.value, this.state.sortSection);
	}
	sortSection(event) {
		this.setState({ sortSection : event.target.value });
		this.props.getUsers(this.state.sortBy, this.state.sortSection);
	}
	
	render() {
		const { sectionList } = this.props;
		return (
			<div id='userFormDiv'>
				<form onSubmit={this.userCreate}>
					<FormGroup controlId="formBasicText">
						<ControlLabel>Sort By:</ControlLabel>
						<FormControl
							componentClass="select"
							onChange={this.sortBy}
							placeholder="select"
						>
							<option value="nameAsc">NAME ASCENDING</option>
							<option value='nameDesc'>NAME DESCENDING</option>
							<option value='roleAsc'>ROLE ASCENDING</option>
							<option value='roleDesc'>ROLE DESCENDING</option>
						</FormControl>

						<ControlLabel>Section:</ControlLabel>
						<FormControl
							componentClass="select"
							onChange={this.sortSection}
							placeholder="select"
						>
							<option value="all">ALL</option>
							{sectionList.map((item, index) =>
								<option key= {index} value={item.Title}>{item.Title}</option>

							)}
						</FormControl>

					    <Button type="submit">Submit</Button>
					</FormGroup>
				</form>
			</div>
		);
	}
}
export default SortUsersForm;