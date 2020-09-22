import { useState, useEffect } from 'react';
import { currentBlockNumber } from '../service/ethService';
import { accountTransaction } from '../service/etherscanService';

export default function useTransactionReceipt(address) {
	const [transactionList, setTransactionList] = useState([]);
	const [blockNumber, setBlockNumber] = useState();
	const [refreshing, setRefreshing] = useState(false);

	async function getCurrentBlock() {
		setRefreshing(true);
		try {
			setBlockNumber(await currentBlockNumber());
		} catch (err) {
			throw new Error(err.message);
		}
	}

	async function transactionFetch() {
		try {
			const data = await accountTransaction(address, blockNumber);
			const { status, message, result } = data;
			if (status === '1') {
				console.log(result);
				setTransactionList([result]);
			} else if (status === '0' && message === 'No transactions found') {
				setTransactionList(message);
			} else {
				throw new Error('Request Error');
			}
			setRefreshing(false);
		} catch (err) {
			throw new Error(err.message);
		}
	}

	const pullToRefresh = () => {
		getCurrentBlock();
		transactionFetch();
	};

	useEffect(() => {
		pullToRefresh();
	}, [address]);

	return [transactionList, refreshing, pullToRefresh];
}
