//===React Dependencies===
import React from 'react';

import { Route } from 'react-router';

//===Import Components===

//Base component, including nav bar
import Application from './Components/Application';


//Another sample child component

import Attendance from './Components/Pages/Attendance/Attendance.jsx';

//Title Component

import HomePage from "./Components/Pages/HomePage/HomePage.jsx";

export default (
	<Route component={Application}>
		<Route path="/" component={HomePage} />
		<Route path="/attendance" component={Attendance} />
	</Route>
);