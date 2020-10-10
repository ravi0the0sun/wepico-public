import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { Appbar, Button } from 'react-native-paper';

import WalletConnect from '../components/WalletConnect';
import NavBar from '../components/NavBar';

export default function ConnectScreen({ navigation }) {
	return (
		<View style={StyleSheet.absoluteFill}>
			<SafeAreaView />
			<View style={style.container}>
				<WalletConnect navigation={navigation} />
			</View>
		</View>
	);
}

const style = StyleSheet.create({
	container: {
		alignItems: 'center',
		flex: 1,
		justifyContent: 'center',
	},
});
