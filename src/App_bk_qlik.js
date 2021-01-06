/** @format */

import React from 'react';
import styled from 'styled-components';
import './App.css';
import {
	MainContent,
	SidebarContent,
	HeaderContent,
	FooterContent,
} from './sections';
import { Grid, Box, useSidebar, Search } from '@motor-js/core';
import { Filter } from '@styled-icons/ionicons-solid';

const FilterIcon = styled(Filter)`
	color: white;
	padding: 0px 30px 0px 5px;
`;

const App = () => {
	//use the Siderbar hook
	const { isOpen, toggle } = useSidebar();

	return (
		<Grid
			rows={['60px', 'auto', '30px']}
			cols={['auto']}
			areas={[['header'], ['main'], ['footer']]}
			backgroundColor='altGray1'>
			{/** HEADER */}
			<HeaderContent>
				<Box align='center' direction='row'>
					{' '}
					<FilterIcon onClick={toggle} size={25} />
					<span style={{ color: 'white', fontWeight: 'bold' }}>
						Qlik Mashup Demo{' '}
					</span>
					<Search width='400px' />
				</Box>
			</HeaderContent>

			{/** SIDEBAR */}
			<SidebarContent onClick={toggle} isOpen={isOpen} onClose={toggle} />
			{/** MAIN */}
			<Box gridArea='main'>
				<MainContent />
			</Box>
			{/** FOOTER */}
			<FooterContent>
				<span
					style={{
						color: 'white',
						fontWeight: 'bold',
						float: 'left',
						clear: 'left',
					}}>
					Mashup Demo Dashboard by Jayant Tibhe
				</span>
			</FooterContent>
		</Grid>
	);
};

export default App;
