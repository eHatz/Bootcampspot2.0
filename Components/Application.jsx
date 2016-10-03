import React, { Component, cloneElement } from 'react';
import {Grid, Row, Col} from "react-bootstrap";
import styles from "./Application.css";


class Application extends Component {


	render() {

		return (

			<div>

				<div id="width" className="container">

					<div id="Application" className={styles.Application_main}>

						{
							cloneElement(this.props.children)
						}

					</div>
				</div>

			</div>
		)
	}
}

export default Application;






