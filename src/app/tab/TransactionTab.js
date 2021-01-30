import React, { useContext } from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { ActivityIndicator, Appbar, Button } from 'react-native-paper';

import NavBar from '../components/NavBar';
import TransactionList from '../components/TransactionList';
import useTransactionReceipt from '../../common/hooks/useTransactionReceipt';

import { WalletContext } from '../App';

export default function TransactionTab({ navigation }) {
	const [, account] = useContext(WalletContext);
	const { address, privateKey } = account;
	const [[transactionList], refreshing, pullToRefresh] = useTransactionReceipt(
		address
	);

	return (
		<>
			<NavBar
				title="transaction"
				sub={true}
				action={() => navigation.navigate('Send', { privateKey: privateKey })}
				icon={'arrow-redo-circle-outline'}
			/>
			<View style={{ flex: 1 }}>
				{transactionList ? (
					<TransactionList
						transactionList={transactionList}
						pullToRefresh={pullToRefresh}
						refreshing={refreshing}
						address={address}
					/>
				) : (
					<ActivityIndicator
						animating={true}
						style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
					/>
				)}
			</View>
		</>
	);
}
