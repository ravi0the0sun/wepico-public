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

import { useAccount } from '../common/hooks/useAccount';

import Home from '../common/components/Home';
import Account from '../common/components/Account';

export default function App() {
	const [removeData, generateAccount, account] = useAccount(null);

	if (!account) {
		return (
			<View style={styles.container}>
				<Home generateAccount={generateAccount} />
			</View>
		);
	} else {
		return (
			<View style={styles.container}>
				<Account account={account} removeData={removeData} />
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
});
