import React, { Component } from "react";
import "./LogoutBar.css";

class LogoutBar extends Component {

	render() {
		const { UserName } = this.props; {/* this prop will have to change dynamically based on user logged in*/}
		
		return (

			<div id='logoutBar'> {/*this div should take up width 100% with background color red*/}
				<div id='logoutBar_textWrapper'> {/*this div will wrap around the h tags and likely be floated right*/}
					<h2 id='logoutBar_username'>{UserName}</h2>
					<h2 id='logoutBar_logout'>Log Out</h2>
				</div>
			</div>
		);
	}
}

export default LogoutBar;

