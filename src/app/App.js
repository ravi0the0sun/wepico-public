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

import { useAsyncStorage } from '@react-native-community/async-storage';

import {
	createAccount,
	privateToWallet,
	currentBlock,
} from '../common/service/ethService';

export default function App() {
	const [wallet, setWallet] = useState([]);
	const [account, setAccount] = useState(null);
	const [error, setError] = useState(null);
	const { setItem, getItem } = useAsyncStorage('@p_key');

	async function generateWallet() {
		try {
			const acc = createAccount();
			await setItem(acc.privateKey);
			if (!(await getItem())) {
				throw new Error("Cannot Access Device's Storage");
			}
			setAccount(acc);
		} catch (err) {
			console.log(err);
		}
	}

	async function getter() {
		try {
			const pk = await getItem();
			if (!pk) {
				throw new Error("Cannot Access Device's Storage");
			}
			const acc = privateToWallet(pk);
			setAccount(acc);
		} catch (err) {
			setError(err.message);
			console.log(err);
		}
	}

	useEffect(() => {
		getter();
	}, []);

	if (!account) {
		return (
			<View style={styles.container}>
				<Button onPress={generateWallet} title="Create New Account" />

				<Button onPress={generateWallet} title="Import an Account" />
			</View>
		);
	} else if (error) {
		return (
			<View style={styles.container}>
				<Text>{error}</Text>
			</View>
		);
	} else {
		return (
			<View style={styles.container}>
				<Text>
					<Text style={styles.text}>Address: </Text>
					{account.address}
				</Text>

				<Text>
					<Text style={styles.text}>Private Key: </Text>
					{account.privateKey}
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
