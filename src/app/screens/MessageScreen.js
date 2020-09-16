import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';

import NavBar from '../components/NavBar';

export default function MessageScreen({ navigation }) {
	const action = (
		<Appbar.Action
			icon="add-circle-outline"
			onPress={() => navigation.navigate('Draft')}
		/>
	);
	return (
		<View>
			<NavBar title="messages" sub={true} action={action} />
			<View>
				<Text>Messages!</Text>
			</View>
		</View>
	);
}
