import React, { Component } from "react";
import "./AnnouncementsPage.css";
import TableRow from "../../Table/TableRow/TableRow.jsx";
import $ from "jquery";
import CreateAnnouncement from "./CreateAnnouncement/CreateAnnouncement.jsx";
import CreateAnnouncementTeacher from "./CreateAnnouncementTeacher/CreateAnnouncementTeacher.jsx";
import SortAnnouncements from "./SortAnnouncements/SortAnnouncements.jsx";

class AnnouncementsPage extends Component {
	constructor(props, context) {

		super(props, context);
		this.state = {
			announcementList: [],
			userRole: null,
			sectionList: [],
			channelList: []
		};
		this.getAnnouncements = this.getAnnouncements.bind(this);
		this.getSections = this.getSections.bind(this);
		this.getSlackChannels = this.getSlackChannels.bind(this);
	}
	componentWillMount() {
		const { UserInfo, UserSection} = this.props;
		this.setState({userRole: UserInfo.UserInfo.Role})
		//prevents errors from occuring if page is reloaded and state is lost
		if (UserInfo.UserInfo.Role === undefined) {

			$.ajax({
				url: '/login',
				type: "GET"
			}).then((json) => {
				this.setState({userRole: json.userData.Role})
				if (json.userData.Role !== 'Admin') {
					this.getAnnouncements(json.userSection[0].Title);
					this.getSlackChannels(json.userSection[0].Title);
				};
			});
			
		};
		// && UserSection.UserSection prevents error on reload of page
		if (UserInfo.UserInfo.Role !== 'Admin' && UserSection.UserSection) {
			this.getAnnouncements(UserSection.UserSection[0].Title);
			this.getSlackChannels(UserSection.UserSection[0].Title);
		}
		this.getSections();
	}
	getAnnouncements(sectionTitle) {
		const { UserInfo } = this.props;

		$.ajax({
			url: '/getAnnouncements',
			type: "POST",
			data: {
				sectionTitle: sectionTitle
	        }
		}).then((response) => {
			this.setState({announcementList: response});
		});

	}
	
	getSections() {
			
		$.ajax({
			url: '/admin/getSections',
			type: "POST"
		}).then((response) => {
			this.setState({sectionList: response.section});
		});
	}

	getSlackChannels(sectionTitle) {
		$.ajax({
			url: '/getSlackChannels',
			type: "POST",
			data: {
				sectionTitle: sectionTitle
	        }
		}).then((response) => {
			this.setState({channelList: response.channels});
		});
	}

	render() {
		const { UserInfo, UserSection } = this.props;
		console.log('CHANNELLL LISTT', this.state.channelList)
		return (

			<div className="announcementsBackground">
				{UserInfo.UserInfo.Role === 'Admin' ? (
					<div>
						<CreateAnnouncement
							UserInfo={UserInfo}
							UserSection={UserSection}
							sectionList= {this.state.sectionList}
							channelList = {this.state.channelList}
							getAnnouncements = {this.getAnnouncements}
							getSlackChannels = {this.getSlackChannels}
						/>
						<SortAnnouncements
							sectionList= {this.state.sectionList}
							getAnnouncements = {this.getAnnouncements}
							channelList = {this.state.channelList}
							getSlackChannels = {this.getSlackChannels}
						/>
					</div>
				) : (
					null
				)}

				{UserInfo.UserInfo.Role === 'Teacher' ? (
					<CreateAnnouncementTeacher
						UserInfo={UserInfo}
						UserSection={UserSection}
						sectionList= {this.state.sectionList}
						getAnnouncements = {this.getAnnouncements}
					/>
				) : (
					null
				)}
				
				<div className='wholeTable'>
					<TableRow 

						columnCount ={[
							{type: 'Header', value: 'TITLE'},
							{type: 'Header', value: 'DUE DATE'},
							{type: 'Header', value: 'TYPE'},
							
						]}
						pageName = 'homeworkPage'

					/>

					{this.state.announcementList.map((item, index) =>
						<TableRow
							columnCount ={[
								{type: 'Data', value: item.Title},
								{type: 'Data', value: item.DueDate.split('T')[0] + ' ' + item.DueTime},
								{type: 'Data', value: item.Type},
							]}
							pageName = 'homeworkPage'
							rowLink = {'homework/' + item.id}
							key= {index}
						/>
					)}
				</div>
			</div>

		);
	}
}

export default AnnouncementsPage;