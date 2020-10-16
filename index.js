import './shim';
import 'react-native-gesture-handler';

import * as React from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { AppRegistry, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import App from './src/app/App';
import { name as appName } from './app.json';
import Ionicons from 'react-native-vector-icons/Ionicons';
import WalletConnectProvider from 'react-native-walletconnect';

const theme = {
	...DefaultTheme,
	dark: true,
	roundness: 4,
	colors: {
		...DefaultTheme.colors,
		accent: '#f1c40f',
		background: '#ffffff',
	},
};

export default function Main() {
	return (
		<WalletConnectProvider>
			<PaperProvider
				theme={theme}
				settings={{
					icon: (props) => <Ionicons {...props} />,
				}}>
				<NavigationContainer>
					<App />
				</NavigationContainer>
			</PaperProvider>
		</WalletConnectProvider>
	);
}

AppRegistry.registerComponent(appName, () => Main);
