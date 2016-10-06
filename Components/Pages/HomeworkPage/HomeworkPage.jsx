import React, { Component } from "react";
import "./HomeworkPage.css";
import Navbar from "../../Navbar/Navbar.jsx"
import LogoutBar from "../../LogoutBar/LogoutBar.jsx";
class HomeworkPage extends Component {
	render() {
		return (

			<div>
				<LogoutBar UserName='Tim' />
				<Navbar/>
				
			</div>

		);
	}
}

export default HomeworkPage;