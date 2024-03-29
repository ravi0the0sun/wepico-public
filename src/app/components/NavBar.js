import React from 'react';
import { Text, StyleSheet, Platform } from 'react-native';
import { Appbar } from 'react-native-paper';

import { NETWORK } from '../../common/config/config';

export default function NavBar({ title, sub, action, navigation, icon }) {
	return (
		<Appbar.Header style={style.appbar} color={'#13d777'}>
			{navigation && (
				<Appbar.Action
					icon={'chevron-back-outline'}
					onPress={() => navigation.goBack()}
					color={'#13d777'}
				/>
			)}
			{!navigation && Platform.OS === 'android' && (
				<Appbar.Action disable={true} />
			)}
			<Appbar.Content
				title={<Text style={style.title}>{title}</Text>}
				subtitle={
					sub &&
					(NETWORK === 'mainnet' ? (
						<Text>Etherum Main Network</Text>
					) : (
						<Text>{NETWORK} Test Metwork</Text>
					))
				}
				style={{ alignItems: 'center' }}
				subtitleStyle={style.subtitle}
				titleStyle={style.subtitle}
				color={'#13d777'}
			/>
			{!action && Platform.OS === 'android' && <Appbar.Action disable={true} />}
			{action && icon && (
				<Appbar.Action icon={icon} onPress={action} color={'#13d777'} />
			)}
		</Appbar.Header>
	);
}

const style = StyleSheet.create({
	subtitle: {
		textTransform: 'capitalize',
	},
	appbar: {
		backgroundColor: '#44464F',
	},
	textColor: {
		color: '#13d777',
	},
	title: {
		fontSize: 20,
	},
});
