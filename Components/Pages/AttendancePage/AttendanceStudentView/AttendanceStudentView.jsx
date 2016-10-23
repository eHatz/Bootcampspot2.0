import React, { Component } from "react";
import TableRow from "../../../Table/TableRow/TableRow.jsx";
import AttendanceEditForm from "../AttendanceEditForm/AttendanceEditForm.jsx";
import "./AttendanceStudentView.css";



class AttendanceStudentView extends Component {

	constructor(props){
		super(props);

		this.state={
			editFormStatus: ".AttendanceEditForm_hidden"
		}
	}

	showForm(){
		this.setState({
			editFormStatus: ".AttendanceEditForm_show"
		})
	}

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
					<div
						onClick={this.showForm}
						value={item.id}
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

						<AttendanceEditForm
							isDisplayed={this.state.editFormStatus}
						/>

					</div>
				)}
			</div>
		)
	}

}

export default AttendanceStudentView;





