import { ReactNode } from 'react';
import { WalletProvider } from '../components/WalletContext';

export default function SectionLayout({ children }: { children: ReactNode }) {
    return (
        <div className="min-h-screen flex flex-col">
            <WalletProvider>
                {children}
            </WalletProvider>
        </div>
    );
}
