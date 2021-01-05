import { useState, useEffect } from 'react';
import AsyncStorage, {
	useAsyncStorage,
} from '@react-native-async-storage/async-storage';

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
	// currently the useAsyncStorage is creating issues with jest so opt-out untill they fix it
	// const { setItem, getItem, removeItem } = useAsyncStorage('@p_key');

	//
	const removeItem = async () => {
		try {
			await AsyncStorage.removeItem('@p_key');
		} catch (err) {
			console.error(err);
		}
	};

	const generateAccount = async () => {
		setIsAccount(false);
		try {
			const acc = await createAccount();
			console.log('address', acc);
			acc.balance = await getBalance(acc.address);
			await AsyncStorage.setItem('@p_key', encryptAccount(acc.privateKey));
			setAccount(acc);
		} catch (err) {
			setIsAccount(true);
			console.log(err);
		}
	};

	const accessingStore = async () => {
		setIsAccount(false);
		try {
			const encryptString = await AsyncStorage.getItem('@p_key');
			console.log('encryptString', encryptString);
			if (encryptString) {
				const acc = await decryptAccount(encryptString);
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
			await AsyncStorage.setItem('@p_key', encryptAccount(acc.privateKey));
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
