/** @format */

import { Paper } from '@material-ui/core';
import React from 'react';
import '../App.css';
import SideBar from '../Components/SideBar/SideBar';
import Dashboard from '../Comps/Dashboard';

const Homepage = () => {
	return (
		<div>
			{/* <h1 style={{ textAlign: 'center' }}>I am on the Home of Dashboard</h1> */}
			{/* <SideBar /> */}
			<Dashboard />
		</div>
	);
};

export default Homepage;
