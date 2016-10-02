//===React Dependencies===
import React from 'react';

import { Route } from 'react-router';

//===Import Components===

//Base component, including nav bar
import Application from './Components/Application';

//Sample child component
import Login from './Components/Login/Login.jsx';

//Another sample child component
import Attendance from './Components//Attendance/Attendance.jsx';

//Title Component
import Titlebar from "./Components/Titlebar/Titlebar.jsx"


export default (
	<Route component={Application}>
		<Route path="/" component={Login} />
		<Route path="Attendance" component={Attendance} />
	</Route>
);