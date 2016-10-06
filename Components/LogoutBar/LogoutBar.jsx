import React, { Component } from "react";
import "./LogoutBar.css";

class LogoutBar extends Component {

	render() {
		const { UserName } = this.props;
		
		return (
			<div className="row">
				<div id='logoutBar' className='col-md-12'> 

					<div >
						<img id='logoutBar_logo' src='/assets/images/logo2.png'/>
					</div>

					<div id='logoutBar_textDiv'>
						<h4 id='logoutBar_username'>{UserName} </h4>
						<h4 id='logoutBar_logout'>Log Out</h4>
					</div>
				</div>
			</div>
		);
	}
}

export default LogoutBar;

