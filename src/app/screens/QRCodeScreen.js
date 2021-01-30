import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Appbar, Button } from 'react-native-paper';
import Clipboard from '@react-native-community/clipboard';

import NavBar from '../components/NavBar';
import QrCode from '../components/QrCode';

import { WalletContext } from '../App';

export default function QRCodeScreen({ route, navigation }) {
	const [, account] = useContext(WalletContext);
	const { address } = account;

	const copyToClipboard = () => {
		console.log(address);
		Clipboard.setString(address);
	};
	return (
		<>
			<NavBar
				title="Recive"
				navigation={navigation}
				action={() => navigation.navigate('Scan')}
				icon={'scan'}
			/>
			<View style={styles.inner}>
				<Text style={styles.text}>Scan address</Text>
				<QrCode style={styles.qrcode} address={address} />
				<Button
					icon={'clipboard'}
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
