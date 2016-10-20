import React, { Component } from "react";
import TableRow from "../../../Table/TableRow/TableRow.jsx";
import "./AttendanceSessionsView.css";

class AttendanceSessionsView extends Component {


//just a placeholder
	render(){

		const { displayData, viewSingleSession } = this.props;
		console.log("displayData: ", displayData);

		return (
			<div>

				<TableRow 
					columnCount ={[
						{type: 'Header', value: 'Date'},
						{type: 'Header', value: 'Lesson Number'},
						{type: 'Header', value: 'Subject'},
					]}
					pageName = 'AttendancePage_AttendanceSessionView'
				/>

				{
					displayData.map((item, index) =>
						<div 
							onClick={viewSingleSession}
							value={item.id}
						>

							<TableRow
								columnCount ={[
									{type: 'Data', value: item.Date},
									{type: 'Data', value: item.LessonNumber},
									{type: 'Data', value: item.Subject},
								]}
								pageName = 'AttendancePage_AttendanceSessionView'
								key= {index}
								value={item.id}
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



