// app/components/WalletOverview.tsx
'use client';

import { useWalletContext } from "@/app/components/WalletContext";
import { useEffect, useState } from "react";
import generateWallets from './wallet';
import { Connection, LAMPORTS_PER_SOL, clusterApiUrl, PublicKey } from "@solana/web3.js";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import QRCode from 'qrcode.react';  // Import QRCode from qrcode.react
import Modal from '@/app/components/Modal';  // Import the Modal component

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
    const [isModalOpen, setIsModalOpen] = useState(false);  // State to manage modal visibility

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

    const copyAddressToClipboard = async () => {
        const { solanaAddress } = wallets[walletNo];
        if (solanaAddress) {
            await navigator.clipboard.writeText(solanaAddress);
            toast.success('Address copied to clipboard!');
        }
    };

    const shortenedAddress = wallets[0].solanaAddress
        ? `${wallets[0].solanaAddress.slice(0, 4)}...${wallets[0].solanaAddress.slice(-4)}`
        : 'Fetching...';

    return (
        <div className="bg-black h-screen">
            <ToastContainer />
            <div className="bg-gradient-to-br from-purple-500 to-blue-500 text-white p-8 rounded-lg shadow-lg mt-16 max-w-sm mx-auto">
                <h1 className="text-3xl font-bold mb-4 text-center text-black">Wallet Overview</h1>

                <div className="mb-4">
                    <p className="text-sm font-semibold text-black">Wallet Name:</p>
                    <p className="text-xl font-semibold text-green-500">{walletName || 'No Wallet Name'}</p>
                </div>

                <div className="mb-4 flex items-center justify-between">
                    <div>
                        <p className="text-sm text-pink-300">Solana Address:</p>
                        <p className="text-lg font-mono truncate text-green-300">{shortenedAddress}</p>
                    </div>
                    <button onClick={copyAddressToClipboard} className="text-gray-300 hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 6.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0 0 15 2.25h-1.5a2.251 2.251 0 0 0-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 0 0-9-9Z" />
                        </svg>
                    </button>
                </div>
                
                <div className="mb-6">
                    <p className="text-sm text-pink-300">Solana Balance:</p>
                    <p className="text-2xl font-bold text-yellow-400">{solanaBalance ? `${solanaBalance.toFixed(4)} SOL` : '0.00 SOL'}</p>
                </div>
                
                <div className="mt-6 grid grid-cols-2 gap-4">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg flex items-center justify-center transition duration-200">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 17l-4 4m0 0l-4-4m4 4V3" />
                        </svg>
                        Send
                    </button>
                    <button
                        onClick={() => setIsModalOpen(true)}  // Open modal on button click
                        className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg flex items-center justify-center transition duration-200"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7l4-4m0 0l4 4m-4-4v18" />
                        </svg>
                        Receive
                    </button>
                </div>
            </div>

            {/* Modal for QR Code */}
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <div className="flex flex-col items-center">
                    <h2 className="text-xl font-bold mb-4">Scan to Receive SOL</h2>
                    <QRCode value={wallets[walletNo].solanaAddress || ''} size={256} />
                </div>
            </Modal>
        </div>
    );
};

export default WalletOverview;
