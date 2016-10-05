import React, { Component } from "react";
import {Grid, Row, Col} from "react-bootstrap";
import styles from "./Panel.css";



class Panel extends Component {

	render() {
		const { panelId, img, name } = this.props;
	
		return (
				<Col sm={2} className="remove-all-margin-padding">
					<div id={panelId} className={styles.panelDiv}>
						<div className={styles.imageWrapper}>
							<img src={img} alt="icon" className={"img-responsive " + styles.panelImg}/>
							<h5 className="caption">{name}</h5>
						</div>
					</div>
				</Col>

		)
	}
}

export default Panel;