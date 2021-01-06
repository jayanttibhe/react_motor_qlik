/** @format */

import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import AppMenu from './AppMenu';

const SideBar = () => {
	const classes = useStyles();

	return (
		<div className={clsx('SideBar', classes.root)}>
			<CssBaseline />

			<Drawer
				variant='permanent'
				classes={{
					paper: classes.drawerPaper,
				}}>
				<Typography>I'm the Sidebar</Typography>
				<AppMenu />
			</Drawer>
			<main className={classes.content}>
				<Container maxWidth='lg' className={classes.container}>
					<Typography>I'm the content</Typography>
				</Container>
			</main>
		</div>
	);
};

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
	},
	drawerPaper: {
		position: 'relative',
		whiteSpace: 'nowrap',
		width: drawerWidth,
		paddingTop: theme.spacing(4),
		paddingBottom: theme.spacing(4),
		background: '#535454',
		color: '#fff',
	},
	content: {
		flexGrow: 1,
		height: '100vh',
		overflow: 'auto',
	},
	container: {
		paddingTop: theme.spacing(4),
		paddingBottom: theme.spacing(4),
	},
}));

export default SideBar;
