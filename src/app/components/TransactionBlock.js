import React from 'react';
import { View, Text } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

export default function TransactionBlock({ showBlock, blockInfo }) {
	if (!showBlock) {
		return <></>;
	}

	return (
		<View>
			{blockInfo ? (
				<View>
					{console.log(blockInfo)}
					<Text>BlockHash: {blockInfo.blockHash}</Text>
					<Text>BlockNumber: {blockInfo.blockNumber}</Text>
					<Text>TransactionHash: {blockInfo.transactionHash}</Text>
					<Text>From: {blockInfo.from}</Text>
					<Text>To: {blockInfo.to}</Text>
					<Text>Status: {JSON.stringify(blockInfo.status)}</Text>
				</View>
			) : (
				<ActivityIndicator animating={true} color={'#000000'} />
			)}
		</View>
	);
}
