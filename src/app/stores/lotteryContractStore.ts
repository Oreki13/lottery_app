import {create} from "zustand";
import {ethers} from "ethers";
import {useWalletStore} from "./walletStore";

interface LotteryContractState {
    enter: (amountInEther: string) => Promise<void>;
    manager: () => Promise<string>;
    pickWinner: () => Promise<void>;
    getPlayers: () => Promise<string[]>;
}

export const useLotteryContractStore = create<LotteryContractState>(() => ({
    manager: async () => {
        const {contract} = useWalletStore.getState();
        if (!contract) {
            console.error("Smart contract not connected.");
            return '';
        }
        try {
            const manager: string = await contract.manager();
            return manager;
        } catch (error) {
            console.error("Error calling enter():", error);
            return '';
        }
    },
    enter: async (amountInEther) => {
        const {contract} = useWalletStore.getState();
        if (!contract) {
            console.error("Smart contract not connected.");
            return;
        }
        try {
            const tx: ethers.ContractTransactionResponse = await contract.enter({
                value: ethers.parseEther(amountInEther),
            });
            await tx.wait();

            console.log("Entered the lottery!");
        } catch (error) {
            console.error("Error calling enter():", error);
        }
    },

    pickWinner: async () => {
        const {contract} = useWalletStore.getState();
        if (!contract) {
            console.error("Smart contract not connected.");
            return;
        }
        try {
            const tx: ethers.ContractTransactionResponse = await contract.pickWinner();
            await tx.wait();
            console.log("Winner picked!");
        } catch (error) {
            console.error("Error calling pickWinner():", error);
        }
    },

    getPlayers: async () => {
        const {contract} = useWalletStore.getState();
        if (!contract) {
            console.error("Smart contract not connected.");
            return [];
        }
        try {
            const players: string[] = await contract.getPlayers();
            console.log("Players:", players);
            return players;
        } catch (error) {
            console.error("Error calling getPlayers():", error);
            return [];
        }
    },
}));
