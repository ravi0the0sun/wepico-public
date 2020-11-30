import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeTab from '../tab/HomeTab';
import TransactionTab from '../tab/TransactionTab';
import MarketTab from '../tab/MarketTab';
import SettingTab from '../tab/SettingTab';

const Tab = createMaterialBottomTabNavigator();

export default function BottomNavTab({ removeData, account, navigation }) {
	return (
		<Tab.Navigator
			initialRouteName="Home"
			backBehavior="history"
			activeColor="#13d777"
			inactiveColor="#c9c9c9"
			barStyle={{ backgroundColor: '#44464F' }}
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused, color }) => {
					let iconName;

					if (route.name === 'Home') {
						iconName = focused ? 'wallet' : 'wallet-outline';
					} else if (route.name === 'Transaction') {
						iconName = focused ? 'swap-vertical' : 'swap-vertical-outline';
					} else if (route.name === 'Market') {
						iconName = focused ? 'trending-up' : 'trending-up-outline';
					} else if (route.name === 'Settings') {
						iconName = focused ? 'settings' : 'settings-outline';
					}
					return <Ionicons name={iconName} size={24} color={color} />;
				},
			})}>
			<Tab.Screen name="Home">
				{props => (
					<HomeTab {...props} account={account} navigation={navigation} />
				)}
			</Tab.Screen>
			<Tab.Screen name="Transaction">
				{props => <TransactionTab {...props} account={account} />}
			</Tab.Screen>
			<Tab.Screen name="Market">
				{props => <MarketTab {...props} account={account} />}
			</Tab.Screen>
			<Tab.Screen name="Settings">
				{props => (
					<SettingTab
						{...props}
						removeData={removeData}
						privateKey={account.privateKey}
					/>
				)}
			</Tab.Screen>
		</Tab.Navigator>
	);
}
