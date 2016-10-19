import React, { Component } from "react";
import { FormGroup, FormControl, ControlLabel, Checkbox, Button } from "react-bootstrap";
import "./SortUsersForm.css";

class SortUsersForm extends Component {
	constructor(props) {
		super(props);
		this.sortBy = this.sortBy.bind(this);

	}

	sortBy(event) {
		this.setState({ sortBy : event.target.value });
		this.props.getUsers(event.target.value, this.state.sortSection);
	}
	
	sortSection(event) {
		this.setState({ sortSection : event.target.value });
		this.props.getUsers(this.state.sortBy, this.state.sortSection);

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
			<div className="row remove-all-margin-padding sortingDiv">
				<form onSubmit={this.userCreate}>
					<FormGroup controlId="formBasicText">
						<div className="col-md-6">
							<FormControl
								componentClass="select"
								onChange={this.sortBy}
								placeholder="select"
							>
								<option value="sort-nameAsc">Name Ascending</option>
								<option value='sort-nameDesc'>Name Descending</option>
								<option value='sort-roleAsc'>Role Ascending</option>
								<option value='sort-roleDesc'>Role Descending</option>
							</FormControl>
						</div>
						<div className="col-md-6">
							<FormControl
								componentClass="select"
								onChange={this.sortBy}
								placeholder="select"
							>
								<option value="all">All Sections</option>
								{sectionList.map((item, index) =>
									<option key= {index} value={item.Title}>{item.Title}</option>

								)}
							</FormControl>
						</div>
					</FormGroup>
				</form>
			</div>
		);
	}
}
export default SortUsersForm;