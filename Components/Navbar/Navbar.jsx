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
						<li className="removeBullets"><NavBarLink name="Attendance" currentLoc={location.pathname} img="/assets/images/attendance_nav.png" navLink="/attendance"/></li>
						<li className="removeBullets"><NavBarLink name="Homework" currentLoc={location.pathname} img="assets/images/homework_nav.png" navLink="/homework"/></li> 
						<li className="removeBullets"><NavBarLink name="Syllabus" currentLoc={location.pathname} img="/assets/images/syllabus_nav.png" navLink="/syllabus"/></li> 
						<li className="removeBullets"><NavBarLink name="Projects" currentLoc={location.pathname} img="assets/images/projects_nav.png" navLink="/projects"/></li>	     
					    <li className="removeBullets"><NavBarLink name="Feedback" currentLoc={location.pathname} img="/assets/images/feedback_nav.png" navLink="/feedback"/></li> 
						<li className="removeBullets"><NavBarLink name="Career" currentLoc={location.pathname} img="assets/images/career_nav.png" navLink="/career"/></li>
						<li className="removeBullets"><NavBarLink name="Admin" currentLoc={location.pathname} img="assets/images/admin_nav.png" navLink="/admin"/></li> 
					</ul>
				</div>
			</div>
			
		);
	}
})

export default Navbar;

