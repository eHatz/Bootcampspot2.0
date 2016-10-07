import React, { Component } from "react";
import "./HomeworkPage.css";
import Navbar from "../../Navbar/Navbar.jsx"
import LogoutBar from "../../LogoutBar/LogoutBar.jsx";
import Table from "../../Table/Table.jsx";

class HomeworkPage extends Component {

	componentDidMount(){
		const { sidebarOn } = this.props;
		sidebarOn();
	}
	
	render() {
		return (

			<div>
				<LogoutBar UserName='Tim' />
				<div className='row'>
					<Navbar/>
					<div className= "col-md-8 remove-all-margin-padding">
						<Table pageName='homeworkPage'
							header1='WEEK' 
							header2 = 'HOMEWORK' 
							header3='DUE DATE' 
							header4='SUBMISSION'
						/>
					</div>
				</div>
			</div>

		);
	}
}

export default HomeworkPage;