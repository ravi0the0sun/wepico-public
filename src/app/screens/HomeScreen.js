import React from 'react';
import {View, Text} from 'react-native';
import {Appbar, Avatar} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';

import NavBar from '../components/NavBar';

export default function HomeScreen({ account, navigation }) {
	const { address } = account;
	const action = (
		<Appbar.Action
			icon="qr-code-outline"
			onPress={() => navigation.navigate('Recive', { address: address })}
		/>
	);
	return (
		<View>
			<NavBar title="wallet" sub={true} action={action} />
			<View>
				<Text>Wallet!</Text>
				<Text>{account.balance} ETH</Text>
				<Text>{account.address}</Text>
				<Text>{account.privateKey}</Text>
			</View>
		</View>
	);
}
