import React from 'react';
import { View } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

export default function QrCode({ address }) {
	return (
		<View>
			<QRCode value={address} />
		</View>
	);
}
