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
					</div>	


					<div id='logoutBar_logo'>
						<img src='/assets/images/logo2.png'/>
					</div>

					<div id='logoutBar_textDiv'> {/*this div will wrap around the h tags and likely be floated right*/}
<<<<<<< HEAD
						<h2 id='logoutBar_username'>{UserName}</h2>
						<h2 id='logoutBar_logout'>| Log Out</h2>
=======
						<h4 id='logoutBar_username'>{UserName} </h4>
						<h4 id='logoutBar_logout'>Log Out</h4>
>>>>>>> 70a9f5a76141806d635bc7920ea7679b26eb29aa
					</div>
					
			</div>
		);
	}
}

export default LogoutBar;

