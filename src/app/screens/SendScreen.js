import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Appbar, Button } from 'react-native-paper';

import NavBar from '../components/NavBar';

export default function SendScreen({ account, navigation, route }) {
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
		</View>
	);
}

const styles = StyleSheet.create({
	bgColor: {
		backgroundColor: '#101116',
	},
});
