import React, { Component, cloneElement } from 'react';
import {Grid, Row, Col} from "react-bootstrap";
import Radium from "radium";
import Navbar from "./Navbar";
 
/*
//Component for each individual app
import PortfolioApp from './Components/PortfolioApp';
*/


class Application extends Component {


	render() {

		return (

			<div>

				<Navbar style={styles.nav}/>

				<Grid>

					<div className="Application show-grid" style={styles.main}>

						{
							cloneElement(this.props.children)
						}

					</div>
				</Grid>

			</div>
		)
	}
}

export default Radium(Application);