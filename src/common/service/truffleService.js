import HDWalletProvider from '@truffle/hdwallet-provider';
import Web3 from 'web3';

import {
	ALCHEMY_API_KEY,
	INFURA_API_KEY,
	ETHERSCAN_API_KEY,
	NETWORK,
	password,
} from '../config/config';

export function alchemy_provider_HDWallet(mnemonic) {
    const provider = new HDWalletProvider(mnemonic, `https://eth-${NETWORK}.alchemyapi.io/v2/${ALCHEMY_API_KEY}`);
    return new Web3(provider);
}