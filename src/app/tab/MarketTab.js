import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Appbar, Button } from 'react-native-paper';
import CoinGecko from 'coingecko-api';

import NavBar from '../components/NavBar';

export default function MarketTab({ navigation }) {
	const CoinGeckoClient = new CoinGecko();
	async function ping() {
		console.log(await CoinGeckoClient.ping());
	}
	return (
		<View>
			<NavBar title="market" sub={true} />
			<Button onPress={() => ping()}>ping</Button>
		</View>
	);
}
