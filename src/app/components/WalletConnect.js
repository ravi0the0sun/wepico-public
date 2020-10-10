import React from 'react';
import { Button } from 'react-native-paper';
import { useWalletConnect } from 'react-native-walletconnect';

export default function WalletConnect({ navigation }) {
	const {
		createSession,
		killSession,
		session,
		signTransaction,
	} = useWalletConnect();
	const hasWallet = !!session.length;
	return (
		<>
			{!hasWallet && <Button onPress={createSession}>Connect</Button>}
			{!hasWallet && (
				<Button onPress={() => navigation.navigate('Welcome')}>Back</Button>
			)}
			{!!hasWallet && (
				<Button
					onPress={() =>
						signTransaction({
							from: '0x9e9952DA4C419441F925CF04f5811e5Cd81abD64',
							to: '0x9e9952DA4C419441F925CF04f5811e5Cd81abD64',
							data: '0x',
							gasPrice: '0x02540be40',
							gas: '0x9c40',
							value: '0x00',
							nonce: '0x0114',
						})
					}>
					Sign Transaction
				</Button>
			)}
			{!!hasWallet && <Button onPress={killSession}>Disconnect</Button>}
		</>
	);
}
