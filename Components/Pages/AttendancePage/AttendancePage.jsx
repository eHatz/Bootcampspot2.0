import React, { Component } from "react";
import "./AttendancePage.css";
import Navbar from "../../Navbar/Navbar.jsx"
import LogoutBar from "../../LogoutBar/LogoutBar.jsx";
import Table from "../../Table/Table.jsx";

class AttendancePage extends Component {
	render() {
		return (

<<<<<<< HEAD
				<div className="row show-grid">
					<LogoutBar UserName='Andalicious' />
				</div>

				<div className="row">
					<div className="linkDiv">
						<Navbar />
=======
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
>>>>>>> 70a9f5a76141806d635bc7920ea7679b26eb29aa
					</div>
				</div>
			</div>

		);
	}
}

export default AttendancePage;
