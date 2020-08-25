import './shim';
import 'react-native-gesture-handler';

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppRegistry } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';

import App from './src/app/App';
import { name as appName } from './app.json';

export default function Main() {
	return (
		<NavigationContainer>
			<PaperProvider>
				<App />
			</PaperProvider>
		</NavigationContainer>
	);
}

AppRegistry.registerComponent(appName, () => Main);
