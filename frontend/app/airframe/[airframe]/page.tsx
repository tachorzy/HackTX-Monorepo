import Navbar from "../../../components/Navbar";

export default function Home({ params } : { airframe: string }) {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-[#F9F9F9]">
      <Navbar/>
      <div className="flex flex-col mt-24 w-full">
        <h1 className="text-5xl text-gray-300">{params.airframe}</h1>
      </div>
    </div>
  );
}
