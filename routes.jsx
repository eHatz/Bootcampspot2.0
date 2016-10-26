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

import AssignmentsPage from "./Components/Pages/AssignmentsPage/AssignmentsPage.jsx";

import ViewAssignment from "./Components/Pages/ViewAssignment/ViewAssignment.jsx";

import GradeAssignmentPage from "./Components/Pages/GradeAssignmentPage/GradeAssignmentPage.jsx";

import SyllabusPage from "./Components/Pages/SyllabusPage/SyllabusPage.jsx";

import FeedbackPage from "./Components/Pages/FeedbackPage/FeedbackPage.jsx";

import AnnouncementsPage from "./Components/Pages/AnnouncementsPage/AnnouncementsPage.jsx";

import AdminPage from './Components/Pages/AdminPage/AdminPage.jsx';

import AllUserInfo from './Components/Pages/AdminPage/AllUserInfo/AllUserInfo.jsx';

import Login from "./Components/reactlogin/login";

import Logout from "./Components/reactlogin/logout";

import auth from './auth';
 
import MenuButtons from "./Components/MenuButtons/MenuButtons.jsx";

import AbsenceRequest from "./Components/Pages/AbsenceRequestPage/AbsenceRequestPage.jsx";

import TutorRequest from "./Components/Pages/TutorRequestPage/TutorRequestPage.jsx";

import AbsenceInputQuest from "./Components/AbsenceInputQuest/AbsenceInputQuest.jsx";

import AbsenceRadialQuest from "./Components/AbsenceRadialQuest/AbsenceRadialQuest.jsx";



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
			<Route path="/assignments" component={AssignmentsPage} onEnter={requireAuth}/>
			<Route path="/homework/:id" component={ViewAssignment} onEnter={requireAuth}/>
			<Route path="/grading/:userId/:assignId" component={GradeAssignmentPage} onEnter={requireAuth}/>
			<Route path="/syllabus" component={SyllabusPage} onEnter={requireAuth}/>
			<Route path="/feedback" component={FeedbackPage} onEnter={requireAuth}/>
			<Route path="/announcements" component={AnnouncementsPage} onEnter={requireAuth}/>
			<Route path="/admin" component={AdminPage} onEnter={requireAuth}/>
			<Route path="/admin/user/:id" component={AllUserInfo} onEnter={requireAuth}/>
			<Route path="/absenceRequest" component={AbsenceRequest} onEnter={requireAuth}/>
			<Route path="/tutorRequest" component={TutorRequest} onEnter={requireAuth}/>
			{/*onEnter={requireAuth}*/}
		</Route>
    </Route>
	
);
