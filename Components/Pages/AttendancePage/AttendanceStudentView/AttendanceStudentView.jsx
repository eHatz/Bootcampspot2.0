import React, { Component } from "react";
import TableRow from "../../../Table/TableRow/TableRow.jsx";

class AttendanceStudentView extends Component {


	render(){
		return (
			<TableRow 
				columnCount ={[
					{type: 'Header', value: 'DATE'},
					{type: 'Header', value: 'TIME'},
					{type: 'Header', value: 'ATTENDANCE'},
				]}
				pageName = 'attendancePage'
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

		)
	}

}





