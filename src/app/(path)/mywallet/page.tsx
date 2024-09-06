'use client';

import { useWalletContext } from "@/app/components/WalletContext";
import { useEffect, useState } from "react";

const WalletOverview: React.FC = () => {
    const { mnemonic, walletName } = useWalletContext();
    const [accounts, setAccounts] = useState<number>(1);

    useEffect(() => {
        generateWallets(0);
    }, [])

    

    generate

    return (
        <div className="bg-gray-900 text-white p-6 rounded-lg shadow-md max-w-md mx-auto">
            <h1 className="text-2xl font-semibold mb-4">Wallet Overview</h1>
            <div className="mb-4">
                <p className="text-sm text-gray-400">Wallet Name:</p>
                <p className="text-lg">{walletName}</p>
            </div>
            <div className="mb-4">
                <p className="text-sm text-gray-400">Mnemonic Phrase:</p>
                <p className="text-lg">{mnemonic.join(' ')}</p>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4">
                <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg">
                    Send
                </button>
                <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg">
                    Receive
                </button>
            </div>
        </div>
    );
};

export default WalletOverview;
