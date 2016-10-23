import React, { Component } from "react";
import TableRow from "../../../Table/TableRow/TableRow.jsx";
import AttendanceEditForm from "../AttendanceEditForm/AttendanceEditForm.jsx";
import "./AttendanceStudentView.css";



class AttendanceStudentView extends Component {


	render(){

		const { displayData } = this.props;
		console.log("Student View displayData: ", displayData)


		return (
			<div>

				<TableRow 
					columnCount ={[
						{type: 'Header', value: 'Class'},
						{type: 'Header', value: 'Date'},
						{type: 'Header', value: 'Time'},
						{type: 'Header', value: 'Status'},
					]}
					pageName = 'AttendancePage_AttendanceStudentView'
				/>

				{displayData.map((item, index) =>

					<TableRow
						columnCount ={[
							{type: 'Data', value: item.Class},
							{type: 'Data', value: item.Date},
							{type: 'Data', value: item.Time},
							{type: 'Button', 
							value: item.Status, 
							button: <AttendanceEditForm 
								text={item.Status}
								value={item.id}
								/>
							}
						]}

						pageName = 'Attendance_edit AttendancePage_AttendanceStudentView'
						key= {index}
					/>

				)}
			</div>
		)
	}

}

export default AttendanceStudentView;





