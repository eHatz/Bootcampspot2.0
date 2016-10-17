import React, { Component } from "react";
import "./MenuButtons.css";




class MenuButtons extends Component{
	render(){
		const { feedback, absence, tutor } = this.props;
		return(

			<div className="container">
				<ul className="nav nav-pills">
				  <li className={feedback}><a data-toggle="pill" href="#/feedback">Feedback Form</a></li>
				  <li className={absence}><a data-toggle="pill" href="#/absenceRequest">Absence Request</a></li>
				  <li className={tutor}><a data-toggle="pill" href="#/tutorRequest">Tutor Request</a></li>
				</ul>

				<div className="tab-content">
				  <div id="home" className="tab-pane fade in active">
				
				    <p>Some content.</p>
				  </div>
				  <div id="menu1" className="tab-pane fade">
				  
				    <p>Some content in menu 1.</p>
				  </div>
				  <div id="menu2" className="tab-pane fade">
				 
				    <p>Some content in menu 2.</p>
				  </div>
				</div>
			</div>

			)
	}

}

export default MenuButtons;