"use client";

import { usePathname, useRouter } from "next/navigation";
import TimerComponentSch from "./TimerComponentSch";

const HeaderSchreben = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="flex m-auto justify-between items-center bg-[#02031e] h-[109px]">
      <div className="flex flex-col items-center  bg-red-800 p-1 ml-1">
        <button
          onClick={() => {
            router.push("/");
          }}
        >
          <div className="text-white font-black text-[50px]">telc</div>
          <div className="text-white  text-[12px]">LNGUAGE TESTS</div>
        </button>
      </div>
      <div className="flex items-center gap-[50px]">
        <div
          className={`flex flex-col items-center border border-white rounded-lg  p-2  bg-white `}
        >
          <h1 className="font-bold">Schreiben</h1>
        </div>
      </div>
      <TimerComponentSch />
    </div>
  );
};

export default HeaderSchreben;
