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

import AsyncStorage, {
	useAsyncStorage,
} from '@react-native-community/async-storage';

import {
	createAccount,
	privateToWallet,
	currentBlock,
} from '../common/service/ethService';

export default function App() {
	const [wallet, setWallet] = useState([]);
	const [account, setAccount] = useState(null);
	const { setItem, getItem } = useAsyncStorage('@p_key');

	async function generateWallet() {
		try {
			const acc = createAccount();
			await setItem(acc.privateKey);
			setAccount(acc);
		} catch (err) {
			console.log(err);
		}
	}

	async function getter() {
		try {
			const pk = await getItem();
			if (pk) {
				const acc = privateToWallet(pk);
				setAccount(acc);
			}
		} catch (err) {
			console.log(err);
		}
	}

	async function removeData() {
		setAccount(null);
		try {
			await AsyncStorage.removeItem('@p_key');
			setAccount(null);
		} catch (err) {
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
				<Button onPress={removeData} title="Delete Account" />
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
