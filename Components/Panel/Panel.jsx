import React, { Component } from "react";
import {Grid, Row, Col} from "react-bootstrap";
import styles from "./Panel.css";



class Panel extends Component {

	render() {
		const { panelId, img, name } = this.props;

		return (
				<Col md={2} className="remove-all-margin-padding">
					<div id={panelId} className={styles.panelImage}>
						<img src={img} alt="icon" className="img-responsive"/>
						<h5>{name}</h5>
					</div>
				</Col>

		)
	}
}

export default Panel;