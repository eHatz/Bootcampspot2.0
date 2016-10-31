import React, { Component } from "react";
import $ from "jquery";
import "./SyllabusPage.css";
import LogoutBar from "../../LogoutBar/LogoutBar.jsx";
import TableRow from "../../Table/TableRow/TableRow.jsx";
import Navbar from "../../Navbar/Navbar.jsx";

class SyllabusPage extends Component {

	constructor(props){
		super(props);

		this.state ={
			displayData: []
		}
	}

	componentWillMount(){
		this.getSyllabus();
	}

	getSyllabus(){
		const UserInfo = this.props.UserInfo.UserInfo;
		const id = UserInfo.id;

		$.ajax({
				url: "/syllabus",
				type: "POST",
				data: {id: id}
		}).then(function(response){
			this.setState({
				displayData: response
			});
		}.bind(this))
	}

	render() {

		return (

			<div className= 'syllabusBackground'>				
				<div id='syllabus'>
					<h3>HOMEWORK</h3>
					<ul>
						<li className="syllabusText">You must complete 90% of the homework assignments. (You can miss no more than 2 assignments)</li>
						<li className="syllabusText">Homework submissions must be on time AS IS. Late submissions will not be counted.</li>
					</ul>
					<h3>ATTENDANCE</h3>
					<ul>
						<li className="syllabusText">Attendance must be maintained at a 95% rate. (You can miss no more than a total of 4 classes)</li>
						<li className="syllabusText">Written permission must be obtained to miss class or it's considered one of your 4 absences.</li>
					</ul>
					<h3>PROJECTS</h3>
					<ul>
						<li className="syllabusText">You must give a full effort on every group and individual project.</li>
					</ul>
				</div>
								

				<div>
					<TableRow 
						columnCount ={[
							{type: 'Header', value: 'Subject'},
							{type: 'Header', value: 'Lesson Number'},
							{type: 'Header', value: 'Date'},
							{type: 'Header', value: 'Recordings'},
						]}
						pageName = 'SyllabusPage'
					/>

					{this.state.displayData.map((item, index) =>
						<TableRow
							columnCount ={[
								{type: 'Data', value: item.Subject},
								{type: 'Data', value: item.LessonNumber},
								{type: 'Data', value: item.Date},
								{type: 'Data', value: item.Recording},
							]}
							pageName = 'SyllabusPage'
							key= {index}
						/>		
					)}

				</div>

			</div>
		);
	}
}

export default SyllabusPage;

