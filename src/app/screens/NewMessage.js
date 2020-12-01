import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';

import NavBar from '../components/NavBar';

export default function NewMessage({ navigation }) {
	return (
		<View>
			<NavBar title="Send Message" sub={true} navigation={navigation} />
			<View>
				<Text>Send New Messages!</Text>
			</View>
		</View>
	);
}
