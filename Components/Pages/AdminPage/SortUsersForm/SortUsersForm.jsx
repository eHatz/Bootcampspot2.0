import React, { Component } from "react";
import { FormGroup, FormControl, ControlLabel, Checkbox, Button } from "react-bootstrap";
import "./SortUsersForm.css";

class SortUsersForm extends Component {
	constructor(props) {
		super(props);
		this.sortBy = this.sortBy.bind(this);
		this.state = {
			sortSection: 'all',
			sortBy: 'sort-nameAsc'
		};
	}

	
	sortBy(event) {

		if (event.target.value.indexOf('sort-') !== -1) {
			const sort = event.target.value;
			this.setState({sortBy: sort});
			this.props.getUsers(sort, this.state.sortSection);
		} else {
			const section = event.target.value;
			this.setState({sortSection: section});
			this.props.getUsers(this.state.sortBy, section);
		};
		
	}

	render() {
		const { sectionList } = this.props;
		return (
			<div className="row remove-all-margin-padding">
				<div className="sortingDiv">
					<form>
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
			</div>
		);
	}
}
export default SortUsersForm;