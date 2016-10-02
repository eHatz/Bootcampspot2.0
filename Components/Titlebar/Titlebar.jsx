import React, { Component } from "react";
import {Grid, Row, Col} from "react-bootstrap";
import styles from "./Titlebar.css";


class Titlebar extends Component {


	render() {

		return (
			<Row className="show-grid">
				<Col xsHidden md={2}></Col>

				<Col xs={12} md={8}>
					<h1 className={styles.Titlebar_title}>{this.props.title}</h1>
				</Col>

				<Col xsHidden md={2}></Col>
			</Row>
		);
	}
}

export default Titlebar;