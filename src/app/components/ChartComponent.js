import React from 'react';
import { AreaChart, Grid } from 'react-native-svg-charts';
import * as shape from 'd3-shape';

export default function ChartComponent({}) {
	const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80];
	return (
		<>
			<AreaChart
				style={{ height: 200 }}
				data={data}
				contentInset={{ top: 30, bottom: 30 }}
				curve={shape.curveNatural}
				svg={{ fill: '#13d777' }}>
				<Grid />
			</AreaChart>
		</>
	);
}
