import { useState, useEffect } from 'react';

import { sendTransaction, signTransaction } from '../service/ethService';

export default function useTransactionPayload(route) {
	const [address, setAddress] = useState('');
	const [amount, setAmount] = useState('');
	const [showBlock, setShowBlock] = useState(false);
	const [blockInfo, setBlockInfo] = useState(null);

	const transferTranasaction = async privateKey => {
		try {
			return await signTransaction(address, privateKey, amount);
		} catch (err) {
			throw new Error(err.message);
		}
	};

	async function passingTransaction(rawTransaction) {
		try {
			const blockRecipt = await sendTransaction(rawTransaction);
			setBlockInfo(blockRecipt);
		} catch (err) {
			throw new Error(err.message);
		}
	}

	useEffect(() => {
		if (route?.params?.rawTransaction) {
			setAddress('');
			setAmount('');
			setShowBlock(true);
			passingTransaction(route.params.rawTransaction);
		}
	}, [route?.params?.rawTransaction]);

	return [
		address,
		setAddress,
		amount,
		setAmount,
		transferTranasaction,
		showBlock,
		blockInfo,
	];
}
