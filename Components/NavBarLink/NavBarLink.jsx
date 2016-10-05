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
					</div>
						<h5 className={styles.linkText}>{name}</h5>
					
				</div>

		)
	}
}

export default NavBarLink;