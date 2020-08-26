import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Appbar } from 'react-native-paper';

import { useAccount } from '../common/hooks/useAccount';

import Home from '../common/components/Home';
import Account from '../common/components/Account';

export default function App() {
	const [removeData, generateAccount, account] = useAccount(null);
	let title = !account ? 'Welcome' : 'Account';
	let view = !account ? (
		<Home generateAccount={generateAccount} />
	) : (
		<Account account={account} removeData={removeData} />
	);
	return (
		<View style={styles.container}>
			<Appbar.Header>
				<Appbar.Action icon="menu" onPress={() => console.log('pressed')} />
				<Appbar.Content title={title} />
			</Appbar.Header>
			<View style={styles.container}>{view}</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		color: '#000000',
	},
});
