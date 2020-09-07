import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import NavBar from '../components/NavBar';

export default function TransactionScrren() {
	return (
		<View>
			<NavBar title="transaction" sub={true} />
			<View>
				<Text>Transaction!</Text>
			</View>
		</View>
	);
}
