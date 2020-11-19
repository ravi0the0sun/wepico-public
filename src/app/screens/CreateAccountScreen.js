import React from 'react';
import { Button } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';

export default function CreateAccountScreen({ navigation, generateAccount }) {
	return (
		<View style={style.container}>
			<Button icon="key" onPress={generateAccount}>
				Create New Account
			</Button>
			<Button icon="log-in" onPress={() => navigation.navigate('Import')}>
				Import an Account
			</Button>
		</View>
	);
}

const style = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
