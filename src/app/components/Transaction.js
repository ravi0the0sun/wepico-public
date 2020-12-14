import React, { useEffect, useState } from 'react';
import { View, TextInput } from 'react-native';
import { Text, Button, ActivityIndicator } from 'react-native-paper';

import useGetGas from '../../common/hooks/useGetGas';
import useTransactionPayload from '../../common/hooks/useTransactionPayload';

import TransactionBlock from '../components/TransactionBlock';

export default function Transaction({ privateKey, navigation, route }) {
	const gas = useGetGas('');
	const [
		address,
		setAddress,
		amount,
		setAmount,
		transferTranasaction,
		showBlock,
		blockInfo,
	] = useTransactionPayload(route);

	async function sendEventButton() {
		try {
			const signedTransaction = await transferTranasaction(privateKey);
			navigation.navigate('Confirm', {
				address,
				gas,
				amount,
				signedTransaction,
			});
		} catch (err) {
			throw new Error(err.message);
		}
	}

	return (
		<View>
			<TextInput
				placeholder="Address"
				autoCompleteType="off"
				autoCorrect={false}
				style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
				onChangeText={text => setAddress(text)}
				value={address}
			/>
			<TextInput
				placeholder="0 ETH"
				autoCompleteType="off"
				autoCorrect={false}
				keyboardType="decimal-pad"
				style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
				onChangeText={text => setAmount(text)}
				value={amount}
			/>
			<Text>Current Gas Price</Text>
			{!gas ? <ActivityIndicator animating={true} /> : <Text>{gas} Gwei</Text>}
			<Button icon={'paper-plane'} onPress={() => sendEventButton()}>
				Send
			</Button>
			<TransactionBlock showBlock={showBlock} blockInfo={blockInfo} />
		</View>
	);
}
