import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import NavBar from '../components/NavBar';

export default function SettingScreen() {
	return (
		<View>
			<NavBar title="settings" sub={false} />
			<View style={style.container}>
				<Text style={style.container}>Settings!</Text>
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
