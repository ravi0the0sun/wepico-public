import { useState } from 'react';

export default function useTransactionReceipt(receipt) {
	const [blockInfo, setBlockInfo] = useState(receipt);

	return [blockInfo, setBlockInfo];
}
