import React from 'react';
import { View, Text } from 'react-native';
import { Appbar, Button } from 'react-native-paper';

import NavBar from '../components/NavBar';
import Transaction from '../components/Transaction';

export default function SendScreen({ route, navigation }) {
	const { privateKey } = route.params;
	const back = (
		<Appbar.BackAction onPress={() => navigation.navigate('Home')} />
	);

	return (
		<View>
			<NavBar title="Send" sub={true} backButton={back} />
			<Transaction privateKey={privateKey} navigation={navigation} route={route} />
		</View>
	);
}
