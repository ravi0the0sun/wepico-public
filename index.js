import './shim';

import * as React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { AppRegistry } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import App from './src/app/App';
import { name as appName } from './app.json';
import Ionicons from 'react-native-vector-icons/Ionicons';

const theme = {
	dark: false,
	roundness: 4,
	colors: {
		primary: '#6200ee',
		accent: '#03dac4',
		background: '#000000',
		surface: white,
		error: '#B00020',
		text: black,
		onBackground: '#000000',
		onSurface: '#000000',
		disabled: color(black).alpha(0.26).rgb().string(),
		placeholder: color(black).alpha(0.54).rgb().string(),
		backdrop: color(black).alpha(0.5).rgb().string(),
		notification: pinkA400,
	},
	fonts: configureFonts(),
	animation: {
		scale: 1.0,
	},
};

export default function Main() {
	return (
		<PaperProvider
			theme={theme}
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
