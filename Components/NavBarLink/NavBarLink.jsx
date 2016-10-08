import React, { Component } from "react";
import "./NavBarLink.css";



class NavBarLink extends Component {

	render() {

		const { name, img, navLink } = this.props;
		// here we are assigning prop names this.props.name etc, which will be called at a future point

		return (
				<div className="NavBarLink_linkDiv">
					<div className="NavBarLink_imageDiv">
						<a id="hover" href={navLink}>
							<img src={img} alt="icon" className="img-responsive"/>
							<h3 className="NavBarLink_linkText">{name}</h3>
						</a>
					</div>
				</div>

		)
	}
}

export default NavBarLink;