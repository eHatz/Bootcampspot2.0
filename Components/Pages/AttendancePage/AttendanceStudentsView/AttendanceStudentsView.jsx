import React, { Component } from "react";
import TableRow from "../../../Table/TableRow/TableRow.jsx";


class AttendanceStudentsView extends Component {

	render(){
		return (

			<div>
				<TableRow 
					columnCount ={[
						{type: 'Header', value: 'Name'},
						{type: 'Header', value: 'Date'},
						{type: 'Header', value: 'Time'},
						{type: 'Header', value: 'Status'},
					]}
					pageName = 'AttendancePage_AttendanceStudentsView'
				/>

				{data.map((item, index) =>
					<TableRow
						columnCount ={[
							{type: 'Data', value: item.Name},
							{type: 'Data', value: item.Date},
							{type: 'Data', value: item.Time},
							{type: 'Data', value: item.Status},
						]}
						pageName = 'AttendancePage_AttendanceStudentsView'
						key= {index}
					/>
				)}

			</div>

		)
	}

}

/*
Name:
date:
time: 
status:

			

*/

export default AttendanceStudentsView





