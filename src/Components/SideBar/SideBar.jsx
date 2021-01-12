/** @format */

import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import AppMenu from './AppMenu';
import HeaderBar from './HeaderBar';

export default function PersistentDrawerLeft({ handleThemeChange }) {
	const classes = useStyles();
	const theme = useTheme();
	const [open, setOpen] = React.useState(false);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	return (
		<div className={classes.root}>
			<CssBaseline />
			<HeaderBar
				open={open}
				handleDrawerOpen={handleDrawerOpen}
				handleThemeChange={handleThemeChange}
			/>
			{/* <Drawer
				className={classes.drawer}
				variant='persistent'
				anchor='left'
				open={open}
				classes={{
					paper: classes.drawerPaper,
				}}> */}
			<Drawer
				variant='permanent'
				className={clsx(classes.drawer, {
					[classes.drawerOpen]: open,
					[classes.drawerClose]: !open,
				})}
				classes={{
					paper: clsx({
						[classes.drawerOpen]: open,
						[classes.drawerClose]: !open,
						paper: classes.drawerPaper,
					}),
				}}>
				<div className={classes.drawerHeader}>
					<Typography variant='h3' style={{ leftmargin: '102px' }}>
						HSBC
					</Typography>
					<div className={classes.grow} />
					<IconButton onClick={handleDrawerClose}>
						{theme.direction === 'ltr' ? (
							<ChevronLeftIcon />
						) : (
							<ChevronRightIcon />
						)}
					</IconButton>
				</div>
				{/* <Divider /> */}
				<AppMenu />
			</Drawer>
			<main
				className={clsx(classes.content, {
					[classes.contentShift]: open,
				})}>
				<div className={classes.drawerHeader} />
				{/* <Typography paragraph>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima,
					iure? Pariatur libero exercitationem consectetur numquam quo minus
					facilis consequuntur fuga.
				</Typography>
				<Typography paragraph>
					Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
					ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
					elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse
					sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat
				</Typography> */}
			</main>
		</div>
	);
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
	grow: {
		flexGrow: 1,
	},

	root: {
		display: 'flex',
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
		whiteSpace: 'nowrap',
	},

	drawerOpen: {
		width: drawerWidth,
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
		// background: '#343a40',
		// color: '#fff',
	},
	drawerClose: {
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		overflowX: 'hidden',
		width: theme.spacing(7) + 1,
		[theme.breakpoints.up('sm')]: {
			width: theme.spacing(8) + 1,
		},
		// background: '#343a40',
		// color: '#fff',
	},
	// drawerPaper: {
	// 	width: drawerWidth,
	// 	background: '#343a40',
	// 	color: '#fff',
	// },
	drawerHeader: {
		//toolbar - named
		display: 'flex',
		alignItems: 'center',
		padding: theme.spacing(0, 1),
		// necessary for content to be below app bar
		...theme.mixins.toolbar,
		justifyContent: 'flex-end',
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(0),
		// transition: theme.transitions.create('margin', {
		// 	easing: theme.transitions.easing.sharp,
		// 	duration: theme.transitions.duration.leavingScreen,
		// }),
		// marginLeft: -drawerWidth,
	},
	// contentShift: {
	// 	transition: theme.transitions.create('margin', {
	// 		easing: theme.transitions.easing.easeOut,
	// 		duration: theme.transitions.duration.enteringScreen,
	// 	}),
	// 	marginLeft: 0,
	// },
}));
