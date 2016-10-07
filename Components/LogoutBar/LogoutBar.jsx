import React, { Component } from "react";
import { Button } from "react-bootstrap"; //Add to new LogoutBar
import "./LogoutBar.css";

class LogoutBar extends Component {

	render() {
		const { UserName, toggleSidebar } = this.props;	//Add toogleSidebar to destructured props 

		return (
			<div className="row">
				<div id='logoutBar' className='col-md-12'> 

					<div id='logoutBar_logo' className='col-sm-3'>
						<Button bsStyle="danger" onClick={toggleSidebar} className="LogoutBar_button">=</Button>{/*Added burger button*/}
						<img id='logoImg' src='/assets/images/logo2.png'/>
					</div>

					<div className='col-sm-9'>
						<div id='logoutBar_textDiv'>
							<h4 id='logoutBar_username'>{UserName} </h4>
							<h4 id='logoutBar_logout'>Log Out</h4>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default LogoutBar;

