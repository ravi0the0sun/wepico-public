import './shim';

import * as React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { AppRegistry } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import App from './src/app/App';
import { name as appName } from './app.json';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Main() {
	return (
		<PaperProvider
			settings={{
				icon: (props) => <Ionicons {...props} />,
			}}>
			<NavigationContainer>
				<App />
			</NavigationContainer>
		</PaperProvider>
	);
}

AppRegistry.registerComponent(appName, () => Main);
