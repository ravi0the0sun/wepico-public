import Web3 from 'web3';

import { INFURA_API_KEY, NETWORK } from '../config/config';

export const provider = new Web3(
	new Web3.providers.HttpProvider(
		`https://${NETWORK}.infura.io/v3/${INFURA_API_KEY}`
	)
);

export function createWallet() {}
