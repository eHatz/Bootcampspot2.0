import React, { Component } from "react";
import { browserHistory, Router, Route, Link, withRouter } from 'react-router';
import "./AttendancePage.css";
import TableRow from "../../Table/TableRow/TableRow.jsx";
import AttendanceMenu from "./AttendanceMenu/AttendanceMenu.jsx";

const { UserInfo, location, router, openModal, closeModal, showModal } = this.props;
const Role = UserInfo.UserInfo.Role;

class AttendancePage extends Component {

	componentWillMount() {

		if (Role === "Admin"){
			this.adminView();
		} else if (Role === "Teacher"){

		} else if (Role === "Student"){

		} else {
			router.replace('/#');
		}

	}

	adminView(){

	}

	teacherView(){

	}

	studentView(){

	}

	render() {

		return (

			<div className="attendanceBackground">
				<div id="AttendancePage_menuDiv">
					{this.props.UserInfo.UserInfo.Role === "Teacher" || "Admin" ? 
						( <AttendanceMenu  />  )
						:
						( null )
					}
				</div>
				<div className='wholeTable'>
					<TableRow 
						columnCount ={[
							{type: 'Header', value: 'TIME'},
							{type: 'Header', value: 'DATE'},
							{type: 'Header', value: 'ATTENDANCE'},
							{type: 'Header', value: 'NOTES'}
						]}
						pageName = 'attendancePage'
					/>

					{dummyData.map((item, index) =>
						<TableRow
							columnCount ={[
								{type: 'Data', value: item.week},
								{type: 'Data', value: item.homework},
								{type: 'Data', value: item.dueDate},
								{type: 'Button', value: item.submission},
							]}
							pageName = 'attendancePage'
							key= {index}
						/>
					)}
				</div>
			</div>

		);
	}
}
export default AttendancePage;

/*
sections={UserInfo.UserInfo.sections}			
*/