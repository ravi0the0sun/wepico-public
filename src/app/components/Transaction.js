import React, { useEffect, useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { Button, ActivityIndicator } from 'react-native-paper';
import {
	getGas,
	sendTrasaction,
	signTransaction,
} from '../../common/service/ethService';

export default function Transaction({ privateKey, navigation, route }) {
	const [gas, setGas] = useState('');
	const [address, setAddress] = useState('');
	const [amount, setAmount] = useState('');
	const [blockInfo, setBlockInfo] = useState(null);
	const [showBlock, setShowBlock] = useState(false);

	const TransactionBlock = () => {
		if (!showBlock) {
			return <></>;
		}
		return (
			<View>
				{blockInfo ? (
					<View>
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
	};

	async function checkGas() {
		setGas(await getGas());
	}

	async function passingTransaction(rawTransaction) {
		const blockRecipt = await sendTrasaction(rawTransaction);
		setBlockInfo(blockRecipt);
	}

	useEffect(() => {
		checkGas();
		if (route.params?.rawTransaction) {
			setAddress('');
			setAmount('');
			setShowBlock(true);
			passingTransaction(route.params.rawTransaction);
		}
	}, [route.params?.rawTransaction]);

	return (
		<View>
			<TextInput
				placeholder="Address"
				autoCompleteType="off"
				autoCorrect={false}
				style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
				onChangeText={(text) => setAddress(text)}
				value={address}
			/>
			<TextInput
				placeholder="0 ETH"
				autoCompleteType="off"
				autoCorrect={false}
				keyboardType="decimal-pad"
				style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
				onChangeText={(text) => setAmount(text)}
				value={amount}
			/>
			<Text>Current Gas Price</Text>
			{!gas ? (
				<ActivityIndicator animating={true} color={'#000000'} />
			) : (
				<Text>{gas} Gwei</Text>
			)}
			<Button
				color={'#ffffff'}
				icon="paper-plane"
				onPress={() =>
					signTransaction(address, privateKey, amount).then(
						(signedTransaction) =>
							navigation.navigate('Confirm', {
								address,
								gas,
								amount,
								signedTransaction,
							})
					)
				}
				style={{ backgroundColor: '#000000' }}>
				Send
			</Button>
			<TransactionBlock />
		</View>
	);
}
