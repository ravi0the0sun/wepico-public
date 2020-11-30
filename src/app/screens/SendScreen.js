import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Appbar, Button } from 'react-native-paper';

import NavBar from '../components/NavBar';
import Transaction from '../components/Transaction';

export default function SendScreen({ route, navigation }) {
	const { privateKey } = route.params;
	const back = (
		<Appbar.BackAction
			onPress={() => navigation.navigate('Home')}
			color={'#13d777'}
		/>
	);
	const action = (
		<Appbar.Action
			icon="close-circle-outline"
			onPress={() => navigation.navigate('Home')}
			color={'#13d777'}
		/>
	);

	return (
		<View>
			<NavBar title="Send Eth" sub={true} backButton={back} action={action} />
			<Transaction
				privateKey={privateKey}
				navigation={navigation}
				route={route}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	bgColor: {
		backgroundColor: '#101116',
	},
});
