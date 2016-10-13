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

					
						<div class="dropdown">
						  <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">	<li><NavBarLink name="Feedback" currentLoc={location.pathname} img="/assets/images/feedback_nav.png" navLink="/feedback"/></li> 
						  <span className="caret"></span></button>
						  <ul className="dropdown-menu">
						    <li><a href="#">HTML</a></li>
						    <li><a href="#">CSS</a></li>
						    <li><a href="#">JavaScript</a></li>
						  </ul>
						</div>


						<li><NavBarLink name="Career" currentLoc={location.pathname} img="assets/images/career_nav.png" navLink="/career"/></li> 



					
					</ul>
				</div>
			</div>
			
		);
	}
})

export default Navbar;

