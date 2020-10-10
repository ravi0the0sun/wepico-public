import React from 'react';
import { ActivityIndicator, Colors } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';

import CreateAccountScreen from '../screens/CreateAccountScreen';
import ImportPrivateScreen from '../screens/ImportPrivateScreen';
import ConnectScreen from '../screens/ConnectScreen';

const Stack = createStackNavigator();

export default function WelcomeScreenStack({
	noAccount,
	generateAccount,
	importPrivate,
}) {
	if (!noAccount) {
		return (
			<ActivityIndicator
				style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
				animating={true}
			/>
		);
	}
	return (
		<Stack.Navigator initialRouteName="Welcome" headerMode="none">
			<Stack.Screen name="Welcome">
				{(props) => (
					<CreateAccountScreen {...props} generateAccount={generateAccount} />
				)}
			</Stack.Screen>
			<Stack.Screen name="Import">
				{(props) => (
					<ImportPrivateScreen {...props} importPrivate={importPrivate} />
				)}
			</Stack.Screen>
			<Stack.Screen name="Connect" component={ConnectScreen} />
		</Stack.Navigator>
	);
}
