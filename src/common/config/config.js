import { INFURA_API, BUILD } from '@env';

export const INFURA_API_KEY = INFURA_API;
export const NETWORK = BUILD !== 'production' ? 'rinkeby' : 'mainnet';
