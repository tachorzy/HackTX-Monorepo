"use client";

import { SwitzerRegular } from "../../lib/localFont";
import SearchBar from "./SearchBar";

const SearchBarWrapper = () => {
    
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

    }

    return(
        <form 
            className={SwitzerRegular.className + " flex flex-row p-2 rounded-full gap-x-0.5"}
            onSubmit={handleSubmit}
        >
            <SearchBar/>
        </form>
    )
};

export default SearchBarWrapper;