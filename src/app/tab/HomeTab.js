import React from 'react';
import { View, Text } from 'react-native';
import { Appbar, Avatar } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';

import NavBar from '../components/NavBar';
import Account from '../components/Account';

export default function HomeTab({ account, navigation }) {
	const { address } = account;
	return (
		<View>
			<NavBar
				title="wallet"
				sub={true}
				action={() => navigation.navigate('Recive', { address: address })}
				icon={'qr-code-outline'}
			/>
			<View>
				<Account account={account} navigation={navigation} />
			</View>
		</View>
	);
}
