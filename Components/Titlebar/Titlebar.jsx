import React, { Component } from "react";

import styles from "./Titlebar.css";

var Titlebar = React.createClass ({


	render() {

		return (
			<div>
				<div className = "row">
					<div className = "col-md-3">
						<div className = {styles.Titlebar_title}>
							<h4 className = {styles.Titlebar_h4}>RUTGERS UNIVERSITY</h4>
							<h1 className = {styles.Titlebar_h1red}>BOOTCAMP</h1>
							<h1 className = {styles.Titlebar_h1white}>SPOT</h1>
							<h1 className = {styles.Titlebar_h1red}>2.0</h1>
						</div>
					</div>
					<div className = "col-md-9">
						<div className = {styles.Titlebar_redPanel}>
							<p>Hi Jennine</p>
							<p>Logout</p>
						</div>
					</div>
				</div>
				<div className = "row">
					<div className = "col-md-3">
						<div className = {styles.Titlebar_blackpanel}>
							<p>Attendence</p>
							<p>Homework</p>
							<p>Syllabus</p>
							<p>Projects</p>
							<p>Feedback</p>
							<p>Career</p>
						</div>
					</div>
				</div>
			</div>
			
		);
	}
})

export default Titlebar;