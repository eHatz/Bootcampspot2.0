import React, { Component } from "react";
import "./HomeworkPage.css";
import Navbar from "../../Navbar/Navbar.jsx";
import LogoutBar from "../../LogoutBar/LogoutBar.jsx";
import TableRow from "../../Table/TableRow/TableRow.jsx";


class HomeworkPage extends Component {
		constructor(props, context) {

			super(props, context);
			this.state = {
				homeworkList: [],
				userRole: 'Student'
			};
			this.userTabClick = this.userTabClick.bind(this);
			this.sectionTabClick = this.sectionTabClick.bind(this);
			this.getUsers = this.getUsers.bind(this);
			this.getSections = this.getSections.bind(this);
		}
		componentWillMount() {
			const { UserInfo, location, router } = this.props;
			this.setState({userRole: UserInfo.UserInfo.Role})
			if (UserInfo.UserInfo.Role === undefined) {
				fetch('/login', {credentials: 'include'})
				.then((response) => response.json())
				.then((json) => {
					this.setState({userRole: json.userData.Role})
				})
			} else {
				if (UserInfo.UserInfo.Role !== 'Admin') {
					router.replace('/#');
				};
			};
			//WARNINGS COMING FROM THESE 2 LINES OF CODE!!!!!
			this.getUsers('sort-nameAsc', 'all');
			this.getSections();
		}
	componentWillMount() {
		const { UserInfo } = this.props;
		console.log('Homework: ', UserInfo);
	}

	
	render() {
		return (
			{/*
			<div className="homeworkBackground">
				<div className='wholeTable'>
					<TableRow 
						columnCount ={[
							Instructions: 
							Due:
							SubmitStatus:
							Type:
							Resources:
							{type: 'Header', value: 'TITLE'},
							{type: 'Header', value: 'DUE DATE'},
							{type: 'Header', value: 'STATUS'},
							{type: 'Header', value: 'TYPE'},
						]}
						pageName = 'homeworkPage'
					/>

					{this.state.sectionList.map((item, index) =>
						<TableRow
							columnCount ={[
								{type: 'Data', value: item.Title},
								{type: 'Data', value: item.Location},
								{type: 'Data', value: item.Slack},
								{type: 'Data', value: item.StartDate + ' - ' + item.EndDate},
								{type: 'Button', value: ''},
								{type: 'Button', value: ''}
							]}
							pageName = 'homeworkPage'
							key= {index}
						/>
					)}
				</div>
			</div>
		*/}
		);
	}
}

export default HomeworkPage;