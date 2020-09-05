import React from 'react';
import { StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';

import { NETWORK } from '../../common/config/config';

export default function NavBar({ title, sub, action, backButton }) {
	return (
		<Appbar.Header style={style.appbar}>
			{backButton}
			<Appbar.Content
				title={title}
				subtitle={
					sub
						? NETWORK === 'mainnet'
							? `Etherum Main Network`
							: `${NETWORK} Test Network`
						: ''
				}
				subtitleStyle={style.subtitle}
				titleStyle={style.subtitle}
			/>
			{action}
		</Appbar.Header>
	);
}

const style = StyleSheet.create({
	subtitle: {
		textTransform: 'capitalize',
	},
	appbar: {
		backgroundColor: '#ffffff',
	},
});
