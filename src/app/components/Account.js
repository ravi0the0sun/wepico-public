import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text } from 'react-native-paper';

export default function Account({ account, navigation }) {
	return (
		<View style={{ color: '#ffffff' }}>
			<Text>Wallet</Text>
			<Text>
				<Text style={styles.text}>Address: </Text>
				{account.address}
			</Text>
			<Text>
				{account.balance} <Text style={styles.text}>Eth</Text>
			</Text>
			<Text>
				<Text style={styles.text}>Private Key: </Text>
				{account.privateKey}
			</Text>
			<Button
				style={styles.button}
				mode={'contained'}
				icon={'paper-plane'}
				onPress={() =>
					navigation.navigate('Send', { privateKey: account.privateKey })
				}>
				Send Eth
			</Button>
		</View>
	);
}

const styles = StyleSheet.create({
	text: {
		fontWeight: 'bold',
	},
	button: {
		margin: 8
	}
});
