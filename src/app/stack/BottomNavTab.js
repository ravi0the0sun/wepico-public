import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../screens/HomeScreen';
import TransactionScreen from '../screens/TransactionScreen';
import MessageScreen from '../screens/MessageScreen';
import SettingScreen from '../screens/SettingScreen';

const Tab = createBottomTabNavigator();

export default function BottomNavTab({ removeData, account, navigation }) {
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
				activeTintColor: '#6200ee',
				inactiveTintColor: 'gray',
			}}>
			<Tab.Screen name="Home">
				{(props) => (
					<HomeScreen {...props} account={account} navigation={navigation} />
				)}
			</Tab.Screen>
			<Tab.Screen name="Transaction">
				{(props) => <TransactionScreen {...props} account={account} />}
			</Tab.Screen>
			<Tab.Screen name="Messages">
				{(props) => <MessageScreen {...props} account={account} />}
			</Tab.Screen>
			<Tab.Screen name="Settings">
				{(props) => (
					<SettingScreen
						{...props}
						removeData={removeData}
						privateKey={account.privateKey}
					/>
				)}
			</Tab.Screen>
		</Tab.Navigator>
	);
}
