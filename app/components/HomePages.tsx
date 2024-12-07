"use client";
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";

import Image from "next/image";

const sections = [
  {
    title: "#1 paul",
    links: [
      { href: "/paul", text: "paul" },
      { href: "/paul/horen", text: "Hören" },
      { href: "/paul/schreiben", text: "Schreiben" },
    ],
    mainColor: "#bfdbfe",
    color: "#60a5fa",
  },
];

export default function HomePages() {
  const [isVisible, setIsVisible] = useState(false);

  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScroll = () => {
    setIsVisible(window.scrollY > 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <main className="container w-full m-auto px-2 h-[100%]">
      <div className="   h-[150px]">
        <div className="flex flex-col items-center  bg-red-800 p-1 ">
          <div className="flex flex-col">
            <div className="text-white font-black text-[50px]">TEST</div>
            <div className="text-white  text-[12px]">LNGUAGE TESTS</div>
          </div>
        </div>
        <h1 className="font-bold text-[#fff] bg-[#040404] p-[8px] text-center">
          Willkommen🖐
        </h1>
      </div>

      {/* ===== */}
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 gap-8">
          {/* {visibleSections.map((section, index) => ( */}
          {sections.map((section, index) => (
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
          <div className="">
            <hr className="flex-grow border-b border-gray-400 ml-4" />
            <div className="flex flex-row justify-evenly items-center flex-wrap gap-4">
              <Link
                target="_blank"
                className="block p-[40px] text-3xl m-[30px] rounded-xl bg-gray-700 hover:bg-gray-800 text-white text-center font-bold  transition duration-300"
                href="https://prufung-b1.vercel.app/"
              >
                B1
              </Link>
              <Link
                target="_blank"
                className="block p-[40px] m-[30px] text-3xl rounded-xl bg-gray-700 hover:bg-gray-800 text-white text-center font-bold  transition duration-300"
                href="https://prufung-b2.vercel.app/"
              >
                B2
              </Link>
            </div>
          </div>
        </div>

        <div className="mb-4 mt-8">
          <hr className="border-b border-gray-400 ml-4" />
          <div className="flex justify-center items-center relative">
            <video
              ref={videoRef}
              className="rounded-lg shadow-lg"
              width="100%"
              height="auto"
              controls
              poster="/cover.png" // Replace with the path to your image file
            >
              <source src="/Recording-b1-done.mp4" type="video/mp4" />
            </video>
            <button
              className="absolute inset-0 flex justify-center items-center text-white"
              onClick={handlePlayPause}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                fill="currentColor"
                className={`bi ${
                  isPlaying ? "bi-pause-circle-fill" : "bi-play-circle-fill"
                }`}
                viewBox="0 0 16 16"
              >
                {isPlaying ? (
                  // <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5 6h2v4H5V6zm4 0h2v4H9V6z" />
                  ""
                ) : (
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.271 5.055a.5.5 0 0 0-.759.433v5.024a.5.5 0 0 0 .759.433l4.276-2.512a.5.5 0 0 0 0-.866L6.271 5.055z" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      <button
        className={`fixed bottom-4 right-4 z-[100] ${
          isVisible ? "block" : "hidden"
        }`}
        onClick={scrollToTop}
      >
        <div className="bg-[#60e5de] inline-block p-[5px] rounded-[10px]">
          <Image src="/up.svg" alt="" width={30} height={30} />
        </div>
      </button>
    </main>
  );
}
