import React from 'react';
import { StyleSheet, View } from 'react-native';

import { useAccount } from '../common/hooks/useAccount';

import BottomNav from './components/BottomNav';

import LoadingScreen from './screens/LoadingScreen';

export default function App() {
	const [removeData, generateAccount, account] = useAccount(null);
	if (!account) {
		return <LoadingScreen />;
	}
	return <BottomNav />;
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		color: '#000000',
	},
});
