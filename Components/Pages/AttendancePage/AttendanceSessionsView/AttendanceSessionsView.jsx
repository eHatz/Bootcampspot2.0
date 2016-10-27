import React, { Component } from "react";
import TableRow from "../../../Table/TableRow/TableRow.jsx";
import "./AttendanceSessionsView.css";

class AttendanceSessionsView extends Component {


	render(){

		let { displayData, viewSingleSession } = this.props;

		return (
			<div>

				<TableRow 
					columnCount ={[
						{type: 'Header', value: 'Date'},
						{type: 'Header', value: 'Time'},
						{type: 'Header', value: 'Lesson Number'},
						{type: 'Header', value: 'Subject'}
					]}
					pageName = 'AttendancePage_AttendanceSessionView'
				/>

				{
					displayData.map((item, index) =>
						<div 
							onClick={viewSingleSession}
							key={index}
							id={item.id}
						>

							<TableRow
								columnCount ={[
									{type: 'Data', value: item.Date},
									{type: 'Data', value: item.Time},
									{type: 'Data', value: item.LessonNumber},
									{type: 'Data', value: item.Subject}
								]}
								pageName = 'AttendancePage_AttendanceSessionView'
								key= {index}
							/>
						</div>
					)
				}

			</div>

		)
	}

}

export default AttendanceSessionsView;

/*
Subject
LessonNumber
Date
*/



