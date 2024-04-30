"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";

const sections = [
  {
    title: "#Insekten 1",
    links: [
      { href: "/lesen", text: "1.1-Insekten معدل" },
      { href: "/insektenasasi", text: "1.2-Insekten Asasi" },
      { href: "/insektenasasi-3", text: "1.3-Insekten 3" },
      { href: "/schreiben-1", text: "Schreiben-1" },
      { href: "/horen-1", text: "Hören" },
    ],
    mainColor: "#bfdbfe",
    color: "#60a5fa",
  },
  {
    title: "#Grundschulen 2",
    links: [
      { href: "/grundschulen", text: "1-Grundschulen Asasi" },
      { href: "/grundschulen-1", text: "1.2-Grundschulen المعدل" },
      { href: "/schreiben-2", text: "Schreiben-2" },
    ],
    mainColor: "#00ff0038",
    color: "#51b951",
  },
  {
    title: "#Kelner 3",
    links: [
      { href: "/kelner", text: "1-kelner Asasi" },
      { href: "/kelner-1", text: "1.2-Kelner المعدل" },
      { href: "/schreiben-3", text: "Schreiben-3" },
    ],
    mainColor: "#7351d74f",
    color: "#7351d7",
  },
  {
    title: "#Meer-inseln 4",
    links: [
      { href: "/meer-inseln-2", text: "1-meer-inseln Asasi" },
      { href: "/meer-inseln", text: "1.2-Meer-Inseln المعدل" },
      { href: "/schreiben-4", text: "Schreiben-4" },
    ],
    mainColor: "#ed930640",

    color: "#ed9306",
  },
  {
    title: "#Österreichs 5",
    links: [
      { href: "/osterreichs", text: "1-Österreichs" },
      { href: "/schreiben-5", text: "Schreiben-5" },
    ],
    mainColor: "#4049544a",

    color: "#23272ccf",
  },
  {
    title: "#Limonade-N 6",
    links: [
      { href: "/limonade-n", text: "1-limonade-n" },
      { href: "/schreiben-6", text: "Schreiben-6" },
    ],
    mainColor: "#bfdbfe",

    color: "#f708ddcf",
  },
  {
    title: "#Bilder 7",
    links: [
      { href: "/bilder", text: "1-Bilder" },
      { href: "/schreiben-7", text: "Schreiben-7" },
    ],
    mainColor: "#bfdbfe",

    color: "#0d01f1",
  },
  {
    title: "#sport-ist-gesund 8",
    links: [
      { href: "/sport-ist-gesund-1", text: "1-sport gesund اساسي" },
      { href: "/sport-ist-gesund-1-1", text: "2-sport gesund-1.1 معدل" },
      { href: "/schreiben-8", text: "Schreiben-8" },
    ],
    mainColor: "#bfdbfe",

    color: "#ff0000",
  },
  {
    title: "#Tanzkurs 9",
    links: [
      { href: "/tanzkurs", text: "1-Tanzkurs" },
      { href: "/schreiben-9", text: "Schreiben-9" },
    ],
    mainColor: "#bfdbfe",

    color: "#ff6347",
  },
];

// export default async function Home() {
export default function HomePages() {
  const [currentPage, setCurrentPage] = useState(1);
  const { data: session, status } = useSession();
  const sectionsPerPage = 3;
  const totalPages = Math.ceil(sections.length / sectionsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const startIndex = (currentPage - 1) * sectionsPerPage;
  const visibleSections = sections.slice(
    startIndex,
    startIndex + sectionsPerPage
  );

  return (
    <main className="container w-full m-auto px-2 h-[100%]">
      <div className="   h-[109px]">
        <div className="flex flex-col items-center  bg-red-800 p-1 ml-1">
          <div className="flex flex-col">
            <div className="text-white font-black text-[50px]">tlc</div>
            <div className="text-white  text-[12px]">LNGUAGE TESTS</div>
          </div>
          <h1 className="font-bold text-[#fff]">
            Willkommen🖐 {session.user.name}
          </h1>
        </div>
      </div>
      <h1 className="text-center m-auto bg-[#080f26] text-[#fff] font-bold p-5 rounded-2xl  mt-5">
        lesen und sprachbauchteine
      </h1>
      {/* ===== */}
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 gap-8">
          {visibleSections.map((section, index) => (
            <div
              key={index}
              className="rounded-xl p-6"
              style={{ background: section.mainColor }}
            >
              <div className="flex items-center mb-4">
                <h1
                  className="border rounded-full py-1 px-4  text-white text-lg font-bold"
                  style={{ background: section.color }}
                >
                  {section.title}
                </h1>
                <hr className="flex-grow border-b border-gray-400 ml-4" />
              </div>
              <div className="flex flex-row justify-around items-center flex-wrap gap-4">
                {section.links.map((link, linkIndex) => (
                  <Link
                    className="block p-[40px] m-[30px] rounded-xl bg-gray-700 hover:bg-gray-800 text-white text-center font-bold  transition duration-300"
                    key={linkIndex}
                    href={link.href}
                    passHref
                  >
                    {link.text}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
            onClick={handlePrevPage}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <p className="text-gray-600 font-semibold">
            Page {currentPage} of {totalPages}
          </p>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4"
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </main>
  );
}
