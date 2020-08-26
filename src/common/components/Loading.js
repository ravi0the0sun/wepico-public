import React from 'react';
import { ActivityIndicator } from 'react-native';

export default function Loading({ isBusy }) {
	return <ActivityIndicator animating={isBusy} color="#0000ff" />;
}
