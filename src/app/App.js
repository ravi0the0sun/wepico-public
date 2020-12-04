import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import { useAccount } from '../common/hooks/useAccount';

import HomeScreenStack from './stack/HomeScreenStack';

import WelcomeScreenStack from './stack/WelcomeScreenStack';

const theme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		background: '#44464F',
	},
};

export default function App() {
	const [
		removeData,
		generateAccount,
		importPrivate,
		account,
		isAccount,
	] = useAccount(null);

	return (
		<NavigationContainer theme={theme}>
			{!account ? (
				<WelcomeScreenStack
					isAccount={isAccount}
					generateAccount={generateAccount}
					importPrivate={importPrivate}
				/>
			) : (
				<HomeScreenStack removeData={removeData} account={account} />
			)}
		</NavigationContainer>
	);
}
