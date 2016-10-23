import React, { Component } from "react";
import TableRow from "../../../Table/TableRow/TableRow.jsx";
import "./AttendanceStudentView.css";



class AttendanceStudentView extends Component {


	render(){

		const { displayData, showModal } = this.props;
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
					<div
						onClick={showModal}
						value={item.AttendanceId}
					>
						<TableRow
							columnCount ={[
								{type: 'Data', value: item.Class},
								{type: 'Data', value: item.Date},
								{type: 'Data', value: item.Time},
								{type: 'Data', value: item.Status}
							]}
						pageName = 'AttendancePage_AttendanceStudentView'
						key= {index}
						/>
					</div>
				)}
			</div>
		)
	}

}

export default AttendanceStudentView;





