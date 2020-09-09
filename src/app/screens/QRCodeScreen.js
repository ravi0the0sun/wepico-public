import React from 'react';
import { View, Text } from 'react-native';
import { Appbar, Button } from 'react-native-paper';
import Clipboard from '@react-native-community/clipboard';

import NavBar from '../components/NavBar';
import QrCode from '../components/QrCode';

let buttonText = 'Copy PrivateKey';
let buttonIcon = 'clipboard-outline';

export default function QRCodeScreen({ route, navigation }) {
	const { address } = route.params;
	const back = (
		<Appbar.BackAction onPress={() => navigation.navigate('Home')} />
	);
	const copyToClipboard = () => {
		Clipboard.setString(address);
	};
	return (
		<View>
			<NavBar title="Recive" backButton={back} />
			<Text>{address}</Text>
			<QrCode address={address} />
			<Button
				color="#ffffff"
				icon={buttonIcon}
				style={{ backgroundColor: '#000000' }}
				onPress={copyToClipboard}>
				{buttonText}
			</Button>
		</View>
	);
}
