import React, { Component, cloneElement } from 'react';
import {Grid, Row, Col} from "react-bootstrap";
import Sidebar from "react-sidebar";
import Navbar from "./Navbar/Navbar.jsx";
import LogoutBar from "./LogoutBar/LogoutBar.jsx";
import "./LoggedIn.css";


class LoggedIn extends Component {

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

	componentWillMount() {
		let mql = window.matchMedia(`(min-width: 768px)`);
		mql.addListener(this.mediaQueryChanged);
		this.setState({mql: mql, sidebarDocked: mql.matches});
	}

	toggleSidebar(){
		this.setState({sidebarDocked: !this.state.sidebarDocked});
		console.log("toggleSidebar -- ", this.state.sidebarOpen);
	}

	componentWillUnmount() {
		this.state.mql.removeListener(this.mediaQueryChanged);
	}

	mediaQueryChanged() {
		this.setState({sidebarDocked: this.state.mql.matches});
	}
	//===React-Sidebar====


	render() {

		const styles = {
			root: {
			    position: 'absolute',
			    top: 0,
			    left: 0,
			    right: 0,
			    overflow: 'hidden',
			    bottom: 0,
			  },
			  sidebar: {
			    zIndex: 2,
			    position: 'absolute',
			    top: 0,
			    bottom: 0,
			    transition: 'transform .3s ease-out',
			    WebkitTransition: '-webkit-transform .3s ease-out',
			    willChange: 'transform',
			    overflowY: 'auto',
			  },
			  content: {
			    position: 'absolute',
			    top: 0,
			    left: 0,
			    right: 0,
			    bottom: 0,
			    overflow: 'auto',
			    transition: 'left .3s ease-out, right .3s ease-out',
			  },
			  overlay: {
			    zIndex: 1,
			    position: 'fixed',
			    top: 0,
			    left: 0,
			    right: 0,
			    bottom: 0,
			    opacity: 0,
			    visibility: 'hidden',
			    transition: 'opacity .3s ease-out',
			    backgroundColor: 'rgba(0,0,0,.3)',
			  },
			  dragHandle: {
			    zIndex: 1,
			    position: 'fixed',
			    top: 0,
			    bottom: 0,
			  },
		}

		return (
			<Sidebar 	
				sidebar={<Navbar />}
				open={this.state.sidebarOpen}
				docked={this.state.sidebarDocked}
				onSetOpen={this.onSetSidebarOpen}
				style={styles}
			>	
				<div id="width" className="container remove-all-margin-padding">
					<LogoutBar/>
					
					<div className='row'>
						<div className= "col-sm-12 remove-all-margin-padding">
							{
								cloneElement(this.props.children, {
									sidebarOff: this.sidebarOff,
									sidebarOn: this.sidebarOn,
									toggleSidebar: this.toggleSidebar
								})
							}
						</div>
					</div>
				</div>
			</Sidebar>
		)
	}
}

export default LoggedIn;






