import React from 'react';
import { View, Text } from 'react-native';
import { Appbar, Button } from 'react-native-paper';

import NavBar from '../components/NavBar';

export default function ConfirmationScreen({ route, navigation }) {
	const { address, amount, gas, signedTransaction } = route.params;
	
	return (
		<View>
			<NavBar
				title="Confirm"
				sub={true}
				navigation={navigation}
				action={() => navigation.navigate('Send')}
				icon={'close-circle-outline'}
			/>
			<Text>TO: {address}</Text>
			<Text>AMOUNT: {amount} ETH</Text>
			<Text>GAS: {gas} Gwei</Text>
			<Button
				icon={'checkmark-circle'}
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
