import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import NavBar from '../components/NavBar';

export default function MessageScreen() {
	return (
		<View>

			<NavBar title="messages" sub={true} />
			<View>
				<Text>Messages!</Text>
			</View>
		</View>
	);
}

