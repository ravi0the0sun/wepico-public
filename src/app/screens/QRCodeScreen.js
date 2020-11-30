import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Appbar, Button } from 'react-native-paper';
import Clipboard from '@react-native-community/clipboard';

import NavBar from '../components/NavBar';
import QrCode from '../components/QrCode';

export default function QRCodeScreen({ route, navigation }) {
	const { address } = route.params;
	const back = (
		<Appbar.BackAction
			onPress={() => navigation.navigate('Home')}
			color={'#13d777'}
		/>
	);
	const copyToClipboard = () => {
		Clipboard.setString(address);
	};
	return (
		<View>
			<NavBar title="Recive" backButton={back} />
			<Text>{address}</Text>
			<QrCode address={address} />
			<Button icon="clipboard" onPress={copyToClipboard}>
				Copy To Clipboard
			</Button>
		</View>
	);
}

const styles = StyleSheet.create({
	bgColor: {
		backgroundColor: '#101116',
	},
});
