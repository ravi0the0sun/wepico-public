import { useState, useEffect } from 'react';
import { useAsyncStorage } from '@react-native-community/async-storage';

import {
	createAccount,
	encryptAccount,
	decryptAccount,
	privateToAccount,
	getBalance,
} from '../service/ethService';

export function useAccount(privateKey) {
	const [account, setAccount] = useState(
		!privateKey ? null : privateToAccount(privateKey)
	);
	const [noAccount, setNoAccount] = useState(false);
	const { setItem, getItem, removeItem } = useAsyncStorage('@p_key');

	const generateAccount = async () => {
		setNoAccount(false);
		try {
			const acc = createAccount();
			acc.balance = await getBalance(acc.address);

			await setItem(encryptAccount(acc.privateKey));
			setAccount(acc);
		} catch (err) {
			setNoAccount(true);
			console.log(err);
		}
	};

	const accessingStore = async () => {
		setNoAccount(false);
		try {
			const encryptString = await getItem();
			if (encryptString) {
				const acc = decryptAccount(encryptString);
				acc.balance = await getBalance(acc.address);
				setAccount(acc);
			} else {
				setNoAccount(true);
			}
		} catch (err) {
			setNoAccount(true);
			console.log(err);
		}
	};

	const removeData = async () => {
		setAccount(null);
		try {
			await removeItem();
			setNoAccount(true);
			setAccount(null);
		} catch (err) {
			console.log(err);
		}
	};

	const importPrivate = async (privateKey) => {
		setNoAccount(false);
		try {
			const acc = privateToAccount(privateKey);
			await setItem(encryptAccount(acc.privateKey));
			setAccount(acc);
		} catch (err) {
			setNoAccount(true);
			console.log(err);
		}
	};

	useEffect(() => {
		accessingStore();
	}, []);
	return [removeData, generateAccount, account, noAccount];
}
