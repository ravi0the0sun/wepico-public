import React from 'react';
import { View, Text, Image } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';

import WelcomeScreen from '../screens/WelcomeScreen';
import ImportPrivateScreen from '../screens/ImportPrivateScreen';
import LoadingScreen from '../screens/LoadingScreen';

const Stack = createStackNavigator();

export default function WelcomeScreenStack({
	isAccount,
	generateAccount,
	importPrivate,
}) {
	if (!isAccount) {
		return <LoadingScreen />;
	}
	return (
		<Stack.Navigator initialRouteName="Welcome" headerMode="none">
			<Stack.Screen name="Welcome">
				{props => (
					<WelcomeScreen {...props} generateAccount={generateAccount} />
				)}
			</Stack.Screen>
			<Stack.Screen name="Import">
				{props => (
					<ImportPrivateScreen {...props} importPrivate={importPrivate} />
				)}
			</Stack.Screen>
		</Stack.Navigator>
	);
}
