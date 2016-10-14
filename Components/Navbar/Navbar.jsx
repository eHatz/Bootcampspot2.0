import React, { Component } from "react";
import "./Navbar.css";
import NavBarLink from "../NavBarLink/NavBarLink.jsx"


var Navbar = React.createClass ({
	render() {
		const { location } = this.props;
		return (
			<div>
				<div id="navBarDiv">
					<ul>
						<li><NavBarLink name="Attendance" currentLoc={location.pathname} img="/assets/images/attendance_nav.png" navLink="/attendance"/></li>
						<li><NavBarLink name="Homework" currentLoc={location.pathname} img="assets/images/homework_nav.png" navLink="/homework"/></li> 
						<li><NavBarLink name="Syllabus" currentLoc={location.pathname} img="/assets/images/syllabus_nav.png" navLink="/syllabus"/></li> 
						<li><NavBarLink name="Projects" currentLoc={location.pathname} img="assets/images/projects_nav.png" navLink="/projects"/></li>
						<li>
							<div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
						  	<div className="panel panel-default">
						  
						      <h4 className="panel-title">
						        <a role="button" data-toggle="collapse" data-parent="#accordion"  aria-expanded="true" aria-controls="collapseOne">
						         
						        </a>
						      
						      </h4>
						    
						    <ul id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
						     
						      <li><NavBarLink name="Feedback" currentLoc={location.pathname} img="/assets/images/feedback_nav.png" navLink="/feedback"/></li> 
							<li><NavBarLink name="Career" currentLoc={location.pathname} img="assets/images/career_nav.png" navLink="/career"/></li> 
						      
						    </ul>
						  </div>
						</div></li>
					
					</ul>
				</div>
			</div>
			
		);
	}
})

export default Navbar;

