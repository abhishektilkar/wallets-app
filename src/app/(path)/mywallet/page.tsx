'use client';

import { useWalletContext } from "@/app/components/WalletContext";
import { useEffect, useState } from "react";
import generateWallets from './wallet';
import { Keypair, Connection, LAMPORTS_PER_SOL, clusterApiUrl, PublicKey } from "@solana/web3.js";

interface Wallet {
    solanaAddress: string | null;
    ethereumAddress: string | null;
};

const WalletOverview: React.FC = () => {
    const connection = new Connection(clusterApiUrl('devnet'));

    const { mnemonic, walletName } = useWalletContext();
    const [wallets, setWallets] = useState<Array<Wallet>>([{ solanaAddress: null, ethereumAddress: null }]);
    const [walletNo, setWalletNo] = useState<number>(0);
    const [solanaBalance, setSolanaBalance] = useState<number>(0);
    
    useEffect(() => {
        const wallet = generateWallets(mnemonic, 0);
        setWallets([wallet]);
    }, [mnemonic]);

    useEffect(() => {
        async function getBalances() {
            const { solanaAddress } = wallets[walletNo];
            if (solanaAddress) {
                const walletBalance = await connection.getBalance(new PublicKey(solanaAddress));
                setSolanaBalance(walletBalance / LAMPORTS_PER_SOL); // Convert lamports to SOL
            }
        }
        getBalances();
    }, [walletNo, wallets, connection]);

    return (
        <div className="bg-black h-screen">
        <div className="bg-gradient-to-b from-blue-600 to-purple-700 text-white p-8 rounded-lg shadow-lg mt-8 max-w-md mx-auto">
            <h1 className="text-3xl font-bold mb-4 text-center">Wallet Overview</h1>
            <div className="mb-4">
                <p className="text-sm text-gray-300">Wallet Name:</p>
                <p className="text-xl font-semibold">{walletName || 'No Wallet Name'}</p>
            </div>
            <div className="mb-4">
                <p className="text-sm text-gray-300">Solana Address:</p>
                <p className="text-lg font-mono truncate">{wallets[0].solanaAddress || 'Fetching...'}</p>
            </div>
            <div className="mb-6">
                <p className="text-sm text-gray-300">Solana Balance:</p>
                <p className="text-2xl font-bold">{solanaBalance ? `${solanaBalance.toFixed(4)} SOL` : '0.00 SOL'}</p>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4">
                <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg flex items-center justify-center transition duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 17l-4 4m0 0l-4-4m4 4V3" />
                    </svg>
                    Send
                </button>
                <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg flex items-center justify-center transition duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7l4-4m0 0l4 4m-4-4v18" />
                    </svg>
                    Receive
                </button>
            </div>
        </div>
        </div>
    );
};

export default WalletOverview;
