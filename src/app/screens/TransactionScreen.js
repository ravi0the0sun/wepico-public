import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ActivityIndicator, Appbar, Button } from 'react-native-paper';

import NavBar from '../components/NavBar';
import TransactionList from '../components/TransactionList';
import useTransactionReceipt from '../../common/hooks/useTransactionReceipt';

export default function TransactionScrren({ account, navigation }) {
	const [[transactionList], refreshing, pullToRefresh] = useTransactionReceipt(
		account.address
	);
	const action = (
		<Appbar.Action
			icon="arrow-redo-circle-outline"
			onPress={() =>
				navigation.navigate('Send', { privateKey: account.privateKey })
			}
		/>
	);
	return (
		<View>
			<NavBar title="transaction" sub={true} action={action} />
			<View>
				{transactionList ? (
					<TransactionList
						transactionList={transactionList}
						pullToRefresh={pullToRefresh}
						refreshing={refreshing}
						address={account.address}
					/>
				) : (
					<ActivityIndicator animating={true} color={'#000000'} />
				)}
			</View>
		</View>
	);
}
