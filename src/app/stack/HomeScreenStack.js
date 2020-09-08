import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import QRCodeScreen from '../screens/QRCodeScreen';
import SendScreen from '../screens/SendScreen';

import BottomNavTab from './BottomNavTab';

const Stack = createStackNavigator();

export default function HomeScreenStack({removeData, account}) {
	return (
		<Stack.Navigator initialRouteName="Home" headerMode="none">
			<Stack.Screen name="Home">
				{(props) => <BottomNavTab {...props} removeData={removeData} account={account} />}
			</Stack.Screen>
			<Stack.Screen name="Recive" component={QRCodeScreen} />
			<Stack.Screen name="Send" component={SendScreen} />
		</Stack.Navigator>
	);
}
