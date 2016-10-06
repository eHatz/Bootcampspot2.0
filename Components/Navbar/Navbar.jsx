import React, { Component } from "react";
import "./Navbar.css";
import NavBarLink from "../NavBarLink/NavBarLink.jsx"


var Navbar = React.createClass ({
	render() {

		return (
			<div className= "col-sm-3 remove-all-margin-padding">
				<div id="navBar"> {/*id={styles.navBar}*/}
					<NavBarLink name="Attendance" img="/assets/images/attendance_nav.png" navLink="#/attendance"/> 
					<NavBarLink name="Homework" img="assets/images/homework_nav.png" navLink="#/homework"/> 
					<NavBarLink name="Syllabus" img="/assets/images/syllabus_nav.png" navLink="#/syllabus"/> 
					<NavBarLink name="Projects" img="assets/images/projects_nav.png" navLink="#/projects"/> 
					<NavBarLink name="Feedback" img="/assets/images/feedback_nav.png" navLink="#/feedback"/> 
					<NavBarLink name="Career" img="assets/images/career_nav.png" navLink="#/career"/> 
				</div>
			</div>
			
		);
	}
})

export default Navbar;

// <div className = "row">
// 					<div className = "col-md-3">
// 						<div className = {styles.Navbar_title}>
// 							<h4 className = {styles.Navbar_h4}>RUTGERS UNIVERSITY</h4>
// 							<h1 className = {styles.Navbar_h1red}>BOOTCAMP</h1>
// 							<h1 className = {styles.Navbar_h1white}>SPOT</h1>
// 							<h1 className = {styles.Navbar_h1red}>2.0</h1>
// 						</div>
// 					</div>
// 					<div className = "col-md-9">
// 						<div className = {styles.Navbar_redPanel}>
// 							<p>Hi Jennine</p>
// 							<p>Logout</p>
// 						</div>
// 					</div>
// 				</div>
// 				<div className = "row">
// 					<div className = "col-md-3">
// 						<div className = {styles.Navbar_blackpanel}>
// 							<p>Attendence</p>
// 							<p>Homework</p>
// 							<p>Syllabus</p>
// 							<p>Projects</p>
// 							<p>Feedback</p>
// 							<p>Career</p>
// 						</div>
// 					</div>
// 				</div>