import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

export default function LoadingScreen() {
	const [say, setSay] = useState('BORK');
	const dogeSay = [
		`wow`,
		`tinfoil hat`,
		`what are you doing`,
		`wow very biscits`,
		`straigt to my thigh`,
		`very Speed`,
		`w-a-p-e`,
		`keep your hands away from me`,
		`Concern`,
		`so scare`,
		`so mystery`,
		`much delishush`,
		`So Sochi`,
		`i looc cool`,
	];

	const listLength = dogeSay.length;
	const doge = require('../../assets/doge2.png');

	useEffect(() => {
		setSay(dogeSay[Math.floor(Math.random() * listLength)]);
	}, []);

	return (
		<View style={style.inner}>
			<Image source={doge} style={style.img} />
			<Text style={style.lable}>wepico</Text>
			<Text style={style.text}>{say}</Text>
			<ActivityIndicator animating={true} />
		</View>
	);
}

const style = StyleSheet.create({
	inner: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	indicator: {},
	img: {
		width: 200,
		height: 200,
	},
	text: {
		color: '#13d777',
		fontSize: 25,
		fontFamily: 'Comic Sans MS',
		marginBottom: '10%',
	},
	lable: {
		fontSize: 70,
		color: '#ffffff',
		fontWeight: 'bold',
	},
});
