import './shim';
import 'react-native-gesture-handler';

import * as React from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { AppRegistry, StyleSheet } from 'react-native';
import App from './src/app/App';
import { name as appName } from './app.json';
import Ionicons from 'react-native-vector-icons/Ionicons';

const theme = {
	...DefaultTheme,
	dark: true,
	roundness: 4,
	colors: {
		...DefaultTheme.colors,
		primary: '#13d777',
		accent: '#ffffff',
		background: '#44464F',
	},
};

export default function Main() {
	return (
		<PaperProvider
			theme={theme}
			settings={{
				icon: props => <Ionicons {...props} />,
			}}>
			<App />
		</PaperProvider>
	);
}

AppRegistry.registerComponent(appName, () => Main);
