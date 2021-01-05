import Web3 from 'web3';

import {
	ALCHEMY_API_KEY,
	INFURA_API_KEY,
	ETHERSCAN_API_KEY,
	NETWORK,
	HARDFORK,
	password,
} from '../config/config';


import bip39 from 'react-native-bip39'
import { hdkey } from 'ethereumjs-wallet'

const GAS_LIMIT = 21000;

const provider = new Web3(
	new Web3.providers.HttpProvider(
		`https://eth-${NETWORK}.alchemyapi.io/v2/${ALCHEMY_API_KEY}`
	)
);

const infura_provider = new Web3(
	new Web3.providers.HttpProvider(
		`https://${NETWORK}.infura.io/v3/${INFURA_API_KEY}`
	)
);
const local_provider = new Web3(
	new Web3.providers.HttpProvider(`http://localhost:8545`)
);

function validatePrivateKey(privateKey) {
	if (!privateKey.match(/^0x[0-9A-fa-f]{64}$/)) {
		throw new Error('Invalid privateKey');
	}
}

export function validateAccount(address) {
	try {
		const checkSumAddress = provider.utils.toChecksumAddress(address);
		if (!provider.utils.isAddress(checkSumAddress)) {
			throw new Error();
		}
		return checkSumAddress;
	} catch (err) {
		throw new Error('Invalid Address');
	}
}

function validateAmount(amount) {
	try {
		return provider.utils.toWei(amount, 'ether');
	} catch (err) {
		throw new Error('Invalid amount');
	}
}

function toEther(wei) {
	return provider.utils.fromWei(wei, 'ether');
}

export async function createAccount() {
	return await provider.eth.accounts.create();
}

export async function currentBlockNumber() {
	try {
		return await provider.eth.getBlockNumber();
	} catch (err) {
		throw new Error(err.message);
	}
}

export async function generateAddressesFromSeed(count) {
	let seed = await bip39.generateMnemonic(256);
	let hdwallet = hdkey.fromMasterSeed(seed);
	let wallet_hdpath = "m/44'/60'/0'/0/";

	let accounts = [];
	for (let i = 0; i < count; i++) {
		let wallet = hdwallet.derivePath(wallet_hdpath + i).getWallet();
		let address = "0x" + wallet.getAddress().toString("hex");
		let privateKey = wallet.getPrivateKey().toString("hex");
		accounts.push({ address: address, privateKey: privateKey });
	}
	return accounts;
}

export function privateToAccount(pk) {
	const privateKey = pk.startsWith('0x') ? pk : '0x' + pk;
	validatePrivateKey(privateKey);
	return provider.eth.accounts.privateKeyToAccount(privateKey);
}

export function encryptAccount(pk) {
	return JSON.stringify(provider.eth.accounts.encrypt(pk, password));
}

export function decryptAccount(encryptString) {
	const encryptObj = JSON.parse(encryptString);
	return provider.eth.accounts.decrypt(encryptObj, password);
}

// export function createWallet() {
// 	return provider.eth.accounts.wallet.create();
// }

// export function encryptWallet(wallet) {
// 	return JSON.stringify(wallet.encrypt(password));
// }

// export function decryptWallet(keystoreString) {
// 	const keystoreArray = JSON.parse(keystoreString);
// 	return provider.eth.accounts.wallet.decrypt(keystoreArray, password);
// }

export async function getBalance(address) {
	console.log('add',address);
	try {
		const wei = await provider.eth.getBalance(address);
		console.log('b wei', wei);
		return toEther(wei);
	} catch (err) {
		console.log('ddd',err);
		throw new Error('Error getting Balance');
	}
}

export async function getGas() {
	try {
		const gas = await provider.eth.getGasPrice();
		const gwei = provider.utils.fromWei(gas, 'Gwei');
		return gwei;
	} catch (err) {
		throw new Error('Error getting the Gas Price');
	}
}

export async function signTransaction(address, privateKey, amount) {
	const checkSumAddress = validateAccount(
		address.startsWith('0x') ? address : '0x' + address
	);
	const wei = validateAmount(amount);
	validatePrivateKey(privateKey);
	try {
		return await provider.eth.accounts.signTransaction(
			{
				to: checkSumAddress,
				value: wei,
				gas: GAS_LIMIT,
				chain: NETWORK,
				hardfork: HARDFORK,
			},
			privateKey
		);
	} catch (err) {
		throw new Error('Error while signing the Transaction');
	}
}

export async function sendTransaction(rawTransaction) {
	try {
		return await provider.eth.sendSignedTransaction(rawTransaction);
	} catch (err) {
		throw new Error('Error sending the Transaction');
	}
}

export function weiToEth(wei) {
	return toEther(wei);
}

export function toChecksumAddress(address) {
	return provider.utils.toChecksumAddress(address);
}
