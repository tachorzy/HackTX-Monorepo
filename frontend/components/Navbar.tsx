import Image from "next/image";
import { SwitzerMedium } from "../lib/localFont";

const Navbar = () => {
    return(
        <div className="absolute top-0 left-0 my-16 ml-16 flex flex-row gap-x-2 text-4xl align-baseline">
            <Image src="/icons/FleetSignalLogo.svg" width={40} height={40} alt="FleetSignal logo"/>
            <h1 className={SwitzerMedium.className + " font-medium text-[#1E1E1E]"}>FleetSignal</h1>
        </div>

    )
};

export default Navbar;