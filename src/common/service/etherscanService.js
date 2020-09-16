import { NETWORK, ETHERSCAN_API_KEY } from '../config/config';

const network = NETWORK !== 'mainnet' ? `-${NETWORK}` : '';

export async function accountTransaction(address, blockNumber) {
	try {
		const URI = `https://api${network}.etherscan.io/api?module=account&action=txlist&address=${address}&startblock=0&endblock=${blockNumber}&sort=asc&apikey=${ETHERSCAN_API_KEY}`;
		const response = await fetch(URI, {
			method: 'GET',
			mode: 'cors',
		});
		return response.json();
	} catch {
		throw new Error('Error Accessing Etherscan');
	}
}
