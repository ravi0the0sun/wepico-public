import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

export default function TransactionBlock({ showBlock, blockInfo }) {
	if (!showBlock) {
		return <></>;
	}

	return (
		<View>
			{blockInfo ? (
				<View style={styles.text}>
					{console.log(blockInfo)}
					<Text>BlockHash: {blockInfo.blockHash}</Text>
					<Text>BlockNumber: {blockInfo.blockNumber}</Text>
					<Text>TransactionHash: {blockInfo.transactionHash}</Text>
					<Text>From: {blockInfo.from}</Text>
					<Text>To: {blockInfo.to}</Text>
					<Text>Status: {JSON.stringify(blockInfo.status)}</Text>
				</View>
			) : (
				<ActivityIndicator animating={true} />
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	text: {},
});
