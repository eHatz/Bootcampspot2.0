import React, { Component } from "react";
import { FormGroup, FormControl, ControlLabel, Checkbox, Button } from "react-bootstrap";
import "./SortUsersForm.css";

class SortUsersForm extends Component {
	constructor(props) {
		super(props);
		this.sortBy = this.sortBy.bind(this);

	}

	sortBy(event) {
		var sort= 'sort-nameAsc';
		var section = 'all';
		if (event.target.value.indexOf('sort-') !== -1) {
			sort = event.target.value;
		} else {
			section = event.target.value;
		};
		this.props.getUsers(sort, section);
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
							<option value="sort-nameAsc">NAME ASCENDING</option>
							<option value='sort-nameDesc'>NAME DESCENDING</option>
							<option value='sort-roleAsc'>ROLE ASCENDING</option>
							<option value='sort-roleDesc'>ROLE DESCENDING</option>
						</FormControl>

						<ControlLabel>Section:</ControlLabel>
						<FormControl
							componentClass="select"
							onChange={this.sortBy}
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