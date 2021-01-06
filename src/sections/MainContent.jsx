/** @format */

import React from 'react';
import {
	Box,
	useScreenSize,
	CurrentSelections,
	KPI,
	Bar,
	Button,
	Search,
	Line,
	Area,
} from '@motor-js/core';

const MainContent = () => {
	const { screen } = useScreenSize();

	let flexDirection = 'column';
	if (screen === 'desktop' || screen === 'largeDesktop') flexDirection = 'row';

	const boxProps = {
		backgroundColor: 'white',
		border: { color: 'brand' },
		margin: '4px',
		borderRadius: '8px',
	};

	const dynamicWidth = 'calc(50% - 10px)';
	const dynamicWidth_1 = 'calc(100% )';

	return (
		<Box padding='10px' width='100%' overflow='scroll' direction='column'>
			<CurrentSelections flex={true} minHeight='50px' width='100%' />
			<Box padding='10px' width='50%' overflow='none' direction='row'>
				<Button type='clearSelections'>Clear Selections</Button>
				<Search />
				<Button type='clearSelections'>Clear Selections</Button>
			</Box>
			<Box width='100%' direction={flexDirection}>
				<Box flex={true} height={{ min: '100px' }} {...boxProps}>
					<KPI
						label='Sales Amount'
						cols={['=Sum([Sales Amount])']}
						color={'var(--oc-yellow-9)'}
					/>
				</Box>
				<Box flex={true} height={{ min: '100px' }} {...boxProps}>
					<KPI
						label='Revenue by Product Sub Group-A'
						cols={['=Sum( [Sales Quantity]*[Sales Price]*0.3)']}
						color={'var(--oc-red-8)'}
					/>
				</Box>
				<Box flex={true} height={{ min: '100px' }} {...boxProps}>
					<KPI
						label='Revenue by Product Sub Group-B'
						cols={['=Sum( [Sales Quantity]*[Sales Price]*0.2)']}
						color={'var(--oc-lime-8)'}
					/>
				</Box>{' '}
				<Box flex={true} height={{ min: '100px' }} {...boxProps}>
					<KPI
						label='Revenue by Product Sub Grou-C'
						cols={['=Sum( [Sales Quantity]*[Sales Price]*0.9)']}
						color={'var(--oc-orange-9)'}
					/>
				</Box>{' '}
				<Box flex={true} height={{ min: '100px' }} {...boxProps}>
					<KPI
						label='Revenue by Product Sub Group-D'
						cols={['=Sum( [Sales Quantity]*[Sales Price]*1.3)']}
						color={'var(--oc-green-8)'}
					/>
				</Box>
			</Box>

			<Box width='100%' flex='grow' wrapProp={true} overflow='visble'>
				<Box
					width={dynamicWidth}
					height={{ min: '200px' }}
					{...boxProps}
					overflow='visble'></Box>
				<Box
					width={dynamicWidth}
					height={{ min: '200px' }}
					{...boxProps}
					overflow='visble'></Box>
			</Box>
			<Box width='100%' flex='grow' wrapProp={true} overflow='visble'>
				<Box
					width={'100%'}
					height={{ min: '200px' }}
					{...boxProps}
					overflow='visble'>
					<Bar
						width={dynamicWidth_1}
						height={250}
						title='Bar Chart'
						size='medium'
						//	stacked='true'
						//barSortOrder={[1, 0]}
						//sortOrder={[1, 0]}
						//	backgroundColor='gray'
						cols={[
							{ qField: '[Month]', qLabel: 'Month' },
							{
								qField: '[Product Group Desc]',
								qLabel: 'Product Group',
							},

							{ qField: '=Sum([Sales Amount])', qLabel: 'Sales Amount' },
						]}
					/>
				</Box>
				{/* <Box
					width={dynamicWidth_1}
					height={{ min: '200px' }}
					{...boxProps}
					overflow='visble'></Box>
				<Box
					width={dynamicWidth_1}
					height={{ min: '200px' }}
					{...boxProps}
					overflow='visble'></Box> */}
			</Box>
		</Box>
	);
};

export default MainContent;
