import React, { Component } from "react";
import styles from "./NavBarLink.css";



class NavBarLink extends Component {

	render() {

		const { name, img, navLink } = this.props;
		// here we are assigning prop names this.props.name etc, which will be called at a future point

		return (
				<div className={styles.linkDiv}>
					<div className={styles.imageDiv}>
						<img src={img} alt="icon" className="img-responsive"/>
						<h3 className={styles.navbar_linkText}>{name}</h3>
					</div>
				</div>

		)
	}
}

export default NavBarLink;