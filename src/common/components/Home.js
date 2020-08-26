import React from 'react';
import { View, Button } from 'react-native';

export default function Home({ generateAccount }) {
	return (
		<View>
			<Button onPress={generateAccount} title="Create New Account" />
			<Button onPress={generateAccount} title="Import an Account" />
		</View>
	);
}