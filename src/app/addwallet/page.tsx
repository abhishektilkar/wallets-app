'use client'
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import * as bip39 from 'bip39';
import Toast from '../components/Toast';

const WalletPage: React.FC = () => {
    const [selectedOption, setSelectedOption] = useState<'create' | 'add' | ''>('');
    const [mnemonic, setMnemonic] = useState<string[]>(Array(12).fill(''));
    const [walletName, setWalletName] = useState('');
    const [error, setError] = useState('');
    const [showToast, setShowToast] = useState(false);

    const generateMnemonic = () => {
        setSelectedOption('create');
        const mnemonic = bip39.generateMnemonic(128);
        const words = mnemonic.split(' ');
        setMnemonic(words);
    };

    const addMnemonic = () => {
        setSelectedOption('add');
        setMnemonic(Array(12).fill(''));
    };

    const handleAddExistingWallet = () => {
        if (mnemonic.some(word => !word) || mnemonic.length !== 12) {
            setError('Please enter a valid 12-word mnemonic phrase.');
            return;
        }

        // Add wallet logic here
        setError('');
        alert('Wallet added successfully!');
    };

    const handleInputChange = (index: number, value: string) => {
        const updatedMnemonic = [...mnemonic];
        updatedMnemonic[index] = value;
        setMnemonic(updatedMnemonic);
    };

    const copyMnemonicToClipboard = () => {
        if (mnemonic.length === 12) {
            const mnemonicString = mnemonic.join(' ');
            navigator.clipboard.writeText(mnemonicString).then(
                () => {
                    setShowToast(true);
                },
                (err) => console.error('Failed to copy mnemonic: ', err)
            );
        }
    };

    const handleInputClick = () => {
        copyMnemonicToClipboard();
    };

    const handleCloseToast = () => {
        setShowToast(false);
    };

    return (
        <div className="bg-white text-black min-h-screen py-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-lg mx-auto bg-gray-100 p-6 rounded-lg shadow-lg">
                <h1 className="text-2xl font-semibold mb-6 text-center">Manage Your Wallet</h1>

                <div className="flex gap-2 sm:gap-4 mb-4">
                    <Button
                        onClick={generateMnemonic}
                        className={`w-full py-2 rounded-lg font-semibold transition-colors duration-300 ${selectedOption === 'create' ? 'bg-black text-white hover:bg-gray-800' : 'bg-gray-300 text-black hover:bg-gray-400'}`}
                    >
                        <span className="block sm:hidden">Create</span>
                        <span className="hidden sm:block">Create New Wallet</span>
                    </Button>

                    <Button
                        onClick={addMnemonic}
                        className={`w-full py-2 rounded-lg font-semibold transition-colors duration-300 ${selectedOption === 'add' ? 'bg-black text-white hover:bg-gray-800' : 'bg-gray-300 text-black hover:bg-gray-400'}`}
                    >
                        <span className="block sm:hidden">Add</span>
                        <span className="hidden sm:block">Add Existing Wallet</span>
                    </Button>
                </div>

                {selectedOption === '' && (
                    <div className="mx-auto text-center">
                        <p className="text-gradient mt-4">
                            Manage your wallet securely and efficiently. Creating a new wallet will generate a mnemonic phrase that you&apos;ll need to keep safe. If you already have a mnemonic phrase, you can add your existing wallet using it.
                        </p>
                        <div className="flex justify-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="250"
                                height="250"
                                className="icon"
                                viewBox="0 0 1024 1024"
                            >
                                <path
                                    fill="#3D5AFE"
                                    d="M896 896H128c-35.3 0-64-28.7-64-64V192c0-35.3 28.7-64 64-64h768c35.3 0 64 28.7 64 64v640c0 35.3-28.7 64-64 64z"
                                ></path>
                                <path
                                    fill="#FFEA00"
                                    d="M192 383.5a64 64 0 10128 0 64 64 0 10-128 0z"
                                ></path>
                                <path
                                    fill="#536DFE"
                                    d="M896 896c35.3 0 64-28.7 64-64V605L768.1 320l-320 319.9-64-64L82.7 877.3C94.3 888.8 110.3 896 128 896h768z"
                                ></path>
                                <path
                                    fill="#8C9EFF"
                                    d="M114.3 894.5c1.3.3 2.6.5 3.9.7-1.3-.1-2.6-.4-3.9-.7z"
                                ></path>
                                <path
                                    fill="#536DFE"
                                    d="M64 192v640c0 17.7 7.2 33.7 18.7 45.3L384 576l64 64 241.4-241.3c-29.9-114.4-103.8-211-202.6-270.6H128c-35.3-.1-64 28.6-64 63.9zm192 127.5c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64z"
                                ></path>
                                <path
                                    fill="#FFEA00"
                                    d="M704 512c0-39.2-5-77.2-14.5-113.4L448.1 639.9l-64-64L82.7 877.3c.7.7 1.5 1.4 2.2 2.1 1.5 1.4 3.1 2.7 4.7 3.9s3.3 2.4 5.1 3.4c1.8 1.1 3.6 2.1 5.4 3 .9.4 1.9.9 2.8 1.3.6.3 1.2.5 1.8.7 1.2.5 2.4.9 3.7 1.3 1.9.6 3.8 1.1 5.7 1.5 1.3.3 2.6.5 3.9.7 3.2.5 6.4.7 9.7.7h358.9C617 817.6 704 675 704 512z"
                                ></path>
                                <path
                                    fill="#8C9EFF"
                                    d="M104.9 891.7c1.2.5 2.4.9 3.7 1.3-1.3-.4-2.5-.8-3.7-1.3z"
                                ></path>
                            </svg>
                        </div>
                    </div>
                )}

                {selectedOption && (
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">Wallet Name</label>
                        <Input
                            type="text"
                            placeholder="Enter wallet name"
                            value={walletName}
                            onChange={(e) => setWalletName(e.target.value)}
                            className="w-full bg-white text-black border border-gray-300 rounded-lg p-3"
                        />
                    </div>
                )}

                {selectedOption === 'create' && (
                    <>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-4">
                            {mnemonic.map((word, index) => (
                                <Input
                                    key={index}
                                    type="text"
                                    value={word}
                                    readOnly
                                    onClick={handleInputClick}
                                    className="bg-gray-200 text-black border border-gray-300 rounded-lg p-2 text-center cursor-pointer"
                                />
                            ))}
                        </div>
                        <Button
                            onClick={handleAddExistingWallet}
                            className="w-full py-2 bg-black text-white rounded-lg font-semibold"
                        >
                            Generate New Wallet
                        </Button>
                    </>
                )}

                {selectedOption === 'add' && (
                    <>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-4">
                            {mnemonic.map((word, index) => (
                                <Input
                                    key={index}
                                    type="text"
                                    value={word}
                                    onChange={(e) => handleInputChange(index, e.target.value)}
                                    className="bg-white text-black border border-gray-300 rounded-lg p-2 text-center"
                                />
                            ))}
                        </div>
                        <Button
                            onClick={handleAddExistingWallet}
                            className="w-full py-2 bg-black text-white rounded-lg font-semibold"
                        >
                            Add Wallet
                        </Button>
                    </>
                )}

                {error && <p className="text-red-500 text-sm mt-4">{error}</p>}

                {showToast && (
                    <Toast
                        message="Mnemonic copied to clipboard!"
                        onClose={handleCloseToast}
                    />
                )}
            </div>
        </div>
    );
};

export default WalletPage;

// export { mneumonic ,setMne }
