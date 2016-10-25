import React, { Component } from "react";
import {Grid, Row, Col} from "react-bootstrap";
import "./Panel.css";



class Panel extends Component {

	render() {
		const { panelId, img, name, background, pageLink } = this.props;
	
		return (
			<a href={'#' + pageLink}>
				<Col sm={2} className="remove-all-margin-padding">

					<div id={panelId} className="Panel_panelDiv animated infinate pulse" style={{backgroundColor: background}}>
						<div className="Panel_imageWrapper">
							<img src={img} alt="icon" className="img-responsive Panel_panelImg"/>
							<h5 className="caption Panel_h5">{name}</h5>
						</div>
					</div>
				</Col>
			</a>
		)
	}
}

export default Panel;