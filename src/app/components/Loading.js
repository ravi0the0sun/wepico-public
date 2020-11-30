import React from 'react';
import { ActivityIndicator } from 'react-native';

export default function Loading({ isBusy }) {
	return (
		<ActivityIndicator
			animating={isBusy}
			color={'#13d777'}
			style={{ justifyContent: 'center', alignContent: 'center' }}
		/>
	);
}
