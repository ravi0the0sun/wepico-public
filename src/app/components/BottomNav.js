import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../screens/HomeScreen';
import TransactionScreen from '../screens/TransactionScreen';
import MessageScreen from '../screens/MessageScreen';
import SettingScreen from '../screens/SettingScreen';

const Tab = createBottomTabNavigator();

export default function BottomNav({ removeData, account }) {
	return (
		<Tab.Navigator
			initialRouteName="Home"
			backBehavior="history"
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused, color, size }) => {
					let iconName;

					if (route.name === 'Home') {
						iconName = focused ? 'wallet' : 'wallet-outline';
					} else if (route.name === 'Transaction') {
						iconName = focused ? 'swap-vertical' : 'swap-vertical-outline';
					} else if (route.name === 'Messages') {
						iconName = focused ? 'at-circle' : 'at-circle-outline';
					} else if (route.name === 'Settings') {
						iconName = focused ? 'settings' : 'settings-outline';
					}
					return <Ionicons name={iconName} size={size} color={color} />;
				},
			})}
			tabBarOptions={{
				activeTintColor: 'black',
				inactiveTintColor: 'gray',
				showLabel: false,
			}}>
			<Tab.Screen name="Home" >
				{(props) => <HomeScreen {...props} account={account} />}
			</Tab.Screen>
			<Tab.Screen name="Transaction" component={TransactionScreen} />
			<Tab.Screen name="Messages" component={MessageScreen} />
			<Tab.Screen name="Settings" >
				{(props) => <SettingScreen {...props} removeData={removeData} />}
			</Tab.Screen>
		</Tab.Navigator>
	);
}
