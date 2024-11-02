import SearchBar from "../components/searchbar/SearchBar";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-[#F9F9F9]">
      <Navbar/>
      <SearchBar/>
    </div>
  );
}
