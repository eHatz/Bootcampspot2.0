import React, { Component } from "react";
import "./CareerPage.css";
import LogoutBar from "../../LogoutBar/LogoutBar.jsx";
class CareerPage extends Component {

	render() {

		return (
		
			<div className="careerBackground">
				<div className="row">
					<div id="careerAquirements" className="col-md-12">
						<h3 id="aquirementsTitle">I HAVE AQUIRED ONE OF THESE:</h3>
							<ul>
								<li className="careerBullets">Full-time paid position with a new employer</li>
								<li className="careerBullets">Promotion to a higher paying position at current employer</li>
								<li className="careerBullets">Full-time contract work for a minimum of one month</li>
								<li className="careerBullets">Freelancing for equivalent of full-time, defined as a minimum of 32 hours per week</li>
								<li className="careerBullets">Paid internships or apprenticeships that either offer full-time work or the opportunity for full-time positions at the conclusion of the internship/ apprenticeship period</li>
							</ul>
					</div>
				</div>
				
				<div className="row">
					<div className="col-md-6">		
						<div id="div2">
							<h1>see it works</h1>
						</div>
					</div>
					
					<div className="col-md-6">
						<div id="div3">
							<div id="bioDiv">
	  							<h2 id="bioTitle">Bio:</h2>
						  		<form>
							    	<div class="form-group">
							      		<textarea className="form-control" rows="7" id="bioForm"></textarea>
							      		<button className="bioButton">save</button>
							    	</div>
							 	</form>
							</div>
						</div>
					</div>	
				</div>
			</div>
		);
	}
}

export default CareerPage;

