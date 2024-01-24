import Link from "next/link";

export default function Home() {
  return (
    <main className="container w-full m-auto px-2 h-[100%]">
      <div className="  bg-[#02031e] h-[109px]">
        <div className="flex flex-col items-center  bg-red-800 p-1 ml-1">
          <div className="text-white font-black text-[50px]">telc</div>
          <div className="text-white  text-[12px]">LNGUAGE TESTS</div>
        </div>
      </div>
      <h1 className="text-center m-auto bg-[#080f26] text-[#fff] font-bold p-5 rounded-2xl  mt-5">
        lesen und sprachbauchteine
      </h1>
      <div className="grid grid-cols-4">
        <Link href="/lesen">
          <div className="p-10 m-10 rounded-2xl bg-[#fd7676] text-center font-bold ">
            <h1>#1.1-Insekten معدل</h1>
          </div>
        </Link>
        <Link href="/insektenasasi">
          <div className="p-10 m-10 rounded-2xl bg-[#fd7676] text-center font-bold ">
            <h1>#1.2-Insekten Asasi</h1>
          </div>
        </Link>
        <Link href="insektenasasi-3">
          <div className="p-10 m-10 rounded-2xl bg-[#fd7676] text-center font-bold ">
            <h1>#1.3-Insekten 3</h1>
          </div>
        </Link>
        <Link href="/grundschulen">
          <div className="p-10 m-10 rounded-2xl bg-[#3decff] text-center font-bold ">
            <h1>#2-Grundschulen </h1>
          </div>
        </Link>
        <Link href="/kelner">
          <div className="p-10 m-10 rounded-2xl bg-[#6e3d09] text-center font-bold ">
            <h1>#3-Kelner </h1>
          </div>
        </Link>
        <Link href="/meer-inseln">
          <div className="p-10 m-10 rounded-2xl bg-[#51b951] text-center font-bold h-[100px]">
            <h1>#4.1-Meer-Inseln معدل </h1>
          </div>
        </Link>
        <Link href="/meer-inseln-2">
          <div className="p-10 m-10 rounded-2xl bg-[#51b951] text-center font-bold h-[100px]">
            <h1>#4.2-Meer-Inseln اساسي </h1>
          </div>
        </Link>
        <Link href="/osterreichs">
          <div className="p-10 m-10 rounded-2xl bg-[#7351d7] text-center font-bold h-[100px]">
            <h1>#5-Österreichs </h1>
          </div>
        </Link>
        <Link href="/limonade-n">
          <div className="p-10 m-10 rounded-2xl bg-[#ed9306] text-center font-bold h-[100px]">
            <h1>#6-limonade-N </h1>
          </div>
        </Link>
        <Link href="/limonade-1">
          <div className="p-10 m-10 rounded-2xl bg-[#ed9306] text-center font-bold h-[100px]">
            <h1>#6-limonade-1.1 </h1>
          </div>
        </Link>
      </div>
    </main>
  );
}
