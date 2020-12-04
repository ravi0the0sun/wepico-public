import { useState, useEffect } from 'react';
import { useAsyncStorage } from '@react-native-community/async-storage';

import {
	createAccount,
	encryptAccount,
	decryptAccount,
	privateToAccount,
	getBalance,
} from '../service/ethService';

export function useAccount(initialValue) {
	const [account, setAccount] = useState(initialValue);
	const [isAccount, setIsAccount] = useState(false);
	const { setItem, getItem, removeItem } = useAsyncStorage('@p_key');

	const generateAccount = async () => {
		setIsAccount(false);
		try {
			const acc = createAccount();
			acc.balance = await getBalance(acc.address);
			await setItem(encryptAccount(acc.privateKey));
			setAccount(acc);
		} catch (err) {
			setIsAccount(true);
			console.log(err);
		}
	};

	const accessingStore = async () => {
		setIsAccount(false);
		try {
			const encryptString = await getItem();
			if (encryptString) {
				const acc = decryptAccount(encryptString);
				acc.balance = await getBalance(acc.address);
				setAccount(acc);
			} else {
				setIsAccount(true);
			}
		} catch (err) {
			setIsAccount(true);
			console.log(err);
		}
	};

	const removeData = async () => {
		setAccount(null);
		try {
			await removeItem();
			setIsAccount(true);
			setAccount(null);
		} catch (err) {
			console.log(err);
		}
	};

	const importPrivate = async privateKey => {
		setIsAccount(false);
		try {
			const acc = privateToAccount(privateKey);
			acc.balance = await getBalance(acc.address);
			await setItem(encryptAccount(acc.privateKey));
			setAccount(acc);
		} catch (err) {
			setIsAccount(true);
			console.log(err);
		}
	};

	useEffect(() => {
		accessingStore();
	}, []);
	return [removeData, generateAccount, importPrivate, account, isAccount];
}
