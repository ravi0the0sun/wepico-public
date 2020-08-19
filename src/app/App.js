/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, { useState, useEffect } from 'react';
import {
	SafeAreaView,
	StyleSheet,
	ScrollView,
	View,
	Text,
	StatusBar,
	Button,
} from 'react-native';

import {
	Header,
	LearnMoreLinks,
	Colors,
	DebugInstructions,
	ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {
	createWallet,
	privateToWallet,
	currentBlock,
} from '../common/service/ethService';

export default function App() {
	const [walletList, setWalletList] = useState([]);
	const [wallet, setWallet] = useState(null);
	function generateWallet() {
		setWallet(createWallet());
	}
	if (!wallet) {
		return (
			<View style={styles.container}>
				<Button onPress={generateWallet} title="Create New Account" />

				<Button onPress={generateWallet} title="Import an Account" />
			</View>
		);
	} else {
		return (
			<View style={styles.container}>
				<Text>
					<Text style={styles.text}>Address: </Text>
					{wallet.address}
				</Text>
				
				<Text>
					<Text style={styles.text}>Private Key: </Text>
					{wallet.privateKey}
				</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		color: '#000000',
	},
	text: {
		fontWeight: 'bold',
	},
});
