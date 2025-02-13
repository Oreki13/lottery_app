import { ethers } from "ethers";
import Image from "next/image";
import { CONTRACT_ABI, CONTRACT_ADDRESS } from "./lib/constans";
import { Button, Field, Fieldset, Input, Label } from "@headlessui/react";
import clsx from "clsx";

export default function Home() {
  async function connectMetamask() {
    if (window.ethereum) {
      await window.ethereum.request({ method: "eth_requestAccounts" });
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);

      const storedNumber = await contract.getNumber();
      console.log("Stored Number:", storedNumber.toString());
    } else {
      console.log("Metamask tidak terdeteksi!");
    }
  }

  return (


    < div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]" >
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="border border-gray-50/30 p-5 shadow-blue-500/60 shadow-lg rounded-lg">
          <h1 className="text-center text-lg font-bold mb-3">Lottrey Contract</h1>
          <span className="flex mb-1">
            <p className="text-md">This contract manage by </p>
            <p className="font-bold ml-1">0xiid0wid09jd9jd13</p>
          </span>

          <p className="mb-5">There are curently 12 people entered, competing to win 3.5 ether!</p>

          <h5 className="font-bold text-md">Want to try your luck ?</h5>

          <Fieldset className="mt-5">
            <Field>
              <Label className="text-sm/6 font-medium text-white">Amount of ether to enter</Label>
              <div className="grid grid-cols-3 gap-3 mt-3">
                <Input
                  className={clsx(
                    ' block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white',
                    'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25 col-span-2'
                  )}
                />
                <Button className="rounded-md bg-gray-700  text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
                  Enter
                </Button>
              </div>
            </Field>
          </Fieldset>

          <Button className="px-3 py-1.5 w-full mt-5 rounded-md bg-gray-700  text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
            Pick the winner!
          </Button>

          <div className="flex mt-3 w-full justify-center">
            <p className="mr-1">The winner is</p>
            <p className="font-bold">0xkasjdoji9dj9q8whd98h</p>
          </div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <span className="text-xs">Copyright © 2025 Fandy.</span>
      </footer>
    </div >

  );
}
