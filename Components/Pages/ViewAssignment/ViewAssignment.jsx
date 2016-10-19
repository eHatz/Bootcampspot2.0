import React, { Component } from "react";
import "./ViewAssignment.css";
import ViewMySubmission from './ViewMySubmission/ViewMySubmission.jsx'
class ViewAssignment extends Component {
		constructor(props, context) {

			super(props, context);
			this.state = {
				assignment: [],
				userRole: null,
			};
			this.getAssignment = this.getAssignment.bind(this);
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
			this.getAssignment(this.props.params.id);
		}

		getAssignment(assignmentId) {
			const { UserInfo } = this.props;
			
			//if (UserInfo.UserInfo.Role !== 'Admin') {
				fetch('/viewAssignment', {
					credentials: 'include',
					method: 'POST',
					headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
					},
					body: JSON.stringify({
						assignmentId: assignmentId
			        })
				})
				.then((response) => response.json())
				.then((json) => {
					console.log('STUDENT ASSIGNMENT', json.studentSubmission)
					this.setState({assignment: json.studentSubmission});
				});
			//};
		}
		
	render() {
		const { UserInfo, UserSection, params } = this.props;
		
		return (

			<div className="homeworkBackground">
				{UserInfo.UserInfo.Role === 'Admin' || UserInfo.UserInfo.Role === 'Teacher'  ? (
					<ViewMySubmission/>
				) : (
					null
				)}

				{UserInfo.UserInfo.Role === 'Student' ? (
					<ViewMySubmission/>
				) : (
					null
				)}

			</div>
		);
	}
}

export default ViewAssignment;