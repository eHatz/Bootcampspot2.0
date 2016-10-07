import React, { Component } from "react";
import "./AttendancePage.css";
import Navbar from "../../Navbar/Navbar.jsx"
import LogoutBar from "../../LogoutBar/LogoutBar.jsx";
import Table from "../../Table/Table.jsx";

class AttendancePage extends Component {
	render() {
		return (

				<div className="row show-grid">
					<LogoutBar UserName='Name' />
				</div>

				<div className="row">
					<div className="linkDiv">
						<Navbar />
			<div>
				<LogoutBar UserName='Tim' />
				<div className='row'>
					<Navbar/>
					<div className= "col-md-8 remove-all-margin-padding">
						<Table pageName='attendancePage'
							header1='NOTES' 
							header2 = 'TIME' 
							header3='DATE' 
							header4='ATTENDANCE'
						/>

					</div>
				</div>
			</div>

		);
	}
}

export default AttendancePage;
