import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';

import NavBar from '../components/NavBar';
import QRCodeScreen from './QRCodeScreen';

const Stack = createStackNavigator();


function WalletScreen({ address, navigation }) {
	const action = (
		<Appbar.Action icon="qrcode" onPress={() => navigation.navigate('Recive')} />
	);
	return (
		<View>
			<NavBar title="wallet" sub={true} action={action} />
			<View style={style.container}>
				<Text style={style.container}>Wallet!</Text>
			</View>
		</View>
	);
}

export default function HomeScreen({ account }) {
	return (
		<Stack.Navigator initialRouteName="Home">
			<Stack.Screen name="Home" component={WalletScreen} />
			<Stack.Screen name="Recive" component={QRCodeScreen} />
		</Stack.Navigator>
	);
}

const style = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		alignItems: 'center',
	},
});
