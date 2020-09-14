import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { Button } from 'react-native-paper';

export default function ImportPrivate({ importPrivate }) {
	const [value, onChangeText] = React.useState('');
	return (
		<View>
			<Text>Import Account</Text>
			<TextInput
				placeholder="Import you account using PrivateKey"
				style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
				onChangeText={(text) => onChangeText(text)}
				value={value}
			/>
			<Button
				disabled={!value}
				icon="log-in-outline"
				onPress={() => importPrivate(value)}
				color="#ffffff"
				style={{ backgroundColor: '#000000' }}>
				Import Your Account
			</Button>
		</View>
	);
}
