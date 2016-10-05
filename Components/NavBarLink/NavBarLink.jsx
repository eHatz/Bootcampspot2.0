import React, { Component } from "react";
import styles from "./NavBarLink.css";



class NavBarLink extends Component {

	render() {

		const { name, img, navLink } = this.props;

		return (
				<div className={styles.linkDiv}>
					<div className={styles.imageDiv}>
						<img src={img} alt="icon" className="img-responsive"/>
					</div>
						<h5 className={styles.linkText}>{name}</h5>
					
				</div>

		)
	}
}

export default NavBarLink;