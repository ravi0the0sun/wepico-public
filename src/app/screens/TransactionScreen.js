import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Appbar, Button } from 'react-native-paper';

import NavBar from '../components/NavBar';

export default function TransactionScrren({ account, navigation }) {
	const action = (
		<Appbar.Action
			icon="arrow-redo-circle-outline"
			onPress={() => navigation.navigate('Send', { account: account })}
		/>
	);
	return (
		<View>
			<NavBar title="transaction" sub={true} action={action} />
			<View>
				<Text>Transaction!</Text>
			</View>
		</View>
	);
}
