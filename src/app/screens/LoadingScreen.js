import React from 'react';
import { ActivityIndicator, Colors } from 'react-native-paper';
import { View, Text, Button } from 'react-native';

export default function LoadingScreen() {
	return (
		<ActivityIndicator
			style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
			animating={true}
			color={Colors.black}
		/>
	);
}
