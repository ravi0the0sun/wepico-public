import React from 'react';
import { Button } from 'react-native-paper';
import { View, TextInput, StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';

import NavBar from '../components/NavBar';
import ImportPrivate from '../components/ImportPrivate';

export default function ImportPrivateScreen({ importPrivate, navigation }) {
	const backButton = (
		<Appbar.BackAction
			onPress={() => navigation.navigate('Welcome')}
			color={'#6200ee'}
		/>
	);
	return (
		<View>
			<NavBar title="Import Account" backButton={backButton} />
			<ImportPrivate importPrivate={importPrivate} />
		</View>
	);
}
