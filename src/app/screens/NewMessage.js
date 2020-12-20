import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Appbar } from 'react-native-paper';

import NavBar from '../components/NavBar';

export default function NewMessage({ navigation }) {
	return (
		<>
			<NavBar title="Send Message" sub={true} navigation={navigation} />
			<View>
				<Text>Send New Messages!</Text>
			</View>
		</>
	);
}
