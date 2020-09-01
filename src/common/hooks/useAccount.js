import { useState, useEffect } from 'react';
import AsyncStorage, {
	useAsyncStorage,
} from '@react-native-community/async-storage';

import {
	createAccount,
	encryptAccount,
	decryptAccount,
	privateToAccount,
} from '../service/ethService';

export function useAccount(privateKey) {
	const [account, setAccount] = useState(
		!privateKey ? null : privateToAccount(privateKey)
	);
	const [noAccount, setNoAccount] = useState(false);
	const { setItem, getItem } = useAsyncStorage('@p_key');

	const generateAccount = async () => {
		try {
			const acc = createAccount();
			await setItem(encryptAccount(acc.privateKey));
			setAccount(acc);
		} catch (err) {
			console.log(err);
		}
	};

	const accessingStore = async () => {
		try {
			const encryptString = await getItem();
			if (encryptString) {
				const acc = decryptAccount(encryptString);
				setAccount(acc);
			} else {
				setNoAccount(true);
			}
		} catch (err) {
			console.log(err);
		}
	};

	const removeData = async () => {
		setAccount(null);
		try {
			await AsyncStorage.removeItem('@p_key');
			setAccount(null);
		} catch (err) {
			console.log(err);
		}
	};

	const importPrivate = async (privateKey) => {
		try {
			const acc = privateToAccount(privateKey);
			await setItem(encryptAccount(acc.privateKey));
			setAccount(acc);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		accessingStore();
	}, []);
	return [removeData, generateAccount, account];
}
