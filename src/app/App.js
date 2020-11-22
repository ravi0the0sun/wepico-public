import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { useAccount } from '../common/hooks/useAccount';

import HomeScreenStack from './stack/HomeScreenStack';

import WelcomeScreenStack from './stack/WelcomeScreenStack';

export default function App() {
	const [
		removeData,
		generateAccount,
		importPrivate,
		account,
		noAccount,
	] = useAccount(null);

	return (
		<NavigationContainer>
			{!account ? (
				<WelcomeScreenStack
					noAccount={noAccount}
					generateAccount={generateAccount}
					importPrivate={importPrivate}
				/>
			) : (
				<HomeScreenStack removeData={removeData} account={account} />
			)}
		</NavigationContainer>
	);
}
