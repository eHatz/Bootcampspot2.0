import React, { Component, cloneElement } from 'react';
import {Grid, Row, Col} from "react-bootstrap";
import styles from "./Application.css";


class Application extends Component {


	render() {

		return (

			<div>

				<Grid>

					<div id="Application" className={styles.Application_main}>

						{
							cloneElement(this.props.children)
						}

					</div>
				</Grid>

			</div>
		)
	}
}

export default Application;






