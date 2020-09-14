import React from 'react';
import { Button } from 'react-native-paper';
import { View, TextInput, StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';

import NavBar from '../components/NavBar';
import ImportPrivate from '../components/ImportPrivate';

export default function ImportPrivateScreen({ importPrivate, navigation }) {
	const backButton = (
		<Appbar.BackAction onPress={() => navigation.navigate('Welcome')} />
	);
	return (
		<View>
			<NavBar title="Import Account" backButton={backButton} />
			<ImportPrivate importPrivate={importPrivate} />
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
