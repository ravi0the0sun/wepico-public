import React from 'react';

import { useAccount } from '../common/hooks/useAccount';

import HomeScreenStack from './stack/HomeScreenStack';

import WelcomeScreenStack from './stack/WelcomeScreenStack';

export default function App() {
	const [removeData, generateAccount, account, noAccount] = useAccount(null);
	if (!account) {
		return (
			<WelcomeScreenStack noAccount={noAccount} generateAccount={generateAccount} />
		);
	}
	return <HomeScreenStack removeData={removeData} account={account} />;
}
