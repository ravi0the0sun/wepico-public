import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Button } from 'react-native-paper';

import NavBar from '../components/NavBar';

export default function SettingScreen({ removeData }) {
	return (
		<View>
			<NavBar title="settings" sub={false} />
			<View>
				<Text>Settings!</Text>
				<Button
					color="#ffffff"
					icon="delete"
					onPress={removeData}
					style={{ backgroundColor: '#000000' }}>
					Delete Account
				</Button>
			</View>
		</View>
	);
}
