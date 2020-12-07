import React from 'react';
import { View } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

export default function QrCode({ address, style }) {
	return (
		<View style={style}>
			<QRCode
				value={address}
				color={'#13d777'}
				backgroundColor={'#44464F'}
				size={300}
				logo={require('../../assets/doge3.png')}
			/>
		</View>
	);
}
