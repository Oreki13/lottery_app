import React from "react";
import {useWalletStore} from "@/app/stores/walletStore";
import {useLotteryContractStore} from "@/app/stores/lotteryContractStore";
import {useLotteryStore} from "@/app/stores/lotteryStore";

export const WalletInfo: React.FC = () => {
    const {account, connectWallet} = useWalletStore();
    const {getPlayers} = useLotteryContractStore()
    const {setManager, setEntries} = useLotteryStore()

    const handleConnect = async () => {
        await connectWallet();
        const playersList = await getPlayers();
        if (playersList.length === 0) return;
        setManager(playersList[0]);
        setEntries(playersList.length)
    };

    return (
        <>
            {account ? (
                <div>
                    <p className="text-white">Connected as: {account}</p>
                </div>
            ) : (
                <button
                    onClick={handleConnect}
                    className="px-4 py-2 bg-blue-700/50 rounded text-white hover:bg-blue-600 focus:outline-none w-full"
                >
                    Connect Wallet
                </button>
            )}
        </>
    )
}