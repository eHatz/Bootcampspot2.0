import React, { Component, cloneElement } from 'react';
import {Grid, Row, Col} from "react-bootstrap";
import Sidebar from "react-sidebar";
import Navbar from "./Navbar/Navbar.jsx";
import "./Application.css";


class Application extends Component {

	//===React-Sidebar====
	constructor(props){
		super(props);

		this.state = {
			sidebarOpen: false,
			sidebarDocked: true,
		}

		this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
		this.componentWillMount = this.componentWillMount.bind(this);
		this.componentWillUnmount = this.componentWillUnmount.bind(this);
		this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
		this.sidebarOff = this.sidebarOff.bind(this);
		this.sidebarOn = this.sidebarOn.bind(this);
	}

	onSetSidebarOpen(open) {
	    this.setState({sidebarOpen: open});
	}

	sidebarOff(){
		this.setState({sidebarDocked: false})
	}

	sidebarOn(){
		this.setState({sidebarDocked: true})
	}

	//This method allows the burger button to open and close Sidebar
	toggleSidebar(){
		this.setState({sidebarDocked: !this.state.sidebarDocked});
		console.log("toggleSidebar -- ", this.state.sidebarOpen);
	}

	componentWillMount() {
		let mql = window.matchMedia(`(min-width: 768px)`);
		mql.addListener(this.mediaQueryChanged);
		this.setState({mql: mql, sidebarDocked: mql.matches});
	}

	componentWillUnmount() {
		this.state.mql.removeListener(this.mediaQueryChanged);
	}

	mediaQueryChanged() {
		this.setState({sidebarDocked: this.state.mql.matches});
	}
	//===React-Sidebar====


	render() {

		return (

			<div id="width" className="container">

				<div id="Application" className="Application_main">
					{
						cloneElement(this.props.children, {
							sidebarOff: this.sidebarOff,
							sidebarOn: this.sidebarOn
						})
					}
					
				</div>
			</div>
		)
	}
}

export default Application;






