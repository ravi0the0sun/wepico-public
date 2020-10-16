import React from 'react';
import { View, Text } from 'react-native';
import { Appbar, Button } from 'react-native-paper';

import NavBar from '../components/NavBar';

export default function ConfirmationScreen({ route, navigation }) {
	const { address, amount, gas, signedTransaction } = route.params;
	const back = (
		<Appbar.BackAction
			onPress={() => navigation.navigate('Send')}
			color={'#6200ee'}
		/>
	);
	const action = (
		<Appbar.Action
			icon="close-circle-outline"
			onPress={() => navigation.navigate('Send')}
			color={'#6200ee'}
		/>
	);
	return (
		<View>
			<NavBar title="Confirm" sub={true} backButton={back} action={action} />
			<Text>TO: {address}</Text>
			<Text>AMOUNT: {amount} ETH</Text>
			<Text>GAS: {gas} Gwei</Text>
			<Button
				icon="checkmark-circle"
				onPress={() =>
					navigation.navigate('Send', {
						rawTransaction: signedTransaction.rawTransaction,
					})
				}>
				Confirm
			</Button>
		</View>
	);
}
