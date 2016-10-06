import React, { Component } from "react";
import "./LogoutBar.css";

class LogoutBar extends Component {

	render() {
		const { UserName } = this.props; {/* this prop will have to change dynamically based on user logged in*/}
		
		return (
			<div className="row">
				<div id='logoutBar' className='col-md-12'> {/*this div should take up width 100% with background color red*/}

					<div id='logoutBar_logo'>
						<img src='/assets/images/logo2.png'/>
					</div>


				<div id='logoutBar_logo'>
					<img src='/assets/images/logo2.png'/>
				</div>

				<div id='logoutBar_textDiv'> {/*this div will wrap around the h tags and likely be floated right*/}
					<h4 id='logoutBar_username'>{UserName} </h4>
					<h4 id='logoutBar_logout'>Log Out</h4
				</div>
			</div>
		);
	}
}

export default LogoutBar;

