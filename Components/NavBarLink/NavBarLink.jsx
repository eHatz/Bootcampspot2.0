import React, { Component } from "react";
import styles from "./NavBarLink.css";



class NavBarLink extends Component {

	render() {

		const { name, img, navLink } = this.props;

		return (
				<div className="col-md-4 remove-all-margin-padding">
					<div className={styles.linkDiv}>
						<img src={img} alt="icon" className="img-responsive"/>
						<h5 className="caption">{name}</h5>
					</div>
				</div>

		)
	}
}

export default NavBarLink;