"use client";

import { SwitzerRegular } from "../lib/localFont";
import Image from "next/image";

const SearchBar = () => {
    return(
        <div className={SwitzerRegular.className + " flex flex-row p-2 rounded-full"}>
            <Image src="/icons/aircraft.svg" width={24} height={24} alt="plane image" className="absolute select-none float-left justify-center self-center ml-5 mt-0.5"/>
            <input
                type="text"
                placeholder="Enter your airframe code"
                className="rounded-full w-full pl-14 p-4 text-xl text-white placeholder-white dark:text-white bg-gradient-to-br from-[#13F55F] to-[#098AAD]"
                onChange={() => {console.log("Search bar changed")}}
            />  
        </div>
    )
};

export default SearchBar;