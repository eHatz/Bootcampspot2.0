import React, { Component } from "react";
import "./CareerPage.css";
import LogoutBar from "../../LogoutBar/LogoutBar.jsx";
import InputBox from '../../SocialLink/InputBox.jsx';
import SocialLink from '../../SocialLink/SocialLink.jsx';
import $ from "jquery";

class CareerPage extends Component {

	constructor(props){
		super(props);
// state holds boolean for showing text box and current link.
		this.state= {
			showInputBox: false,
			currentLink: "",
			textBoxValue: "",
			currentPlaceholder: "",
			bio: ""

		}
		// ensures proper context of this when fucntion is called in child componenent
		this.setCurrent= this.setCurrent.bind(this);
		this.settextBoxValue = this.settextBoxValue.bind(this);
		this.SubmitCareer = this.SubmitCareer.bind(this);
		this.bioChange = this.bioChange.bind(this);

	}
// uses an event handler. stes the current lionk value and switches the boolean.
	setCurrent(value, placeholder){
		this.setState({
			currentLink: value,
			showInputBox: !this.state.showInputBox,
			currentPlaceholder: placeholder
		})
	}
	settextBoxValue(event) {
		let newValue = event.target.value;
		this.setState({
			textBoxValue: newValue
		})
	}
	clearInput(){
		this.setState({
			textBoxValue: '',
			bio: ''
		});
	}

	bioChange(event) {
		this.setState({ bio: event.target.value });
	}

	SubmitCareer(event) {
		$.ajax({
			url: '/submitCareer',
			type: "POST",
			data: {
				UserId: this.props.UserInfo.UserInfo.id,
	        	submit: this.state.textBoxValue,
	        	currentLink:this.state.currentLink,
	        	bio: this.state.bio
	        }
		})
		.then((response) => {
			
		})
		event.preventDefault();
		this.clearInput();
	}
	render() {
		let showInput;
		const { urlName } = this.props;
		const linksArray = [
			{value: 'Linkedin', placeholder: 'Linkedin Url', img: '/assets/images/linkedin.png'},
			{value: 'Github', placeholder: 'Github Url', img: '/assets/images/github.png'},
			{value: 'StackOverflow', placeholder: 'Stack Overflow Url' , img: '/assets/images/stackoverflow.png'},
			{value: 'Resume', placeholder: 'Resume Url', img: '/assets/images/resume.png'},
			{value: 'Portfolio', placeholder: 'Portfolio Url', img: '/assets/images/portfolio.png'}
		]
		const links = linksArray.map( (link, index) => {
			return <SocialLink
				key={index}
				placeholder	={link.placeholder}
				img={link.img}
				linkClick={()=> this.setCurrent(link.value, link.placeholder)}
			/>
		})
		if (this.state.showInputBox) {
			showInput = <InputBox
				value={this.state.currentPlaceholder}
				SubmitCareer={this.SubmitCareer}
				currentText={this.state.textBoxValue}
				updateText={this.settextBoxValue}
			/>;
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
								<li className="careerBullets">
									Freelancing for equivalent of full-time, 
									defined as a minimum of 32 hours per week
									</li>
								<li className="careerBullets">
									Paid internships or apprenticeships that either offer full-time work 
									or the opportunity for full-time positions at the conclusion of the 
									internship/ apprenticeship period
								</li>
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
						  		<form onSubmit={this.SubmitCareer}>
							    	<div className="form-group">
							      		<textarea
							      			className="form-control"
								      		rows="10"
								      		id="bioForm"
								      		placeholder="Bio"
								      		onChange={this.bioChange}
											value={this.state.bio}
											required
							      		>
							      		</textarea>
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
