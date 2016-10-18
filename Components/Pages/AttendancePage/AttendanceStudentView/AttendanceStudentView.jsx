import React, { Component } from "react";
import "./AttendancePage.css";
import TableRow from "../../Table/TableRow/TableRow.jsx";

class AttendanceStudentView extends Component {


	render(){
		return (
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
			
		)
	}

}





