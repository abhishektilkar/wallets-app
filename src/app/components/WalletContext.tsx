'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface WalletContextType {
    mnemonic: string[];
    walletName: string;
    setMnemonic: (mnemonic: string[]) => void;
    setWalletName: (name: string) => void;
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);

export const WalletProvider = ({ children }: { children: ReactNode }) => {
    const [mnemonic, setMnemonic] = useState<string[]>([]);
    const [walletName, setWalletName] = useState<string>('');

    return (
        <WalletContext.Provider value={{ mnemonic, walletName, setMnemonic, setWalletName }}>
            {children}
        </WalletContext.Provider>
    );
};

export const useWalletContext = () => {
    const context = useContext(WalletContext);
    if (!context) {
        throw new Error('useWalletContext must be used within a WalletProvider');
    }
    return context;
};
