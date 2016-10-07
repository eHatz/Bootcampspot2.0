import React, { Component } from "react";
import "./AttendancePage.css";
import Navbar from "../../Navbar/Navbar.jsx"
import LogoutBar from "../../LogoutBar/LogoutBar.jsx";
import Table from "../../Table/Table.jsx";

class AttendancePage extends Component {
	componentDidMount(){
		const { sidebarOn } = this.props;
		sidebarOn();
	}
	render() {
		return (

			<div>
				<Table pageName='attendancePage'
					header1='NOTES' 
					header2 = 'TIME' 
					header3='DATE' 
					header4='ATTENDANCE'
				/>
			</div>

		);
	}
}

export default AttendancePage;