import { useState } from 'react';

export function usePrivateKey() {
	const [privateKey, setPrivateKey] = useState();
	const [error, setError] = useState(null);

	const validatePrivateKey = (private) => {
		const pk = private.startsWith('0x') ? private : '0x' + private;
		if (!pk.match(/^0x[0-9A-fa-f]{64}$/)) {
			setError('Wrong PrivateKey!!');
		} else {
			setPrivateKey(pk);
		}
	};
	return [privateKey, validatePrivateKey, error];
}
