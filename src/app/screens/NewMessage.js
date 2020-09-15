
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';

import NavBar from '../components/NavBar';

export default function NewMessage({ navigation }) {
	const back = (
		<Appbar.BackAction onPress={() => navigation.navigate('Home')} />
	);
	return (
		<View>
			<NavBar title="Send Message" sub={true} backButton={back} />
			<View>
				<Text>Send New Messages!</Text>
			</View>
		</View>
	);
}
