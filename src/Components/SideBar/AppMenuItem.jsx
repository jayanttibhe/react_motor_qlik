/** @format */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { makeStyles, createStyles } from '@material-ui/core/styles';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Collapse from '@material-ui/core/Collapse';

import IconExpandLess from '@material-ui/icons/ExpandLess';
import IconExpandMore from '@material-ui/icons/ExpandMore';

const AppMenuItem = (props) => {
	const { name, Icon, link, items = [] } = props;
	const classes = useStyles();
	const isExpandable = items && items.length > 0;
	const [open, setOpen] = useState(false);

	const handleClick = () => {
		setOpen(!open);
	};

	const MenuItemRoot = (
		<ListItem button className={classes.menuItem} onClick={handleClick}>
			{/* Display an icon if any */}
			{!!Icon && (
				<ListItemIcon className={classes.menuItemIcon}>
					<Icon />
				</ListItemIcon>
			)}
			<Link to={link} className={classes.linkItem}>
				<ListItemText primary={name} inset={!Icon} />
			</Link>
			{/* Display the expand menu if the item has children */}
			{isExpandable && !open && <IconExpandMore />}
			{isExpandable && open && <IconExpandLess />}
		</ListItem>
	);

	const MenuItemChildren = isExpandable ? (
		<Collapse in={open} timeout='auto' unmountOnExit>
			<Divider />
			<List component='div' disablePadding>
				{items.map((item, index) => (
					<AppMenuItem {...item} key={index} />
				))}
			</List>
		</Collapse>
	) : null;

	return (
		<>
			{MenuItemRoot}
			{MenuItemChildren}
		</>
	);
};

AppMenuItem.propTypes = {
	name: PropTypes.string.isRequired,
	link: PropTypes.string,
	Icon: PropTypes.elementType,
	items: PropTypes.array,
};

const useStyles = makeStyles((theme) =>
	createStyles({
		menuItem: {},
		menuItemIcon: {
			color: '#97c05c',
		},
		linkItem: {
			color: '#f1f1f1',
			'&:hover': {
				color: '#97c05c',
			},
		},
	})
);

export default AppMenuItem;
