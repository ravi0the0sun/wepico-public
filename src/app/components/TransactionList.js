import React from 'react';
import { View, Text, FlatList, SafeAreaView } from 'react-native';
import { List } from 'react-native-paper';
import { weiToEth, toChecksumAddress } from '../../common/service/ethService';

export default function TransactionList({
	transactionList,
	pullToRefresh,
	refreshing,
	address,
}) {
	if (!Array.isArray(transactionList)) {
		return <Text>No Tansaction History</Text>;
	}

	const renderItem = ({ item }) => {
		const { blockNumber, timeStamp, hash, from, to, value } = item;
		const time = new Date(Number(timeStamp));
		const eth = weiToEth(value);
		const title = `${toChecksumAddress(from) == address ? 'Send' : 'Recived'}`;
		const icon = `${
			title === 'Send' ? 'arrow-down-circle-outline' : 'arrow-up-circle-outline'
		}`;
		return (
			<View>
				<SafeAreaView>
					<List.Item
						title={`${title} ${eth}ETH`}
						description={`${time}`}
						left={(prop) => <List.Icon {...prop} icon={icon} />}
					/>
				</SafeAreaView>
			</View>
		);
	};

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
