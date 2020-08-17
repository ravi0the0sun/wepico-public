import { ALCHEMY_API, INFURA_API, ETHERSCAN_API, BUILD } from '@env';

export const ALCHEMY_API_KEY = ALCHEMY_API;
export const INFURA_API_KEY = INFURA_API;
export const ETHERSCAN_API_KEY = ETHERSCAN_API;
export const NETWORK = BUILD !== 'production' ? 'rinkeby' : 'mainnet';
