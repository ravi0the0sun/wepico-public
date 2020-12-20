import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import { Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

import { validateAccount } from '../../common/service/ethService';

import NavBar from '../components/NavBar';

export default function QRCodeeCameraScreen({ navigation }) {
	function scanHandler(data) {
		const address = validateAccount(data);
		navigation.navigate('Send', {
			address: address,
		});
	}
	return (
		<>
			<NavBar title={'Scan QRcode'} navigation={navigation} />
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<Icon name={'scan'} style={styles.icon} />
				<QRCodeScanner onRead={e => scanHandler(e.data)} />
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	icon: {
		flex: 1,
		position: 'absolute',
		justifyContent: 'center',
		alignItems: 'center',
		color: 'rgba( 255, 255, 255, 0.3)',
		backgroundColor: 'rgba(0,0,0,0)',
		fontWeight: 'normal',
		fontSize: 350,
		zIndex: 100,
	},
});
