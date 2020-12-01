import React from 'react';
import { Button } from 'react-native-paper';
import { View, TextInput, StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';

import NavBar from '../components/NavBar';
import ImportPrivate from '../components/ImportPrivate';

export default function ImportPrivateScreen({ importPrivate, navigation }) {
	
	return (
		<View>
			<NavBar title="Import Account" navigation={navigation} />
			<ImportPrivate importPrivate={importPrivate} />
		</View>
	);
}
