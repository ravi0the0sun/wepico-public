import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-paper';
import Clipboard from '@react-native-community/clipboard';

import NavBar from '../components/NavBar';

export default function SettingTab({ removeData, privateKey }) {
	const copyToClipboard = () => {
		Clipboard.setString(privateKey);
	};
	return (
		<View>
			<NavBar title="settings" sub={false} />
			<View>
				<Text>Settings!</Text>
				<Button icon={'trash'} onPress={removeData}>
					Delete Account
				</Button>
				<Button icon={'clipboard'} onPress={copyToClipboard}>
					Copy Private Key
				</Button>
			</View>
		</View>
	);
}
