import { useState, useEffect } from 'react';

import { getGas } from '../service/ethService';

export default function useGetGas(speed) {
	const [gas, setGas] = useState('');

	async function checkGas() {
		try {
			setGas(await getGas());
		} catch (err) {
			throw new Error('Network Problem');
		}
	}

	useEffect(() => {
		checkGas();
	}, []);

	return gas;
}
