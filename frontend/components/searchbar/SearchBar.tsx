"use client";

import { SwitzerRegular } from "../../lib/localFont";
import Image from "next/image";
import SearchBarButton from "./SearchBarButton";

const SearchBar = () => {
    return(
        <div className={SwitzerRegular.className + " flex flex-row gap-x-4 rounded-full p-2 w-1/3 text-xl text-white placeholder-white dark:text-white bg-gradient-to-br from-[#13F55F] to-[#098AAD]"}>
            <Image src="/icons/aircraft.svg" width={24} height={24} alt="plane image" className="select-none float-left justify-center self-center ml-5 mt-0.5"/>
            <input
                type="text"
                placeholder="Enter your airframe code"
                className="text-xl text-white placeholder-white dark:text-white bg-transparent w-full p-2"
                onChange={() => {console.log("Search bar changed")}}
            />
            <SearchBarButton/>
        </div>
    )
};

export default SearchBar;