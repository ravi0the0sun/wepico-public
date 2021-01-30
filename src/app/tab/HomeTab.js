import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Appbar, Avatar } from 'react-native-paper';

import NavBar from '../components/NavBar';
import Account from '../components/Account';

import { WalletContext } from '../App';

export default function HomeTab({ navigation }) {
	const [, account] = useContext(WalletContext);
	const { address } = account;
	return (
		<>
			<NavBar
				title="wallet"
				sub={true}
				action={() => navigation.navigate('Recive', { address: address })}
				icon={'qr-code-outline'}
			/>
			<View style={styles.inner}>
				<Account account={account} navigation={navigation} />
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	inner: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
