import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Appbar, Button } from 'react-native-paper';

import NavBar from '../components/NavBar';
import ChartComponent from '../components/ChartComponent';

export default function MarketTab({ navigation }) {
	return (
		<>
			<NavBar title="market" sub={true} />
			<View style={{ flex: 1, justifyContent: 'center' }}>
				<ChartComponent />
			</View>
		</>
	);
}
