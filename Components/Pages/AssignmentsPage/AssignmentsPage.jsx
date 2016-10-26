import React, { Component } from "react";
import "./AssignmentsPage.css";
import CreateAssignment from "./CreateAssignment/CreateAssignment.jsx";
import SortAssignments from "./SortAssignments/SortAssignments.jsx";
import CreateAssignmentTeacher from "./CreateAssignmentTeacher/CreateAssignmentTeacher.jsx";
import TableRow from "../../Table/TableRow/TableRow.jsx";
import $ from "jquery";

class AssignmentsPage extends Component {
	constructor(props, context) {

		super(props, context);
		this.state = {
			assignmentList: [],
			userRole: null,
			sectionList: []
		};
		this.getAssignments = this.getAssignments.bind(this);
		this.getSections = this.getSections.bind(this);
	}
	componentWillMount() {
		const { UserInfo, UserSection} = this.props;
		this.setState({userRole: UserInfo.UserInfo.Role})
		//prevents errors from occuring if page is reloaded and state is lost
		if (UserInfo.UserInfo.Role === undefined) {

			$.ajax({
				url: '/login',
				type: "GET"
			}).then((json) => {
				this.setState({userRole: json.userData.Role})
				if (json.userData.Role !== 'Admin') {
					this.getAssignments(json.userSection[0].Title);
				};
			});
			
		};
		// && UserSection.UserSection prevents error on reload of page
		if (UserInfo.UserInfo.Role !== 'Admin' && UserSection.UserSection) {
			this.getAssignments(UserSection.UserSection[0].Title);
		}
		this.getSections();
	}

	getAssignments(sectionTitle) {
		const { UserInfo } = this.props;

		$.ajax({
			url: '/getAssignments',
			type: "POST",
			data: {
				sectionTitle: sectionTitle
	        }
		}).then((response) => {
			this.setState({assignmentList: response});
		});

	}
	
	getSections() {
			
			$.ajax({
				url: '/admin/getSections',
				type: "POST"
			}).then((response) => {
				this.setState({sectionList: response.section});
			});
	}

	render() {
		const { UserInfo, UserSection } = this.props;
		return (

			<div className="homeworkBackground">
				{UserInfo.UserInfo.Role === 'Admin' ? (
					<div>
						<CreateAssignment
							UserInfo={UserInfo}
							UserSection={UserSection}
							sectionList= {this.state.sectionList}
							getAssignments = {this.getAssignments}
						/>
						<SortAssignments
							sectionList= {this.state.sectionList}
							getAssignments = {this.getAssignments}
						/>
					</div>
				) : (
					null
				)}

				{UserInfo.UserInfo.Role === 'Teacher' ? (
					<CreateAssignmentTeacher
						UserInfo={UserInfo}
						UserSection={UserSection}
						sectionList= {this.state.sectionList}
						getAssignments = {this.getAssignments}
					/>
				) : (
					null
				)}
				
				<div className='wholeTable'>
					<TableRow 
						className="onHoverTable "
						columnCount ={[
							{type: 'Header', value: 'TITLE'},
							{type: 'Header', value: 'DUE DATE'},
							{type: 'Header', value: 'TYPE'},
							
						]}
						pageName = 'homeworkPage'

					/>

					{this.state.assignmentList.map((item, index) =>
						<TableRow
							columnCount ={[
								{type: 'Data', value: item.Title},
								{type: 'Data', value: item.DueDate.split('T')[0] + ' ' + item.DueTime},
								{type: 'Data', value: item.Type},
							]}
							pageName = 'homeworkPage'
							rowLink = {'homework/' + item.id}
							key= {index}
						/>
					)}
				</div>
			</div>
		);
	}
}

export default AssignmentsPage;