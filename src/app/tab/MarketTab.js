import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Appbar, Button } from 'react-native-paper';

import NavBar from '../components/NavBar';

export default function MarketTab({ navigation }) {
	const CoinGeckoClient = new CoinGecko();
	async function ping() {
		console.log(await CoinGeckoClient.ping());
	}
	return (
		<>
			<NavBar title="market" sub={true} />
		</>
	);
}
