import React, { Component } from "react";
import "./CareerPage.css";
import LogoutBar from "../../LogoutBar/LogoutBar.jsx";
class CareerPage extends Component {

	componentDidMount(){
		const { sidebarOn } = this.props;
		sidebarOn();
	}

	render() {

		return (

			<div>
				<LogoutBar UserName='Tim' />
			</div>
		);
	}
}

export default CareerPage;

