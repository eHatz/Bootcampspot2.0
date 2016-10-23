import React, { Component } from "react";
import "./MenuButtons.css";




class MenuButtons extends Component{
	render(){
		const { feedback, absence, tutor } = this.props;
		return(

			<div>
				<ul className="nav nav-pills">
				  <li className={'menuButtons ' + feedback}><a data-toggle="pill" href="#/feedback">Feedback Form</a></li>
				  <li className={'menuButtons ' + absence}><a data-toggle="pill" href="#/absenceRequest">Absence Request</a></li>
				  <li className={'menuButtons ' + tutor}><a data-toggle="pill" href="#/tutorRequest">Tutor Request</a></li>
				</ul>

				<div className="tab-content">
				  <div id="home" className="tab-pane fade in active">
				
				
				  </div>
				  <div id="menu1" className="tab-pane fade">
				  
				 
				  </div>
				  <div id="menu2" className="tab-pane fade">
				 
				  
				  </div>
				</div>
			</div>

			)
	}

}

export default MenuButtons;