import Link from "next/link";

export default function Home() {
  return (
    <main className="container w-full px-2 h-[100vh]">
      <div className="  bg-[#02031e] h-[109px]">
        <div className="flex flex-col items-center  bg-red-800 p-1 ml-1">
          <div className="text-white font-black text-[50px]">telc</div>
          <div className="text-white  text-[12px]">LNGUAGE TESTS</div>
        </div>
      </div>
      <h1 className="text-center m-auto bg-purple-600 p-5 rounded-2xl  mt-5">
        lesen
      </h1>
      <div className="grid grid-cols-3">
        <Link href="/lesen">
          <div className="p-10 m-10 rounded-2xl bg-[#c0c0c0e7] text-center font-bold">
            <h1>#1-Insekten Moadal</h1>
          </div>
        </Link>
      </div>
    </main>
  );
}
