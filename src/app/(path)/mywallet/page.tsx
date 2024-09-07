'use client';

import { useWalletContext } from "@/app/components/WalletContext";
import { useEffect, useState } from "react";
import  generateWallets from './wallet'
import { Keypair, Connection, LAMPORTS_PER_SOL, clusterApiUrl, PublicKey } from "@solana/web3.js";
import { ethers } from "ethers";


interface Wallet {
    solanaAddress: string | null;
    ethereumAddress: string | null;
};

const WalletOverview: React.FC = () => {
    const connection = new Connection(clusterApiUrl('devnet'));
    // const provider = new ethers.providers.InfuraProvider("goerli", "b4cdb78a3e8846b78074dc2951bda5d7");

    const { mnemonic, walletName } = useWalletContext();
    const [wallets, setWallets] = useState<Array<Wallet>>([{ solanaAddress: null, ethereumAddress: null }]);
    const [walletNo, setWalletNo] = useState<number>(0);
    const [solanaBalance, setSolanaBalance] = useState<number>(0);
    
    useEffect(() => {
        const wallet = generateWallets(mnemonic, 0);
        setWallets([wallet]);
    }, [])

    useEffect(() => {
        async function getBalances() {
            const { solanaAddress, ethereumAddress } = wallets[walletNo];
            if (solanaAddress) {
                const walletBalance = await connection.getBalance(new PublicKey(solanaAddress));
                setSolanaBalance(walletBalance);
            }
            // if (ethereumAddress) {}
        }
    }, [walletNo])
    // generate

    return (
        <div className="bg-gray-900 text-white p-6 rounded-lg shadow-md max-w-md mx-auto">
            <h1 className="text-2xl font-semibold mb-4">Wallet Overview</h1>
            <div className="mb-4">
                <p className="text-sm text-gray-400">Wallet Name:</p>
                <p className="text-lg">{walletName}</p>
            </div>
            <div className="mb-4">
                <div>
                    <span className="text-sm text-gray-400">solana Address:</span>
                    <span className="text-lg">{wallets[0].solanaAddress}</span>
                </div>
                <div>
                    <span className="text-sm text-gray-400">solana Balance:</span>
                    <span className="text-lg">{solanaBalance}</span>
                </div>
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
