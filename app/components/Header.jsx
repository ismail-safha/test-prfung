"use client";

import TimerComponent from "./TimerComponent ";
import { usePathname, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

import { MoonIcon, SunIcon } from "./icons/Icons";
import useThemSwitcher from "./hooks/useThemSwitcher";

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
const Header = ({ pageHome, pageTow, pageThree, pageFour, pageFive }) => {
  const pathname = usePathname();
  const { data: session, status } = useSession();

  const router = useRouter();
  // hook dark mode
  const [mode, setMode] = useThemSwitcher();

  return (
    <div className="flex m-auto justify-between items-center bg-[#02031e] h-[109px]">
      <div className="flex flex-col items-center  bg-red-800 p-1 ml-1">
        <button
          onClick={() => {
            router.push("/");
          }}
        >
          <div className="text-white font-black text-[50px]">tlc</div>
          <div className="text-white  text-[12px]">LNGUAGE TESTS</div>
        </button>
      </div>
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
            <h1 className="font-bold">Leseverstehen</h1>
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
            <h1 className="font-bold">Leseverstehen</h1>
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
            <h1 className="font-bold">Leseverstehen</h1>
            <h2 className="">Teil 3</h2>
            <h3 className="">(25 Punkte)</h3>
          </button>
        </div>
        <div
          className={`flex flex-col items-center border border-white rounded-lg  p-2 ${
            pathname === pageFour ? "active bg-[#fff]" : "bg-[#777]"
          }`}
        >
          <button
            onClick={() => {
              router.push(pageFour);
            }}
          >
            <h1 className="font-bold">Sprachbauchteine</h1>
            <h2 className="">Teil 1</h2>
            <h3 className="">(15 Punkte)</h3>
          </button>
        </div>
        <div
          className={`flex flex-col items-center border border-white rounded-lg  p-2 ${
            pathname === pageFive ? "active bg-[#fff]" : "bg-[#777]"
          }`}
        >
          <button
            onClick={() => {
              router.push(pageFive);
            }}
          >
            <h1 className="font-bold">Sprachbauchteine</h1>
            <h2 className="">Teil 2</h2>
            <h3 className="">(15 Punkte)</h3>
          </button>
        </div>
      </div>

      <button
        onClick={() => setMode(mode === "light" ? "dark" : "light")}
        className={` ml-3 flex items-center justify-center rounded-full p-2 text-[#fff] bg-[#000] dark:bg-[#fff] dark:text-[#000] ${
          mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
        }`}
      >
        {mode === "dark" ? (
          <SunIcon className={"fill-dark "} />
        ) : (
          <MoonIcon className={"fill-dark"} />
        )}
      </button>

      <h1 className="font-bold text-[#fff]">
        Willkommen🖐 {session.user.name}
      </h1>

      <TimerComponent />
    </div>
  );
};

export default Header;
