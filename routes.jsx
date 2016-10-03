//===React Dependencies===
import React from 'react';

import { Route } from 'react-router';

//===Import Components===

//Base component, including nav bar
import Application from './Components/Application';

//Sample child component
import Login from './Components/Login/Login.jsx';

//Another sample child component
<<<<<<< HEAD
import Attendance from './Components/Attendance/Attendance.jsx';
=======
// import Attendance from './Components/Attendance/Attendance.jsx';
>>>>>>> 61484bb1efaf593341c7e90189f75f02c6826066

//Title Component

import HomePage from "./Components/Pages/HomePage/HomePage.jsx";

export default (
	<Route component={Application}>
		<Route path="/" component={HomePage} />
	</Route>
);