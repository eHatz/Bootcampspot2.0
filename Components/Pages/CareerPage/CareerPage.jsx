import React, { Component } from "react";
import "./CareerPage.css";
import LogoutBar from "../../LogoutBar/LogoutBar.jsx";
import InputBox from '../../SocialLink/InputBox.jsx';
import SocialLink from '../../SocialLink/SocialLink.jsx';

class CareerPage extends Component {

	constructor(props){
		super(props);
// state holds boolean for showing text box and current link.
		this.state= {
			showInputBox: false,
			currentLink: "",
			textBoxValue: ""
		}
		// ensures proper context of this when fucntion is called in child componenent
		this.setCurrent= this.setCurrent.bind(this);
		this.settextBoxValue = this.settextBoxValue.bind(this);

	}
// uses an event handler. stes the current lionk value and switches the boolean.
	setCurrent(value){
		this.setState(
			{
				currentLink: value,
				showInputBox: !this.state.showInputBox
			}
		)
	}
	settextBoxValue(event) {
		let newValue = event.target.value;
		this.setState({
			textBoxValue: newValue
		})
	}
	
	render() {
		let showInput;
		const { urlName } = this.props;
		const linksArray = [
			{value: 'Linkedin Url', img: '/assets/images/linkedin.png'},
			{value: 'Github Url', img: '/assets/images/github.png'},
		 	{value: 'Stack Overflow Url' , img: '/assets/images/stackoverflow.png'},
		 	{value: 'Resume Url', img: '/assets/images/resume.png'},
		 	{value: 'Portfolio Url', img: '/assets/images/portfolio.png'}
		 	]
		const links = linksArray.map( (link) => {
			return <SocialLink value={link.value} img={link.img} linkClick={()=> this.setCurrent(link.value)} />
		})
		if (this.state.showInputBox) {
			showInput = <InputBox value={this.state.currentLink} currentText={this.state.textBoxValue} updateText={this.settextBoxValue}/>;
		}
		
		return (
		
			<div className="careerBackground">
				<div className="row remove-all-margin-padding">
					<div className="col-lg-7 text-center remove-all-margin-padding">
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
						{showInput}
						<div id="careerUrlDiv" className="row remove-all-margin-padding">

							{links}
						
						</div>
					</div>

					<div className="col-lg-5">
						<div id="bioContainer">
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
			</div>
				
		);
	}
}

export default CareerPage;
