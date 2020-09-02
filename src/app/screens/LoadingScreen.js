import React from 'react';
import { ActivityIndicator, Colors } from 'react-native-paper';
import CreateAccount from '../components/CreateAccount';

export default function LoadingScreen({ noAccount, generateAccount }) {
	if (!noAccount) {
		return (
			<ActivityIndicator
				style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
				animating={true}
				color={Colors.black}
				size="large"
			/>
		);
	}
	return <CreateAccount generateAccount={generateAccount} />;
}
