import {ethers} from "ethers";
import {create} from "zustand";
import {CONTRACT_ABI, CONTRACT_ADDRESS} from "@/app/lib/constans";

interface WalletState {
    account: string | null;
    provider: ethers.BrowserProvider | null;
    signer: ethers.JsonRpcSigner | null;
    contract: ethers.Contract | null;
    isConnected: boolean;
    connectWallet: () => Promise<void>;
    checkWalletConnection: () => Promise<void>;
}

export const useWalletStore = create<WalletState>((set) => ({
    account: null,
    provider: null,
    signer: null,
    contract: null,
    isConnected: false,
    connectWallet: async () => {
        try {
            if (typeof window === "undefined") return;

            let provider: ethers.BrowserProvider | null = null;

            if (window.ethereum) {
                await window.ethereum.request({method: "eth_requestAccounts"});
                provider = new ethers.BrowserProvider(window.ethereum);
            } else if (window.bybit) {
                await window.bybit.request({method: "eth_requestAccounts"});
                provider = new ethers.BrowserProvider(window.bybit);
            } else {
                alert("No supported wallet found. Please install MetaMask or Bybit Wallet.");
                return;
            }

            const signer = await provider.getSigner();
            const account = await signer.getAddress();
            const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);
            set({
                account,
                provider,
                contract,
                isConnected: true,
                signer
            });
        } catch (error) {
            console.error("Error connecting wallet:", error);
        }
    },
    checkWalletConnection: async () => {
        try {
            if (typeof window.ethereum !== "undefined") {
                const provider = new ethers.BrowserProvider(window.ethereum);
                const accounts = await provider.send("eth_accounts", []);
                if (accounts.length > 0) {
                    const signer = await provider.getSigner();
                    const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);
                    set({
                        account: accounts[0],
                        provider,
                        signer,
                        contract,
                        isConnected: true,
                    });
                }
            }
        } catch (error) {
            console.error("Error connecting wallet:", error);
        }

    },
}));