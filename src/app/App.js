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
	privateToAccount,
	encryptAccount,
	decryptAccount,
} from '../common/service/ethService';

import { useAccount } from '../common/hooks/useAccount';

export default function App() {
	const [removeData, generateAccount, account] = useAccount(null);

	if (!account) {
		return (
			<View style={styles.container}>
				<Button onPress={generateAccount} title="Create New Account" />
				<Button onPress={generateAccount} title="Import an Account" />
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
