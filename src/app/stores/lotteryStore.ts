import {create} from "zustand";

interface LotteryState {
    entries: number;
    prize: string;
    amount: string;
    winner: string;
    manager: string;
    isLoading: boolean,
    setIsLoading: (isLoading: boolean) => void,
    setEntries: (entries: number) => void;
    setPrize: (prize: string) => void;
    setAmount: (amount: string) => void;
    setWinner: (winner: string) => void;
    setManager: (manager: string) => void;
    pickWinner: () => void;
}

export const useLotteryStore = create<LotteryState>((set) => ({
    entries: 0,
    prize: "3.5",
    winner: "",
    manager: "",
    amount: "0.1",
    isLoading: false,
    setIsLoading: (isLoading) => set({isLoading}),
    setAmount: (amount) => set({amount}),
    setEntries: (entries) => set({entries}),
    setPrize: (prize) => set({prize}),
    setWinner: (winner) => set({winner}),
    setManager: (manager) => set({manager}),
    pickWinner: () => {
        const randomWinner = `0x${Math.random().toString(36).substring(2, 15)}`;
        set({winner: randomWinner});
    },
}));