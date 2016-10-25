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
			this.setState({announcementList: response.announcements});
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
						channelList = {this.state.channelList}
						getAnnouncements = {this.getAnnouncements}
						getSlackChannels = {this.getSlackChannels}
					/>
				) : (
					null
				)}
				
				<div className='wholeTable'>
					<TableRow 

						columnCount ={[
							{type: 'Header', value: 'ANNOUNCEMENTS'},
						]}
						pageName = 'announcementsPage'

					/>

					{this.state.announcementList.map((item, index) =>
						<div key= {index} className='row remove-all-margin-padding'>
							<div className = "announcementsContent">
								<p className='announceTitle'>{item.Title + ":"}</p>
								<p className='announceDate'>{item.createdAt.split('T')[0]}</p>
								<p className='announceMessage'>{item.Content}</p>
							</div>
						</div>
					)}
				</div>
			</div>

		);
	}
}

export default AnnouncementsPage;