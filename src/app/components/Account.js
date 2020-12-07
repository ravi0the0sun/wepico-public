import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

export default function Account({ account, navigation }) {
	return (
		<View>
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
});
