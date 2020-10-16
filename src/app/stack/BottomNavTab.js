import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../tab/HomeTab';
import TransactionScreen from '../tab/TransactionTab';
import MessageScreen from '../tab/MessageTab';
import SettingScreen from '../tab/SettingTab';

const Tab = createMaterialBottomTabNavigator();

export default function BottomNavTab({ removeData, account, navigation }) {
	return (
		<Tab.Navigator
			initialRouteName="Home"
			backBehavior="history"
			activeColor="#6200ee"
			inactiveColor="#000000"
			barStyle={{ backgroundColor: '#ffffff' }}
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused, color }) => {
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
					return <Ionicons name={iconName} size={24} color={color} />;
				},
			})}>
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
