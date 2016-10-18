import React, { Component } from "react";
import "./CareerPage.css";
import LogoutBar from "../../LogoutBar/LogoutBar.jsx";
class CareerPage extends Component {

	render() {

		return (
		
			<div className="careerBackground">
				<div className="row remove-all-margin-padding">
					<div className="col-md-7 text-center remove-all-margin-padding">
						<div id="aquirementsDiv" className="row remove-all-margin-padding">
							<h3 id="aquirementsTitle">I HAVE AQUIRED ONE OF THESE:</h3>
							<ul>
								<li className="careerBullets">Full-time paid position with a new employer</li>
								<li className="careerBullets">Promotion to a higher paying position at current employer</li>
								<li className="careerBullets">Full-time contract work for a minimum of one month</li>
								<li className="careerBullets">Freelancing for equivalent of full-time, defined as a minimum of 32 hours per week</li>
								<li className="careerBullets">Paid internships or apprenticeships that either offer full-time work or the opportunity for full-time positions at the conclusion of the internship/ apprenticeship period</li>
							</ul>
						</div>
						<div className="radioButtons">
							<label className="radio-inline yesNo"><input type="radio" name="optradio"/> Yes</label>
				 			<label className="radio-inline yesNo"><input type="radio" name="optradio"/> No</label>
						</div>
						<div id="careerUrlDiv" className="row remove-all-margin-padding">
							<div className="thumbnail thumbnailDiv">
							    <img id="linkedin" src="/assets/images/linkedin.png" alt="linkedin"/>
							    <div className="caption">
							    	<h4 className="careerUrlCaption">Linkedin</h4>
						      	</div>
					    	</div>

					    	<div className="thumbnail thumbnailDiv">
							    <img id="github" src="/assets/images/github.png" alt="github"/>
							    <div className="caption">
							    	<h4 className="careerUrlCaption">Github</h4>
						      	</div>
					    	</div>

					    	<div className="thumbnail thumbnailDiv">
							    <img id="stackOverflow" src="/assets/images/stackoverflow.png" alt="stackOverflow"/>
							    <div className="caption">
							    	<h4 className="careerUrlCaption">Stack Overflow</h4>
						      	</div>
					    	</div>

					    	<div className="thumbnail thumbnailDiv">
							    <img id="resume" src="/assets/images/resume.png" alt="resume"/>
							    <div className="caption">
							    	<h4 className="careerUrlCaption">Resume</h4>
						      	</div>
					    	</div>

					    	<div className="thumbnail thumbnailDiv">
							    <img id="portfolio" src="/assets/images/portfolio.png" alt="portfolio"/>
							    <div className="caption">
							    	<h4 className="careerUrlCaption">Portfolio</h4>
						      	</div>
					    	</div>
						</div>
					</div>

					
					<div id="bioContainer" className="col-md-5">
						<div id="BioDiv">
							<div id="profilePic">
	  							<img id="profileImage" src="/assets/images/profilePic.png" alt="profilePic"/>
							</div>
					  		
					  		<form>
						    	<div className="form-group">
						      		<textarea className="form-control" rows="10" id="bioForm" placeholder="Bio"></textarea>
						      		<div className="buttonDiv">
						      			<button className="bioButton">Save</button>
					      			</div>
						    	</div>
						 	</form>
						</div>
					</div>
				</div>
			</div>
				
		);
	}
}

export default CareerPage;

// <input type="text" className="form-control" id="linkedin" placeholder="Linkedin URL" />
// 					        <button className="careerUrlButton">Save</button>
// <h2 id="bioTitle">
// 	  							<img id="bioPencil" src="/assets/images/pencil.png" alt="pencil"/>
// 	  							
// 							</h2>
