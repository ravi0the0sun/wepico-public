import React from 'react';

import { useAccount } from '../common/hooks/useAccount';

import HomeScreenStack from './stack/HomeScreenStack';

import LoadingScreen from './screens/LoadingScreen';

export default function App() {
	const [removeData, generateAccount, account, noAccount] = useAccount(null);
	if (!account) {
		return (
			<LoadingScreen noAccount={noAccount} generateAccount={generateAccount} />
		);
	}
	return <HomeScreenStack removeData={removeData} account={account} />;
}
