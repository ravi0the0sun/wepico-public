import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import NavBar from '../components/NavBar';

export default function HomeScreen() {
	return (
		<View>
			<NavBar title="wallet" />
			<View style={style.container}>
				<Text style={style.container}>Wallet!</Text>
			</View>
		</View>
	);
}

const style = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		alignItems: 'center',
	},
});
