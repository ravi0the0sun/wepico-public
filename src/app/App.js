import React from 'react';

import { useAccount } from '../common/hooks/useAccount';

import BottomNav from './components/BottomNav';

import LoadingScreen from './screens/LoadingScreen';

export default function App() {
	const [removeData, generateAccount, account, noAccount] = useAccount(null);
	if (!account) {
		return (
			<LoadingScreen noAccount={noAccount} generateAccount={generateAccount} />
		);
	}
	return <BottomNav removeData={removeData} account={account} />;
}
