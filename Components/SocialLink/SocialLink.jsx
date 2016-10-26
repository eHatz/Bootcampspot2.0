import React, { Component } from "react";
import "./SocialLink.css";

class SocialLink extends Component {

	render() {

		const { showStatus, linkClick, img, value } = this.props;
		return (
			<div onClick={linkClick} className="thumbnail thumbnailDiv " value={value}>
			    <img id="socialLinkImg" className="hvr-wobble-horizontal"src={img} alt={value}/>
			    <div className="caption">
			    	<h4 className="careerUrlCaption">{value}</h4>
		      	</div>

		      	
	    	</div>
		)
	}
}

export default SocialLink;

