import React, { Component } from "react";
import "./ProjectsPage.css";
import Navbar from "../../Navbar/Navbar.jsx"
import LogoutBar from "../../LogoutBar/LogoutBar.jsx";
import Table from "../../Table/Table.jsx";

class ProjectsPage extends Component {
	render() {
		return (

			<div>
				<LogoutBar UserName='Tim' />
				<div className='row'>
					<Navbar/>
					<div className= "col-md-8 remove-all-margin-padding">
						<Table pageName='projectsPage'
							header1='WEEK' 
							header2 = 'PROJECT' 
							header3='DUE DATE' 
							header4='SUBMISSION'
						/>
					</div>
				</div>
			</div>

		);
	}
}

export default ProjectsPage;