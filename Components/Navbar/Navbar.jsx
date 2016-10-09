import React, { Component } from "react";
import "./Navbar.css";
import NavBarLink from "../NavBarLink/NavBarLink.jsx"


var Navbar = React.createClass ({
	render() {

		return (
			<div>
				<div id="navBarDiv">
					<ul>
						<li><NavBarLink name="Attendance" img="/assets/images/attendance_nav.png" navLink="#/attendance"/></li>
						<li><NavBarLink name="Homework" img="assets/images/homework_nav.png" navLink="#/homework"/></li> 
						<li><NavBarLink name="Syllabus" img="/assets/images/syllabus_nav.png" navLink="#/syllabus"/></li> 
						<li><NavBarLink name="Projects" img="assets/images/projects_nav.png" navLink="#/projects"/></li> 
						<li><NavBarLink name="Feedback" img="/assets/images/feedback_nav.png" navLink="#/feedback"/></li> 
						<li><NavBarLink name="Career" img="assets/images/career_nav.png" navLink="#/career"/></li> 
					</ul>
				</div>
			</div>
			
		);
	}
})

export default Navbar;

