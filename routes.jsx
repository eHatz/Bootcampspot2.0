//===React Dependencies===
import React from 'react';

import { Route } from 'react-router';

//===Import Components===

//Base component, including nav bar
import Application from './Components/Application';

import LoggedIn from './Components/LoggedIn';

import HomePage from "./Components/Pages/HomePage/HomePage.jsx";

import AttendancePage from './Components/Pages/AttendancePage/AttendancePage.jsx';

import CareerPage from "./Components/Pages/CareerPage/CareerPage.jsx";

import HomeworkPage from "./Components/Pages/HomeworkPage/HomeworkPage.jsx";

import SyllabusPage from "./Components/Pages/SyllabusPage/SyllabusPage.jsx";

import FeedbackPage from "./Components/Pages/FeedbackPage/FeedbackPage.jsx";

import ProjectsPage from "./Components/Pages/ProjectsPage/ProjectsPage.jsx";

export default (
	<Route component={Application}>
		<Route path="/" component={HomePage} />
		
		<Route component={LoggedIn}>
			<Route path="/attendance" component={AttendancePage} />
			<Route path="/career" component={CareerPage} />
			<Route path="/homework" component={HomeworkPage} />
			<Route path="/syllabus" component={SyllabusPage} />
			<Route path="/feedback" component={FeedbackPage} />
			<Route path="/projects" component={ProjectsPage} />
		</Route>
	</Route>
	
);