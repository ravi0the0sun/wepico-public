import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { ActivityIndicator, Appbar, Button } from 'react-native-paper';

import NavBar from '../components/NavBar';
import TransactionList from '../components/TransactionList';
import useTransactionReceipt from '../../common/hooks/useTransactionReceipt';

export default function TransactionTab({ account, navigation }) {
	const [[transactionList], refreshing, pullToRefresh] = useTransactionReceipt(
		account.address
	);
	return (
		<>
			<NavBar
				title="transaction"
				sub={true}
				action={() =>
					navigation.navigate('Send', { privateKey: account.privateKey })
				}
				icon={'arrow-redo-circle-outline'}
			/>
			<View>
				{transactionList ? (
					<TransactionList
						transactionList={transactionList}
						pullToRefresh={pullToRefresh}
						refreshing={refreshing}
						address={account.address}
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
