import React, { Component } from "react";
import { FormGroup, FormControl, ControlLabel, Checkbox, Button } from "react-bootstrap";
import "./SortAssignments.css";

class SortAssignments extends Component {
	constructor(props) {
		super(props);
		this.sortBy = this.sortBy.bind(this);
		this.state = {
			sortSection: 'all',

		};
	}

	
	sortBy(event) {
		const section = event.target.value;
		this.props.getAssignments(section)
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
									required
								>
									<option value="all">Select Section</option>
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
export default SortAssignments;