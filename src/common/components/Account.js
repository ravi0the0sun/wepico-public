import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Account({ account, removeData }) {
	return (
		<View>
			<Text>
				<Text style={styles.text}>Address: </Text>
				{account.address}
			</Text>
			<Text>
				<Text style={styles.text}>Private Key: </Text>
				{account.privateKey}
			</Text>
			<Button onPress={removeData} title="Delete Account" />
		</View>
	);
}

const styles = StyleSheet.create({
	text: {
		fontWeight: 'bold',
	},
});
