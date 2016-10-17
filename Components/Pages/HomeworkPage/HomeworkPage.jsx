import React, { Component } from "react";
import "./HomeworkPage.css";
import Navbar from "../../Navbar/Navbar.jsx";
import LogoutBar from "../../LogoutBar/LogoutBar.jsx";
import TableRow from "../../Table/TableRow/TableRow.jsx";


class HomeworkPage extends Component {

	componentWillMount() {
		const { UserInfo } = this.props;
		console.log('Homework: ', UserInfo);
	}

	
	render() {
		return (

			<div className="homeworkBackground">
				
			</div>
		);
	}
}

export default HomeworkPage;