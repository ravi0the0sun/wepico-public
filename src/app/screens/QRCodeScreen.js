import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Appbar, Button } from 'react-native-paper';
import Clipboard from '@react-native-community/clipboard';

import NavBar from '../components/NavBar';
import QrCode from '../components/QrCode';

export default function QRCodeScreen({ route, navigation }) {
	const { address } = route.params;

	const copyToClipboard = () => {
		Clipboard.setString(address);
	};
	return (
		<>
			<NavBar
				title="Recive"
				navigation={navigation}
				action={() => console.log('scan')}
				icon={'scan'}
			/>
			<View style={styles.inner}>
				<Text style={styles.text}>Scan address</Text>
				<QrCode style={styles.qrcode} address={address} />
				<Button
					icon="clipboard"
					onPress={copyToClipboard}
					mode={'contained'}
					contentStyle={styles.content}
					labelStyle={styles.btnLable}>
					Copy To Clipboard
				</Button>
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	inner: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	btnLable: {
		color: '#ffffff',
		fontSize: 16.36,
		textAlign: 'center',
		textTransform: 'capitalize',
	},
	content: {
		height: 52,
		width: 283,
	},
	text: {
		fontSize: 20,
		marginBottom: '5%',
	},
	qrcode: {
		marginBottom: '5%',
	},
});
