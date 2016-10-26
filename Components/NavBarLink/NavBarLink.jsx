import React, { Component } from "react";
import "./NavBarLink.css";



class NavBarLink extends Component {

	render() {

		const { name, img, navLink, currentLoc } = this.props;
		var pageStatus;
		if (currentLoc === navLink) {
			var pageStatus = 'activePage'
		} else {
			var pageStatus = 'inactivePage'
		}
		return (
			<a id='hover' href={'#' + navLink}>
				<div className={"NavBarLink_linkDiv " + pageStatus}>
					<div className="NavBarLink_imageDiv ">
						<img src={img} alt="icon" className="img-responsive hvr-grow"/>
						<h3 className="NavBarLink_linkText">{name}</h3>
					</div>
				</div>
			</a>
		)
	}
}

export default NavBarLink;