import Web3 from 'web3';

import {
	ALCHEMY_API_KEY,
	INFURA_API_KEY,
	ETHERSCAN_API_KEY,
	NETWORK,
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
export function createAccount() {
	return alchemy_provider.eth.accounts.create();
}

export async function currentBlock() {
	return await alchemy_provider.eth.getBlock('latest');
}

export function privateToWallet(pk) {
	return alchemy_provider.eth.accounts.privateKeyToAccount(pk);
}
