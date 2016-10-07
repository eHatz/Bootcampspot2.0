import React, { Component } from "react";
import "./FeedbackPage.css";
import LogoutBar from "../../LogoutBar/LogoutBar.jsx";
class FeedbackPage extends Component {

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

export default FeedbackPage;

