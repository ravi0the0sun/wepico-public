import React from 'react';
import { View, Text } from 'react-native';
import { Appbar, Button } from 'react-native-paper';

import NavBar from '../components/NavBar';

export default function QRCodeScreen({ route, navigation }) {
	const { privateKey } = route.params;
	const back = (
		<Appbar.BackAction onPress={() => navigation.navigate('Home')} />
	);

	return (
		<View>
			<NavBar title="Send" backButton={back} />
			<Text>{privateKey}</Text>
		</View>
	);
}
