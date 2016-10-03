import React, { Component } from "react";
import {Grid, Row, Col} from "react-bootstrap";
import styles from "./Panel.css";



class Panel extends Component {

	render() {
		const {panelId}=this.props;
		return (
				<Col md={2}>
					<div id={styles.panelId} className={styles.panelImage}>
						<img src={this.props.img} alt="icon" className="img-responsive"/>
						<span>{this.props.name}</span>
					</div>
				</Col>

		)
	}
}

export default Panel;