import React from 'react';
import { Button } from 'react-native-paper';
import { View } from 'react-native';

export default function CreateAccount({ generateAccount }) {
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Button icon="account-circle" onPress={generateAccount}>
				Create New Account
			</Button>
			<Button icon="import" onPress={generateAccount}>
				Import an Account
			</Button>
		</View>
	);
}
