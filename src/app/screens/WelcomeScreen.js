import React from 'react';
import { Button } from 'react-native-paper';
import { View, StyleSheet, Image, Text } from 'react-native';

export default function WelcomeScreen({ navigation, generateAccount }) {
	const doge = require('../../assets/doge.png');
	return (
		<View style={style.container}>
			<Image source={doge} style={style.img} />
			<Text style={style.lable}>Let's get started</Text>
			<Button
				mode={'contained'}
				icon={'key'}
				onPress={generateAccount}
				labelStyle={style.btnLable}
				contentStyle={style.content}
				style={style.btn}>
				Create New Account
			</Button>
			<Button
				mode={'contained'}
				icon={'log-in'}
				onPress={() => navigation.navigate('Import')}
				labelStyle={style.btnLable}
				contentStyle={style.content}
				style={style.btn}>
				Import an Account
			</Button>
		</View>
	);
}

const style = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	img: {
		marginBottom: '10%',
		width: 250,
		height: 250,
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
	lable: {
		color: '#ffffff',
		fontSize: 18,
		marginBottom: '10%',
	},
	btn: {
		marginBottom: '5%',
	},
});
