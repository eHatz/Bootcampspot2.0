import React, { Component } from "react";
import TableRow from "../../../Table/TableRow/TableRow.jsx";

const data = [];


class AttendanceStudentView extends Component {


	render(){
		return (
			<div>

				<TableRow 
					columnCount ={[
						{type: 'Header', value: 'Class'},
						{type: 'Header', value: 'Date'},
						{type: 'Header', value: 'Time'},
						{type: 'Header', value: 'Status'},
					]}
					pageName = 'AttendancePage_AttendanceStudentsView'
				/>


				{data.map((item, index) =>
					<TableRow
						columnCount ={[
							{type: 'Data', value: item.date},
							{type: 'Data', value: item.time},
							{type: 'Data', value: item.attendance},
						]}
						pageName = 'attendancePage'
						key= {index}
					/>
				)}
			</div>
		)
	}

}

export default AttendanceStudentView;





