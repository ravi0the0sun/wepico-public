import React from 'react';
import { StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';

import { NETWORK } from '../../common/config/config';

export default function NavBar({ title }) {
	return (
		<Appbar.Header style={style.appbar}>
			<Appbar.Content
				title={title}
				subtitle={
					NETWORK === 'mainnet'
						? `Etherum Main Network`
						: `${NETWORK} Test Network`
				}
				style={style.container}
				subtitleStyle={style.subtitle}
				titleStyle={style.subtitle}
			/>
		</Appbar.Header>
	);
}

const style = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
	},
	subtitle: {
		textTransform: 'capitalize',
	},
	appbar: {
		backgroundColor: '#ffffff',
	},
});
