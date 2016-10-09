import React, { Component } from "react";
import "./SyllabusPage.css";
import LogoutBar from "../../LogoutBar/LogoutBar.jsx";
import Table from "../../Table/Table.jsx";
import Navbar from "../../Navbar/Navbar.jsx";

class SyllabusPage extends Component {

	render() {

		return (

			<div>				
				<div id='syllabus'>
					<h3>HOMEWORK</h3>
					<ul>
						<li>You must complete 90% of the homework assignments. (You can miss no more than 2 assignments)</li>
						<li>Homework submissions must be on time AS IS. Late submissions will not be counted.</li>
					</ul>
					<h3>ATTENDANCE</h3>
					<ul>
						<li>Attendance must be maintained at a 95% rate. (You can miss no more than a total of 4 classes)</li>
						<li>Written permission must be obtained to miss class or it's considered one of your 4 absences.</li>
					</ul>
					<h3>PROJECTS</h3>
					<ul>
						<li>You must give a full effort on every group and individual project.</li>
					</ul>
				</div>
					
						
				<div className='row remove-all-margin-padding'>
					<Table pageName='syllabusPage'
						header1='SUBJECT' 
						header2 = 'LESSON #' 
						header3='DATE' 
						header4='RECORDINGS'
					/>
				</div>
			</div>
		);
	}
}

export default SyllabusPage;

