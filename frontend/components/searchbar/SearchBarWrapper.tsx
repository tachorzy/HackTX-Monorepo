"use client";

import { SwitzerRegular } from "../../lib/localFont";
import SearchBar from "./SearchBar";

const SearchBarWrapper = () => {

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        console.log(`Form submitted`);

        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData.entries());

        try { 
            const response = await fetch(`/api/airframe/${data.airframeCode}`);
            const airframe = await response.json();
            console.log(airframe);
        } catch (error) {
            console.error(error);
        }
    }

    return(
        <form 
            className={SwitzerRegular.className + " flex flex-row p-2 rounded-full gap-x-0.5"}
            method="POST"
            onSubmit={handleSubmit}
        >
            <SearchBar/>
        </form>
    )
};

export default SearchBarWrapper;