
import Image from "next/image";
import { SwitzerRegular } from "../../lib/localFont";

const SearchBarButton = () => {
    return(
        <button 
            className={SwitzerRegular.className + " text-3xl rounded-full bg-gradient-to-br from-black to-[#1E1E1E] p-3 transition-colors duration-700 ease-in ease-out"}
            type="submit"    
        >   
            <Image src="/icons/search.svg" width={30} height={30} alt="search" className="hover:scale-[110%] duration-300 ease-in"/>
        </button>
    )
};

export default SearchBarButton;