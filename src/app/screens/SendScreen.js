import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Appbar, Button } from 'react-native-paper';

import NavBar from '../components/NavBar';
import Transaction from '../components/Transaction';

export default function SendScreen({ route, navigation }) {
	const { privateKey } = route.params;

	return (
		<View>
			<NavBar
				navigation={navigation}
				title="Send Eth"
				sub={true}
				action={() => navigation.navigate('Home')}
				icon={'close-circle-outline'}
			/>
			<Transaction
				privateKey={privateKey}
				navigation={navigation}
				route={route}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	bgColor: {
		backgroundColor: '#101116',
	},
});
