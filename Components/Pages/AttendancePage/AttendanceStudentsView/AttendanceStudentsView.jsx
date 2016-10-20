import React, { Component } from "react";
import TableRow from "../../../Table/TableRow/TableRow.jsx";
import "./AttendanceStudentsView.css";

class AttendanceStudentsView extends Component {

	render(){

		const { displayData, selectStudentHandler } = this.props

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

				{displayData.map((item, index) =>
					<div 
					value={item.UserId}
					onClick={selectStudentHandler}
					>
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
					</div>
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





