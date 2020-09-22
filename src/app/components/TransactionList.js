import React from 'react';
import { View, Text, FlatList, SafeAreaView } from 'react-native';
import { List } from 'react-native-paper';
import { weiToEth } from '../../common/service/ethService';

const renderItem = ({ item }) => {
	const { blockNumber, timeStamp, hash, from, to, value } = item;
	const time = new Date(Number(timeStamp));
	const eth = weiToEth(value);
	return (
		<View>
			<Text>Block Number: {blockNumber}</Text>
			<Text>Time: {time.toString()}</Text>
			<Text>From: {from}</Text>
			<Text>To: {to}</Text>
			<Text>Hash: {hash}</Text>
			<Text>Eth: {eth}eth</Text>
		</View>
	);
};

export default function TransactionList({
	transactionList,
	pullToRefresh,
	refreshing,
}) {
	if (!Array.isArray(transactionList)) {
		return <Text>No Tansaction History</Text>;
	}
	function mapping(data, key) {
		return [...new Map(data.map((x) => [key(x), x])).values()];
	}
	const mappedList = mapping(transactionList, (it) => it.hash);
	return (
		<View>
			<SafeAreaView>
				<FlatList
					data={mappedList}
					renderItem={renderItem}
					keyExtractor={(item) => item.hash}
					refreshing={refreshing}
					onRefresh={() => pullToRefresh()}
				/>
			</SafeAreaView>
		</View>
	);
}
