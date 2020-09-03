import './shim';

import * as React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { AppRegistry } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import App from './src/app/App';
import { name as appName } from './app.json';

export default function Main() {
	return (
		<PaperProvider>
			<NavigationContainer>
				<App />
			</NavigationContainer>
		</PaperProvider>
	);
}

AppRegistry.registerComponent(appName, () => Main);
