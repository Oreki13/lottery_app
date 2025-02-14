import {Button, Field, Fieldset, Input, Label} from "@headlessui/react";
import clsx from "clsx";
import React from "react";
import {useWalletStore} from "@/app/stores/walletStore";
import {useLotteryStore} from "@/app/stores/lotteryStore";
import {useLotteryContractStore} from "@/app/stores/lotteryContractStore";

const LotteryEntryForm: React.FC = () => {
    const {account} = useWalletStore()
    const {enter} = useLotteryContractStore()
    const {amount, setAmount, setIsLoading} = useLotteryStore();

    const onEnter = async () => {
        setIsLoading(true);
        await enter(amount)
        setIsLoading(false);
    }

    if (account === null) return;
    return (
        <Fieldset className="mt-5">
            <Field>
                <Label className="text-sm font-medium text-white">
                    Amount of ether to enter
                </Label>
                <div className="grid grid-cols-3 gap-3 mt-3">
                    <Input
                        type="number"
                        value={amount}
                        onChange={(v) => setAmount(v.target.value)}
                        className={clsx(
                            'block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm text-white',
                            'focus:outline-none focus:outline-2 focus:outline-offset-2 focus:outline-white/25',
                            'col-span-2'
                        )}
                    />
                    <Button
                        onClick={onEnter}
                        className="rounded-md bg-gray-700 text-sm font-semibold text-white shadow-inner shadow-white/10 focus:outline-none hover:bg-gray-600"
                    >
                        Enter
                    </Button>
                </div>
            </Field>
        </Fieldset>
    );
};

export default LotteryEntryForm;