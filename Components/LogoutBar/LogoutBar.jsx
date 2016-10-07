import React, { Component } from "react";
import "./LogoutBar.css";

class LogoutBar extends Component {

	render() {
		const { UserName } = this.props;
		
		return (
			<div className="row">

						<h4 id='logoutBar_username'>{UserName} </h4>
						<h4 id='logoutBar_logout'>Log Out</h4>

					</div>
					
			</div>
		);
	}
}

export default LogoutBar;

