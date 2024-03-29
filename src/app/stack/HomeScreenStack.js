import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import QRCodeScreen from '../screens/QRCodeScreen';
import SendScreen from '../screens/SendScreen';
import ConfirmationScreen from '../screens/ConfirmationScreen';
import NewMessage from '../screens/NewMessage';
import QRCodeeCameraScreen from '../screens/QRCodeCameraScreen';

import BottomNavTab from './BottomNavTab';

const Stack = createStackNavigator();

export default function HomeScreenStack({ removeData, account }) {
	return (
		<Stack.Navigator initialRouteName="Home" headerMode="none">
			<Stack.Screen name="Home">
				{props => (
					<BottomNavTab {...props} removeData={removeData} account={account} />
				)}
			</Stack.Screen>
			<Stack.Screen name={'Recive'} component={QRCodeScreen} />
			<Stack.Screen name={'Send'}>
				{props => <SendScreen {...props} account={account} />}
			</Stack.Screen>
			<Stack.Screen name={'Confirm'} component={ConfirmationScreen} />
			<Stack.Screen name={'Draft'} component={NewMessage} />
			<Stack.Screen name={'Scan'} component={QRCodeeCameraScreen} />
		</Stack.Navigator>
	);
}
