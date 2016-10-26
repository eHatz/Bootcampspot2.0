import React, { Component } from "react";
import "./Navbar.css";
import NavBarLink from "../NavBarLink/NavBarLink.jsx"


var Navbar = React.createClass ({
	render() {
		const { location, UserInfo } = this.props;
		return (
			<div>
				<div id="navBarDiv">
					<ul>
						{UserInfo.Role ==='Admin'? (
							<li className="removeBullets">
								<NavBarLink
									name="Admin"
									currentLoc={location.pathname}
									img="assets/images/admin_nav.png"
									navLink="/admin"
								/>
							</li>
						):(
							null
						)}
						<li className="removeBullets">
							<NavBarLink
								name="Annoucements"
								currentLoc={location.pathname}
								img="assets/images/announcements_nav.png"
								navLink="/announcements"
							/>
						</li>
						<li className="removeBullets">
							<NavBarLink
								name="Assignments"
								currentLoc={location.pathname}
								img="assets/images/assignments_nav.png"
								navLink="/assignments"
							/>
						</li>
						<li className="removeBullets">
							<NavBarLink
								name="Attendance"
								currentLoc={location.pathname}
								img="/assets/images/attendance_nav.png"
								navLink="/attendance"
							/>
						</li>
						{UserInfo.Role ==='Student' ? (
							<li className="removeBullets">
								<NavBarLink
									name="Career"
									currentLoc={location.pathname}
									img="assets/images/career_nav.png"
									navLink="/career"
								/>
							</li>
						):(
							null
						)}
						<li className="removeBullets">
					    	<NavBarLink
					    		name="Feedback"
					    		currentLoc={location.pathname}
					    		img="/assets/images/feedback_nav.png"
					    		navLink="/feedback"
					    	/>
					    </li> 
						<li className="removeBullets">
							<NavBarLink 
								name="Syllabus"
								currentLoc={location.pathname}
								img="/assets/images/syllabus_nav.png"
								navLink="/syllabus"
							/>
						</li>
					</ul>
				</div>
			</div>
			
		);
	}
})

export default Navbar;

