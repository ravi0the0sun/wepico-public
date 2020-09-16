import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import Clipboard from '@react-native-community/clipboard';

import NavBar from '../components/NavBar';

export default function SettingScreen({ removeData, privateKey }) {
	const copyToClipboard = () => {
		Clipboard.setString(privateKey);
	};
	return (
		<View>
			<NavBar title="settings" sub={false} />
			<View>
				<Text>Settings!</Text>
				<Button
					color="#ffffff"
					icon="trash"
					onPress={removeData}
					style={{ backgroundColor: '#000000' }}>
					Delete Account
				</Button>
				<Button
					color="#ffffff"
					icon="clipboard"
					onPress={copyToClipboard}
					style={{ backgroundColor: '#000000' }}>
					Copy Private Key
				</Button>
			</View>
		</View>
	);
}
