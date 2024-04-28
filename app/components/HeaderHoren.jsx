"use client";

import TimerComponent from "./TimerComponent ";
import { usePathname, useRouter } from "next/navigation";

// interface HeaderProps {
//   pageHome: string;
//   pageTow: string;
//   pageThree: string;
//   pageFour: string;
//   pageFive: string;
// }
// interface ModeState {
//   mode: string;
// }

// const Header: React.FC<HeaderProps> = ({
const HeaderHoren = ({
  pageHome,
  pageTow,
  pageThree,
  pageFour,
  pageFive,
  src,
}) => {
  const pathname = usePathname();
  const router = useRouter();
  // hook dark mode

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

      <audio controls>
        <source src={src} type="audio/mpeg" />
      </audio>
      <div className="flex items-center gap-[50px]">
        <div
          className={`flex flex-col items-center border border-white rounded-lg  p-2 ${
            pathname === pageHome ? "active  bg-white" : "bg-[#777]"
          }`}
        >
          <button
            onClick={() => {
              router.push(pageHome);
            }}
          >
            <h1 className="font-bold">Hören</h1>
            <h2 className="">Teil 1</h2>
            <h3 className="">(25 Punkte)</h3>
          </button>
        </div>
        <div
          className={`flex flex-col items-center border border-white rounded-lg  p-2 ${
            pathname === pageTow ? "active  bg-white" : "bg-[#777]"
          }`}
        >
          <button
            onClick={() => {
              router.push(pageTow);
            }}
          >
            <h1 className="font-bold">Hören</h1>
            <h2 className="">Teil 2</h2>
            <h3 className="">(25 Punkte)</h3>
          </button>
        </div>

        <div
          className={`flex flex-col items-center border border-white rounded-lg  p-2 ${
            pathname === pageThree ? "active bg-[#fff]" : "bg-[#777]"
          }`}
        >
          <button
            onClick={() => {
              router.push(pageThree);
            }}
          >
            <h1 className="font-bold">Hören</h1>
            <h2 className="">Teil 3</h2>
            <h3 className="">(25 Punkte)</h3>
          </button>
        </div>
      </div>

      <TimerComponent />
    </div>
  );
};

export default HeaderHoren;
