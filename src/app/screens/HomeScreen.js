import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';

import NavBar from '../components/NavBar';
import QRCodeScreen from './QRCodeScreen';

const Stack = createStackNavigator();

function WalletScreen({ account, navigation }) {
	const { address } = account;
	const action = (
		<Appbar.Action
			icon="qrcode"
			onPress={() => navigation.navigate('Recive', { address: address })}
		/>
	);
	return (
		<View>
			<NavBar title="wallet" sub={true} action={action} />
			<View>
				<Text>Wallet!</Text>
				<Text>{account.address}</Text>
				<Text>{account.privateKey}</Text>
			</View>
		</View>
	);
}

export default function HomeScreen({ account }) {
	return (
		<Stack.Navigator initialRouteName="Home" headerMode="none">
			<Stack.Screen name="Home">
				{(props) => <WalletScreen {...props} account={account} />}
			</Stack.Screen>
			<Stack.Screen name="Recive" component={QRCodeScreen} />
		</Stack.Navigator>
	);
}
