import React, { Component } from "react";
import "./CareerPage.css";
import LogoutBar from "../../LogoutBar/LogoutBar.jsx";
class CareerPage extends Component {

	render() {

		return (
		
			<div className="careerBackground">
				<div className="row">
					<div className="col-sm-7">
						<div className="row">
							<h3 id="aquirementsTitle">I HAVE AQUIRED ONE OF THESE:</h3>
							<ul>
								<li className="careerBullets">Full-time paid position with a new employer</li>
								<li className="careerBullets">Promotion to a higher paying position at current employer</li>
								<li className="careerBullets">Full-time contract work for a minimum of one month</li>
								<li className="careerBullets">Freelancing for equivalent of full-time, defined as a minimum of 32 hours per week</li>
								<li className="careerBullets">Paid internships or apprenticeships that either offer full-time work or the opportunity for full-time positions at the conclusion of the internship/ apprenticeship period</li>
							</ul>
						</div>
						
						<div className="row">
							<div class="thumbnail">
					      <img id="linkedin" src="/assets/images/linkedin.png" alt="linkedin"/>
					      <div class="caption">
					        <h4 className="careerUrlCaption">Linkedin</h4>
					      </div>
					    </div>
						</div>
					</div>

					<div className="col-sm-5">
						<div id="bioDiv">
							<h2 id="bioTitle">
  							<img id="bioPencil" src="/assets/images/pencil.png" alt="pencil"/>
  							Bio:
							</h2>
				  		<form>
					    	<div className="form-group">
					      		<textarea className="form-control" rows="10" id="bioForm"></textarea>
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
