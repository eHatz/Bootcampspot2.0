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

import Login from "./Components/reactlogin/login";
import Logout from "./Components/reactlogin/logout";
import auth from './auth';

function requireAuth(nextState, replace) {
  if (!auth.loggedIn()) {
    replace({
      pathname: '/',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}

export default (
    <Route component={Application}>
    	<Route path="/" component={HomePage} />
		<Route path="login" component={Login} />
		<Route path="logout" component={Logout} />


		<Route component={LoggedIn}>
			<Route path="/attendance" component={AttendancePage} onEnter={requireAuth}/>
			<Route path="/career" component={CareerPage} onEnter={requireAuth}/>
			<Route path="/homework" component={HomeworkPage} onEnter={requireAuth}/>
			<Route path="/syllabus" component={SyllabusPage} onEnter={requireAuth}/>
			<Route path="/feedback" component={FeedbackPage} onEnter={requireAuth}/>
			<Route path="/projects" component={ProjectsPage} onEnter={requireAuth}/>
		</Route>
    </Route>
	
);

 //    <Route component={Application}>
	// 	<Route path="/" component={HomePage} />
		
	// 	<Route component={LoggedIn}>
	// 		<Route path="/attendance" component={AttendancePage} />
	// 		<Route path="/career" component={CareerPage} />
	// 		<Route path="/homework" component={HomeworkPage} />
	// 		<Route path="/syllabus" component={SyllabusPage} />
	// 		<Route path="/feedback" component={FeedbackPage} />
	// 		<Route path="/projects" component={ProjectsPage} />
	// 	</Route>
	// </Route>