import React from "react";
import {useWalletStore} from "@/app/stores/walletStore";
import {useLotteryStore} from "@/app/stores/lotteryStore";


const LotteryStats: React.FC = () => {
    const {account} = useWalletStore()
    const {entries, prize} = useLotteryStore()
    if(account === null) return;
    return (
        <div className="mb-5 text-center">
            <p>
                There are currently {entries} people entered, competing to win {prize} ether!
            </p>
            <h2 className="font-bold text-md mt-2">Want to try your luck?</h2>
        </div>
    );
};

export default LotteryStats;