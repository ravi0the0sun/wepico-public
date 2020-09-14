import Web3 from 'web3';

import {
	ALCHEMY_API_KEY,
	INFURA_API_KEY,
	ETHERSCAN_API_KEY,
	NETWORK,
	password,
} from '../config/config';

const alchemy_provider = new Web3(
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

export function createAccount() {
	return alchemy_provider.eth.accounts.create();
}

export async function currentBlock() {
	return await alchemy_provider.eth.getBlock('latest');
}

export function privateToAccount(pk) {
	const privateKey = pk.startsWith('0x') ? pk : '0x' + pk;
	validatePrivateKey(privateKey);
	return alchemy_provider.eth.accounts.privateKeyToAccount(privateKey);
}

export function encryptAccount(pk) {
	return JSON.stringify(alchemy_provider.eth.accounts.encrypt(pk, password));
}

export function decryptAccount(encryptString) {
	const encryptObj = JSON.parse(encryptString);
	return alchemy_provider.eth.accounts.decrypt(encryptObj, password);
}

export function createWallet() {
	return alchemy_provider.eth.accounts.wallet.create();
}

export function encryptWallet(wallet) {
	return JSON.stringify(wallet.encrypt(password));
}

export function decryptWallet(keystoreString) {
	const keystoreArray = JSON.parse(keystoreString);
	return alchemy_provider.eth.accounts.wallet.decrypt(keystoreArray, password);
}

export async function getBalance(address) {
	const wei = await alchemy_provider.eth.getBalance(address);
	const ether = alchemy_provider.utils.fromWei(wei, 'ether');
	return ether;
}
