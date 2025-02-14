import React from "react";
import {Dialog, DialogBackdrop, DialogPanel, DialogTitle} from "@headlessui/react";
import Spinner from "@/app/components/Spinner";
import {useLotteryStore} from "@/app/stores/lotteryStore";


export const DialogLoading: React.FC = () => {
    const {isLoading} = useLotteryStore()
    return (
        <Dialog open={isLoading} as="div" className="relative z-10 focus:outline-none" onClose={() => {
        }}>
            <DialogBackdrop className="fixed inset-0 bg-black/30 backdrop-blur-sm" />
            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4">
                    <DialogPanel
                        transition
                        className=" max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0 flex-col items-center justify-items-center"
                    >
                        <DialogTitle as="h3" className="text-base/7 font-medium text-white mb-3">
                            Transaction in process
                        </DialogTitle>
                        <Spinner/>
                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    )
}