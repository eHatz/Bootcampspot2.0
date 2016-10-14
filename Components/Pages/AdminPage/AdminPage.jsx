import React, { Component } from "react";
import { browserHistory, Router, Route, Link, withRouter } from 'react-router';
import { FormGroup, FormControl, ControlLabel, Button } from "react-bootstrap";
import "./AdminPage.css";

const AdminPage = withRouter(
	React.createClass({

		componentWillMount() {
			const { UserInfo, location } = this.props;
			//child components apparently render before application components do on refresh,
			//this if statement feteches the information need for admin to stay on the page
			//RESEARCH LOAD ORDER FOR COMPONENTS/ ASK PELEG
			if (UserInfo.UserInfo.Role === undefined) {
				fetch('/login', {credentials: 'include'})
				.then((response) => response.json())
				.then((json) => {
					console.log('admin page', json)
					if (json.userData.Role !== 'Admin') {
						this.props.router.replace('/#')
					}
				})
			} else {
				if (UserInfo.UserInfo.Role !== 'Admin') {
					console.log('admin page else')
					this.props.router.replace('/#')
				}
			}
			
		},

		handleForm(event) {
			event.preventDefault();
		},

		render() {
			return (
				<div className="AdminBackground">
			 		<div className="row">
			 			<div className="col-md-6">
							<form onSubmit={this.handleForm}>
								<FormGroup controlId="formBasicText">

									<ControlLabel>Email</ControlLabel>
				      				<FormControl 
				      					componentClass="textarea" 
				      					placeholder="Message" 
				      				/>

				      				<ControlLabel>First Name</ControlLabel>
									<FormControl
										type="text"
										placeholder=""
										
									/>

									<ControlLabel>Last Name</ControlLabel>
									<FormControl
										type="text"
										placeholder=""
										
									/>

								    <Button type="submit">
								      Submit
								    </Button>

								</FormGroup>
							</form>
			 				
			 			</div>
			 		</div>				
				</div>

			)
		}
	})
)

export default AdminPage;