import React, { Component } from "react";
import TableRow from "../../../Table/TableRow/TableRow.jsx";

class AttendanceSessionsView extends Component {

//just a placeholder
	render(){

		const { displayData } = this.props;
		console.log("displayData: ", displayData);

		return (
			<div>

			<TableRow 
				columnCount ={[
					{type: 'Header', value: 'Date'},
					{type: 'Header', value: 'Lesson Number'},
					{type: 'Header', value: 'Subject'},
				]}
				pageName = 'AttendancePage'
			/>

			{
				displayData.map((item, index) =>
				<TableRow
					columnCount ={[
						{type: 'Data', value: item.Date},
						{type: 'Data', value: item.LessonNumber},
						{type: 'Data', value: item.Subject},
					]}
					pageName = 'AttendancePage'
					key= {index}
				/>
			)}

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



