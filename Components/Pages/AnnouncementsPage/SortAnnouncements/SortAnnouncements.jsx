import React, { Component } from "react";
import { FormGroup, FormControl, ControlLabel, Checkbox, Button } from "react-bootstrap";
import "./SortAnnouncements.css";

class SortAnnouncements extends Component {
	constructor(props) {
		super(props);
		this.sortBy = this.sortBy.bind(this);
		this.state = {
			sortSection: 'all',

		};
	}

	
	sortBy(event) {
		const section = event.target.value;
		this.props.getAnnouncements(section)
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
export default SortAnnouncements;