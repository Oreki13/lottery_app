'use client'
import {Footer} from "@/app/components/Footer";
import LotteryCard from "@/app/components/LotteryCard";
import {useLotteryContractStore} from "@/app/stores/lotteryContractStore";
import {useLotteryStore} from "@/app/stores/lotteryStore";
import {useEffect} from "react";
import {useWalletStore} from "@/app/stores/walletStore";
import {DialogLoading} from "@/app/components/DialogLoading";

export default function Home() {
    const {getPlayers, manager} = useLotteryContractStore()
    const {account, checkWalletConnection} = useWalletStore();
    const {setManager, setEntries} = useLotteryStore()

    useEffect(() => {
        void checkWalletConnection();
    }, [checkWalletConnection]);

    useEffect(() => {
        const getPlayersAndManager = async () => {
            if (!account) return;
            setManager(await manager());
            const playersList = await getPlayers();
            if (playersList.length === 0) return;
            setEntries(playersList.length);
        };

        void getPlayersAndManager();
    }, [account, getPlayers, setManager, setEntries]);

    return (
        <div
            className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                <LotteryCard/>
            </main>
            <Footer/>
            <DialogLoading/>
        </div>

    );
}
