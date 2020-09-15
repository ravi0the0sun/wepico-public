import React from 'react';
import { View, Text } from 'react-native';
import TransactionBlock from './TransactionBlock';

export default function TransactionList({ transactionList }) {
	if (!Array.isArray(transactionList)) {
		return <Text>No Tansaction History</Text>;
	}
	return (
		<View>
			{transactionList.slice(0, 10).map((blockInfo, index) => {
				blockInfo.status = blockInfo?.isError === '0' ? true : false;
				return (
					<TransactionBlock
						blockInfo={blockInfo}
						showBlock={true}
						key={index}
					/>
				);
			})}
		</View>
	);
}
