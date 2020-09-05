import React from 'react';
import { Button } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';

export default function CreateAccount({ generateAccount }) {
	return (
		<View style={style.container}>
			<Button
				icon="account-circle"
				onPress={generateAccount}
				style={style.button}
				color="#ffffff">
				Create New Account
			</Button>
			<Button
				icon="import"
				onPress={generateAccount}
				style={style.button}
				color="#ffffff">
				Import an Account
			</Button>
		</View>
	);
}

const style = StyleSheet.create({
	button: {
		backgroundColor: '#000000',
		color: '#ffffff',
	},
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
