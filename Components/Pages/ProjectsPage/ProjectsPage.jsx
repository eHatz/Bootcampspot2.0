import React, { Component } from "react";
import "./ProjectsPage.css";
import Navbar from "../../Navbar/Navbar.jsx"
import LogoutBar from "../../LogoutBar/LogoutBar.jsx";
import Table from "../../Table/Table.jsx";

class ProjectsPage extends Component {

	render() {
		return (

			<div className="projectsBackground">
				<Table pageName='projectsPage'
					header1='WEEK' 
					header2 = 'PROJECT' 
					header3='DUE DATE' 
					header4='SUBMISSION'
				/>
			</div>

		);
	}
}

export default ProjectsPage;