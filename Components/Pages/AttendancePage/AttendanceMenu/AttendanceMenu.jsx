import React, { Component } from "react";
import { ButtonToolbar, DropdownButton, MenuItem, Form } from "react-bootstrap";
import "./AttendanceMenu.css";


const { sections } = this.props;

class AttendanceMenu extends Component {

	constructor(...args){
		super(args);

		this.state ={
			previous: "#"
		}
	}

	componentWillMount() {
		console.log("AttendanceMenu");
		//Request class list from server

	}

	render() {

		return (

			<Form>
				<Button href={this.state.previous}>
			     	back
			    </Button>

				<FormGroup>

					<FormControl 
						componentClass="select" 
						placeholder="select"
						onChange={this.props.sectionSort}
					>
						<option value="all">All Sections</option>
						{sections.map(section, index) => 
							<option key={index} value={section.title}>{section.Title}</option>
						}

					</FormControl>

				</FormGroup>

				<FormGroup onChange={this.props.switchView}>

					<Radio inline value="bySection">
						View by Session
					</Radio>
					{' '}
					<Radio inline value="byStudent">
						View by Student
					</Radio>
			
				</FormGroup>

			</Form>

		);
	}
}


export default AttendanceMenu;