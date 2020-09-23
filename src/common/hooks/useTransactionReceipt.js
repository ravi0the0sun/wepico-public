import { useState, useEffect } from 'react';
import { accountTransaction } from '../service/etherscanService';

function mapping(data, key) {
	return [...new Map(data.map((x) => [key(x), x])).values()];
}

export default function useTransactionReceipt(address) {
	const [transactionList, setTransactionList] = useState([]);
	const [refreshing, setRefreshing] = useState(false);

	async function transactionFetch() {
		setRefreshing(true);
		try {
			const data = await accountTransaction(address);
			const { status, message, result } = data;
			if (status === '1') {
				const mappedList = mapping(result, (it) => it.hash);
				setTransactionList([mappedList]);
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
		transactionFetch();
	};

	useEffect(() => {
		pullToRefresh();
	}, [address]);

	return [transactionList, refreshing, pullToRefresh];
}
