import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap"; //Add to new LogoutBar
import "./LogoutBar.css";
import NavBar from "../NavBar/NavBar.jsx";

class LogoutBar extends Component {

	render() {
		const { UserName, showModal, openModal, closeModal } = this.props;	//Add toogleSidebar to destructured props 

		return (
			<div id="attendanceBackground" className="row">
				<div id='logoutBar' className='col-md-12'> 
					<Modal className="modal left fade" id="myModal" show={showModal} onHide={closeModal}>
						<div className="modal-dialog" role="document">
							<div className="modal-content">
								<div className="modal-header">
									
									<button className="modalHeaderWidth" type="button" onClick={closeModal} data-dismiss="modal" aria-label="Close">
										<img id="close" src="assets/images/close_button.png"/>
										<img id='logoImg' src='/assets/images/logo2.png'/>
									</button>
								</div>
								<NavBar/>
	
							</div>
						</div>
					</Modal>
					<div id='logoutBar_logo' className='col-sm-3'>
						<Button className='hideBtn' onClick={openModal}>
						<img id="hamburger" src="assets/images/hamburger.png"/>
						</Button>
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

