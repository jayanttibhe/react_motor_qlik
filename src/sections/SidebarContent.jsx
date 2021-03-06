/** @format */

import React from 'react';
import { Box, Sidebar, Filter } from '@motor-js/core';
import styled from 'styled-components';
import { Filter as styledFilter } from '@styled-icons/ionicons-solid';

const FilterIcon = styled(styledFilter)`
	color: black;
	padding: 0px 10px 0px 5px;
`;

const SidebarContent = (props) => {
	const toggle = () => {
		console.log('toggle');
		props.onClick();
	};

	return (
		<Sidebar
			width='18%'
			collapsable
			direction='column'
			padding='15px 12px'
			isOpen={props.isOpen}
			backgroundColor='altGray1'
			justifyContent='top'
			border={{ color: 'brand' }}>
			<Box direction='column' overflow='visible'>
				<Box
					gridArea='header'
					// backgroundColor="brand"
					//		border='bottom'
					border={{ side: 'bottom', color: 'brand' }}
					padding='0px 0px 10px 0px'
					direction='row'
					align='center'
					//	padding='12px'
					size='large'
					overflow='hidden'>
					<FilterIcon onClick={toggle} size={25} />
					Filters
				</Box>
				<Box direction='column' padding='0px 0px 0px 30px' overflow='visible'>
					{/** FILTERS */}
					<Filter label='Region' dimension={['Region Name']} />
					<Filter label='Sales Rep' dimension={['Sales Rep Name']} />
					<Filter label='Sales Mgr' dimension={['Regional Sales Mgr Name']} />
					<Filter label='Product Type Desc' dimension={['Product Type Desc']} />
					<Filter label='Product' dimension={['Product Type']} />
				</Box>
			</Box>
		</Sidebar>
	);
};

export default SidebarContent;
