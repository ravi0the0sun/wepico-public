import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { ActivityIndicator, Text } from 'react-native-paper';

import dogesay from '../../common/config/dogesay.config';

export default function LoadingScreen() {
	const [say, setSay] = useState('');

	const listLength = dogesay.length;
	const doge = require('../../assets/doge2.png');

	useEffect(() => {
		setSay(dogesay[Math.floor(Math.random() * listLength)]);
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
		backgroundColor: '#44464F',
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
