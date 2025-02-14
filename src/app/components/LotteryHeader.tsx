import React from "react";
import {useLotteryStore} from "@/app/stores/lotteryStore";


const LotteryHeader: React.FC = () => {
    const {manager} = useLotteryStore()
    return (
        <div className="text-center mb-3">
            <h1 className="text-lg font-bold">Lottery Contract</h1>
            {manager && <div className="flex justify-center mb-1">
                <p className="text-md">This contract is managed by</p>
                <p className="font-bold ml-1">{manager}</p>
            </div>}
        </div>
    );
};

export default LotteryHeader;