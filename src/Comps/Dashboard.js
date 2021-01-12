/** @format */

import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import {
	red,
	grey,
	orange,
	lightBlue,
	deepPurple,
	deepOrange,
} from '@material-ui/core/colors';
import Chart from './Chart';
import Deposits from './Deposits';
import Orders from './Orders';
import Copyright from './Copyright';

import SideBar from '../Components/SideBar/SideBar';
// For Switch Theming
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
	},
	appBarSpacer: theme.mixins.toolbar,
	content: {
		flexGrow: 1,
		height: '100vh',
		overflow: 'auto',
	},
	container: {
		paddingTop: theme.spacing(2),
		paddingBottom: theme.spacing(2),
		paddingLeft: theme.spacing(0),
		paddingRight: theme.spacing(1),
	},
	paper: {
		padding: theme.spacing(2),
		display: 'flex',
		overflow: 'auto',
		flexDirection: 'column',
	},
	fixedHeight: {
		height: 240,
	},
}));

export default function Dashboard() {
	const [darkState, setDarkState] = useState(true);
	const palletType = darkState ? 'dark' : 'light';
	const mainPrimaryColor = darkState ? orange[400] : red[400];
	const mainSecondaryColor = darkState ? deepOrange[900] : red[800];
	// const mainPrimaryColor = darkState ? grey[700] : '#00695c';
	// const mainSecondaryColor = darkState ? '#373737' : '#003d33';
	const darkTheme = createMuiTheme({
		palette: {
			type: palletType,
			primary: {
				main: mainPrimaryColor,
			},
			secondary: {
				main: mainSecondaryColor,
			},
		},
	});
	const classes = useStyles();
	const handleThemeChange = () => {
		setDarkState(!darkState);
	};
	const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

	return (
		<ThemeProvider theme={darkTheme}>
			<div className={classes.root}>
				<CssBaseline />
				<SideBar handleThemeChange={handleThemeChange} />
				<main className={classes.content}>
					<div className={classes.appBarSpacer} />
					<Container maxWidth='lg' className={classes.container}>
						<Grid container spacing={1}>
							{/* Chart */}
							<Grid item xs={12} md={8} lg={9}>
								<Paper className={fixedHeightPaper}>
									<Chart />
								</Paper>
							</Grid>
							{/* Recent Deposits */}
							<Grid item xs={12} md={4} lg={3}>
								<Paper className={fixedHeightPaper}>
									<Deposits />
								</Paper>
							</Grid>
							{/* Recent Orders */}
							<Grid item xs={12}>
								<Paper className={classes.paper}>
									<Orders />
								</Paper>
							</Grid>
						</Grid>
						{/* <Box pt={4}>
							<Copyright />
						</Box> */}
					</Container>
				</main>
			</div>
		</ThemeProvider>
	);
}
