/** @format */

import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';

import List from '@material-ui/core/List';

import IconDashboard from '@material-ui/icons/Dashboard';
import IconShoppingCart from '@material-ui/icons/ShoppingCart';
import IconPeople from '@material-ui/icons/People';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import IconBarChart from '@material-ui/icons/BarChart';
import IconLibraryBooks from '@material-ui/icons/LibraryBooks';
import AppMenuItem from './AppMenuItem';

const appMenuItems = [
	{
		name: 'Dashboard',
		link: '/',
		Icon: IconDashboard,
	},
	{
		name: 'Orders',
		link: '/Page2',
		Icon: IconShoppingCart,
	},
	{
		name: 'Customers',
		link: '/Page3',
		Icon: IconPeople,
		items: [
			{
				name: 'Cust - 1',
				link: '/Page4',
				Icon: GroupAddIcon,
			},
			{
				name: 'Cust - 2',
				link: '/Page2',
				Icon: GroupAddIcon,
			},
		],
	},
	{
		name: 'Reports',
		link: '/Page4',
		Icon: IconBarChart,
	},
	{
		name: 'Nested Pages',
		link: '/Page5',
		Icon: IconLibraryBooks,
		items: [
			{
				name: 'Level 2',
				link: '/Page5',
				Icon: IconLibraryBooks,
			},
			{
				name: 'Level 2',
				items: [
					{
						name: 'Level 3',
					},
					{
						name: 'Level 3',
					},
				],
			},
		],
	},
];

const AppMenu = () => {
	const classes = useStyles();

	return (
		<List component='nav' className={classes.appMenu} disablePadding>
			{appMenuItems.map((item, index) => (
				<AppMenuItem {...item} key={index} />
			))}
		</List>
	);
};

const drawerWidth = 240;

const useStyles = makeStyles((theme) =>
	createStyles({
		appMenu: {
			width: '100%',
		},
		navList: {
			width: drawerWidth,
		},
		menuItem: {
			width: drawerWidth,
		},
		menuItemIcon: {
			color: '#97c05c',
		},
	})
);

export default AppMenu;
