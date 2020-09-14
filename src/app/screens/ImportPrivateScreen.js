import React from 'react';
import { Button } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';

import NavBar from '../components/NavBar';

export default function ImportPrivateScreen({ generateAccount, navigation }) {
	const backButton = (
		<Appbar.BackAction onPress={() => navigation.navigate('Welcome')} />
	);
	return (
		<View>
			<NavBar title="Import Account" backButton={backButton} />
			<Button
				style={style.container}
				icon="log-in-outline"
				onPress={generateAccount}
				style={style.button}
				color="#ffffff">
				Import an Account
			</Button>
		</View>
	);
}

const style = StyleSheet.create({
	button: {
		backgroundColor: '#000000',
		color: '#ffffff',
	},
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
