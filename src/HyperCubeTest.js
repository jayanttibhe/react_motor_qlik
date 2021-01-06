/** @format */

import React from 'react';
import { useHyperCube } from '@motor-js/core';
const cols = ['=Avg(price)'];
const qCalcCondition = undefined;
function HyperCube({ engine }) {
	const { qLayout, qData } = useHyperCube({
		engine,
		cols,
		qCalcCondition,
	});
	console.log('layout: ', qLayout);
	console.log('data', qData);
	return <div></div>;
}
export default HyperCube;
