import React, { useEffect, useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Appbar, Button } from 'react-native-paper';

import NavBar from '../components/NavBar';

import { WalletContext } from '../App';

export default function SendScreen({ navigation, route }) {
	const [, account] = useContext(WalletContext);
	useEffect(() => {
		if (route?.params?.address) {
			console.log(route?.params?.address);
		}
	}, [route?.params?.address]);

	return (
		<View>
			<NavBar
				navigation={navigation}
				title="Send Eth"
				sub={true}
				action={() => navigation.navigate('Scan')}
				icon={'scan'}
			/>
			<Text>Address: {route?.params?.address && route.params.address}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	bgColor: {
		backgroundColor: '#101116',
	},
});
