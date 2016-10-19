import React, { Component } from "react";
import "./HomeworkPage.css";
import CreateAssignment from "./CreateAssignment/CreateAssignment.jsx";
import CreateAssignmentTeacher from "./CreateAssignmentTeacher/CreateAssignmentTeacher.jsx";
import TableRow from "../../Table/TableRow/TableRow.jsx";
class HomeworkPage extends Component {
		constructor(props, context) {

			super(props, context);
			this.state = {
				assignmentList: [],
				userRole: 'Student',
				sectionList: []
			};
			this.getAssignments = this.getAssignments.bind(this);
			this.getSections = this.getSections.bind(this);
		}
		componentWillMount() {
			const { UserInfo, UserSection} = this.props;
			this.setState({userRole: UserInfo.UserInfo.Role})
			if (UserInfo.UserInfo.Role === undefined) {
				fetch('/login', {credentials: 'include'})
				.then((response) => response.json())
				.then((json) => {
					this.setState({userRole: json.userData.Role})
				})
			};
			//WARNINGS COMING FROM THESE 2 LINES OF CODE!!!!!
			this.getAssignments('The Illest Section');
			this.getSections();
		}

		getAssignments(sectionTitle) {
			const { UserInfo } = this.props;
			//if (UserInfo.UserInfo.Role !== 'Admin') {
				fetch('/getAssignments', {
					credentials: 'include',
					method: 'POST',
					headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
					},
					body: JSON.stringify({
						sectionTitle: sectionTitle
			        })
				})
				.then((response) => response.json())
				.then((json) => {
					this.setState({assignmentList: json});
				});
			//};
		}
		
		getSections() {
			fetch('/admin/getSections', {
				credentials: 'include',
				method: 'POST',
				headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
				}
			})
			.then((response) => response.json())
			.then((json) => {
				this.setState({sectionList: json});
			});
		}

	render() {
		const { UserInfo, UserSection } = this.props;
		return (
			{/*
			<div className="homeworkBackground">
				{UserInfo.UserInfo.Role === 'Admin' ? (
					<CreateAssignment
						UserInfo={UserInfo}
						UserSection={UserSection}
						sectionList= {this.state.sectionList}
					/>
				) : (
					null
				)}

				{UserInfo.UserInfo.Role === 'Teacher' ? (
					<CreateAssignmentTeacher
						UserInfo={UserInfo}
						UserSection={UserSection}
						sectionList= {this.state.sectionList}
					/>
				) : (
					null
				)}
				
				<div className='wholeTable'>
					<TableRow 
						columnCount ={[

							Instructions: 
							Due:
							SubmitStatus:
							Type:
							Resources:

							{type: 'Header', value: 'TITLE'},
							{type: 'Header', value: 'DUE DATE'},
							{type: 'Header', value: 'TYPE'},
							{type: 'Header', value: 'STATUS'},
							
						]}
						pageName = 'homeworkPage'
					/>

					{this.state.assignmentList.map((item, index) =>
						<TableRow
							columnCount ={[
								{type: 'Data', value: item.Title},
								{type: 'Data', value: item.Due},
								{type: 'Data', value: ''},
								{type: 'Button', value: ''},
							]}
							pageName = 'homeworkPage'
							rowLink = {'homework/' + item.id}
							key= {index}
						/>
					)}
				</div>
			</div>
		*/}
		);
	}
}

export default HomeworkPage;