import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Appbar } from 'react-native-paper';

import { useAccount } from '../common/hooks/useAccount';

import BottomNav from './components/BottomNav';

export default function App() {
	const [removeData, generateAccount, account] = useAccount(null);
	return (
		<BottomNav />
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		color: '#000000',
	},
});
