import LotteryHeader from "@/app/components/LotteryHeader";
import LotteryStats from "@/app/components/LotteryStats";
import LotteryEntryForm from "@/app/components/LotteryEntryForm";
import WinnerPicker from "@/app/components/WinnerPicker";
import React from "react";
import {WalletInfo} from "@/app/components/WalletInfo";


const LotteryCard: React.FC = () => {
    return (
        <div className="border border-gray-50/30 p-5 shadow-blue-500/60 shadow-lg rounded-lg min-w-80">
            <LotteryHeader/>
            <LotteryStats/>
            <WalletInfo/>
            <LotteryEntryForm/>
            <WinnerPicker/>
            {/*<WinnerAnnouncement winner={winner}/>*/}
        </div>
    );
};

export default LotteryCard;