'use client'
import {Button} from "@headlessui/react";
import React from "react";


const WinnerPicker: React.FC = () => {

    const onPickWinner = () => {
    }
    return (
        <Button
            onClick={onPickWinner}
            className="px-3 py-1.5 w-full mt-5 rounded-md bg-gray-700 text-sm font-semibold text-white shadow-inner shadow-white/10 focus:outline-none hover:bg-gray-600"
        >
            Pick the winner!
        </Button>
    );
};

export default WinnerPicker;