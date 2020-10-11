import React from 'react';
import { View, Text } from 'react-native';
import { Appbar, Avatar } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';

import NavBar from '../components/NavBar';
import Account from '../components/Account';

export default function HomeScreen({ account, navigation }) {
	const { address } = account;
	const action = (
		<Appbar.Action
			icon="qr-code-outline"
			onPress={() => navigation.navigate('Recive', { address: address })}
			color={'#6200ee'}
		/>
	);
	return (
		<View>
			<NavBar title="wallet" sub={true} action={action} />
			<View>
				<Account account={account} navigation={navigation} />
			</View>
		</View>
	);
}
