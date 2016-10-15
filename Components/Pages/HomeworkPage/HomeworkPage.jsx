import React, { Component } from "react";
import "./HomeworkPage.css";
import Navbar from "../../Navbar/Navbar.jsx";
import LogoutBar from "../../LogoutBar/LogoutBar.jsx";
import Table from "../../Table/Table.jsx";

class HomeworkPage extends Component {

	componentWillMount() {
		const { UserInfo } = this.props;
		console.log('Homework: ', UserInfo);
	}

	
	render() {
		return (

			<div className="homeworkBackground">
				<Table pageName='homeworkPage'
					header1='WEEK' 
					header2 = 'HOMEWORK' 
					header3='DUE DATE' 
					header4='SUBMISSION'
				/>
			</div>
		);
	}
}

export default HomeworkPage;