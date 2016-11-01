import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap"; //Add to new LogoutBar
import "./LogoutBar.css";
import NavBar from "../Navbar/Navbar.jsx";

class LogoutBar extends Component {

	render() {
		const { UserInfo, showModal, openModal, closeModal, location } = this.props;	//Add toogleSidebar to destructured props 

		return (
			<div id="attendanceBackground" className="row">
				<div id='logoutBar' className='col-md-12'> 
					<Modal className="modal left fade" id="myModal" show={showModal} onHide={closeModal}>
						<div  role="document">
							<div className="modal-content">
								<div className="modal-header navModal-header">
									
									<button className="modalHeaderWidth" type="button" onClick={closeModal} data-dismiss="modal" aria-label="Close">
										<img id="close" src="assets/images/close_button.png"/>
										<a href="/#">
											<img id='logoImg' src='/assets/images/logo2.png'/>
										</a>
									</button>
								</div>
								<NavBar
									location = {location}
									UserInfo= {UserInfo}
								/>
	
							</div>
						</div>
					</Modal>
					<div id='logoutBar_logo' className='col-sm-3'>
						<a href="/#">
							<img id='logoImg1' src='/assets/images/logo1.png'/>
						</a>
					</div>
 
					<div id ='logoutBar_content' className='col-sm-9'>
						<a href="/#logout">	
							<div id='logoutBar_textDiv'>
								<h4 id='logoutBar_username'>Hi {UserInfo.FirstName}</h4>
								<h4 id='logoutBar_logout'>Log Out</h4>
							</div>
						</a>
						<Button className='hideBtn' onClick={openModal}>
							<img id="hamburger" src="assets/images/hamburger.png"/>
						</Button>
					</div>
				</div>
			</div>
		);
	}
}

export default LogoutBar;

