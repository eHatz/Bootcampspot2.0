import "./TutorCheckboxes.css";
import React, { Component } from "react";




class TutorCheckboxes extends Component{

	render(){
		return(

			<div>
				<div className="chkbx">
				  <label className="topic"><input type="checkbox" value=""/> Pep-talk/Advice</label>
				</div>
				<div className="chkbx">
				  <label className="topic"><input type="checkbox" value=""/> HTML Layouts (HTML,CSS)</label>
				</div>
				<div className="chkbx">
				  <label className="topic"><input type="checkbox" value=""/> Bootstrap Layouts</label>
				</div>
			  	<div className="chkbx">
				  <label className="topic"><input type="checkbox" value=""/> Javascript Fundamentals</label>
				</div>
				<div className="chkbx">
				  <label className="topic"><input type="checkbox" value=""/> Javascript Activities(Hangman)</label>
				</div>
				<div className="chkbx">
				  <label className="topic"><input type="checkbox" value=""/> jQuery/HTML Manipulation</label>
				</div>
				<div className="chkbx">
				  <label className="topic"><input type="checkbox" value=""/> Javascript AJAX</label>
				</div>
				<div className="chkbx">
				  <label className="topic"><input type="checkbox" value=""/> Firebase</label>
				</div>
				<div className="chkbx">
				  <label className="topic"><input type="checkbox" value=""/> Databases (MySQL)</label>
				</div>
				<div className="chkbx">
				  <label className="topic"><input type="checkbox" value=""/> Node</label>
				</div>
				<div className="chkbx">
				  <label className="topic"><input type="checkbox" value=""/> All of the Above</label>
				</div>
			</div>

			);
	}
}



export default TutorCheckboxes;















	
	