import React from 'react';
import { View, Button, TextInput } from 'react-native';

import usePrivateKey from '../hooks/usePrivateKey';

export default function ImportPrivate({ importPrivate }) {
	const [privateKey, validatePrivateKey, error] = usePrivateKey();
	return (
		<View>
			<TextInput
				placeholder="Import you account using PrivateKey"
				onChangeText={(text) => validatePrivateKey(text)}
			/>
			<Button
				onPress={() => importPrivate(privateKey)}
				title="Import You Account"
			/>
		</View>
	);
}
