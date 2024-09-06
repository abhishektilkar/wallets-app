import { mnemonicToSeed, mnemonicToSeedSync, validateMnemonic } from "bip39";
import nacl from "tweetnacl";
import { derivePath } from "ed25519-hd-key";
import { Keypair } from "@solana/web3.js";

const PathMap = {
    'Solana': 501,
    'Ethereum': 60
};

function generateSolanaWallet(seed: Buffer, n: number): string {
    
    // const root = 
    const path = `m/44'/${PathMap['Solana']}'/${n}'/0'`;
    const derivedSeed = derivePath(path, seed.toString('hex')).key
    const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
    return Keypair.fromSecretKey(secret).publicKey.toBase58();
}

function generateEthereumWallet(seed: Buffer, n:number): string {
    const path = `m/44'/${PathMap['Ethereum']}'/${n}'/0'`;
    // const hdNode = HDNodeWallet.fromSeed(seed);
    return '';
}

function generateWallets(mnemonic: Array<String>, n: number) {
    const mnemonicString = mnemonic.join(' ')
    const isValidMnemonic = validateMnemonic(mnemonicString);
    if (!isValidMnemonic) throw new Error('Invalid mnemonic Error');
    const seed = mnemonicToSeedSync(mnemonicString);
    const solanaAddress = generateSolanaWallet(seed, n);
    const ethereumAddress =  generateEthereumWallet(seed, n);
    return { solanaAddress, ethereumAddress };
}

export default generateWallets;
