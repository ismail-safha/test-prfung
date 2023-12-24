"use client";

import { useState } from "react";
import Header from "../../components/Header";
import { lesenTeil_2 } from "../../data/Insekten_H/insekten_1";

const Lesenteiltow = () => {
  return (
    <div className="container w-full px-2">
      <Header />

      {/* <main>
        <div className="w-full bg-blue-900 text-white">
          <h1 className="p-2">Leseverstehen, TEIL 1</h1>
        </div>
        <div className="flex justify-between  gap-[20px]">
          
          <div className=" w-[55%] mt-[20px]">
            <p className="bg-[#f6f2bc] text-black rounded-lg p-2">
              Lesen Sie zuerst die beiden Artikel und lösen Sie dann die
              Aufgaben 6-10 zu den Texten.
            </p>
            <div className="mt-[30px]  bg-[#fbfbfb] rounded-lg h-fit">
              <h1 className="font-bold ">title</h1>
              <h1 className="font-semibold ">text</h1>
            </div>
          </div>
      
          <div className="w-[45%] mt-[30px]   h-fit">
           
            <div className="bg-[#ccc] rounded-lg my-3">
              <h1 className="px-3 pt-5 font-bold">-1 qustion</h1>
              <div className="flex gap-4  ml-5 py-1 items-center ">
                <input type="checkbox" className="w-4 h-4  " />
                <span>answersOne</span>
              </div>
              <div className="flex gap-4  ml-5 py-1 items-center ">
                <input type="checkbox" className="w-4 h-4  " />
                <span>answersTwo</span>
              </div>
              <div className="flex gap-4  ml-5 py-1 items-center ">
                <input type="checkbox" className="w-4 h-4  " />
                <span>answersThree</span>
              </div>
            </div>
          </div>
        </div>
      </main> */}
      <main>
        <div className="w-full bg-blue-900 text-white">
          <h1 className="p-2">Leseverstehen, TEIL 2</h1>
        </div>
        <div className="flex justify-between gap-[20px]">
          {/* div text */}
          <div className="w-[55%] mt-[20px]">
            <p className="bg-[#f6f2bc] text-black rounded-lg p-2">
              Lesen Sie zuerst die beiden Artikel und lösen Sie dann die
              Aufgaben 6-10 zu den Texten.
            </p>
            <div className="mt-[30px] bg-[#fbfbfb] rounded-lg h-fit">
              {/* Map through texts array */}
              {lesenTeil_2.texts.map((text, index) => (
                <div key={index} className="p-5">
                  <h1 className="font-bold">{text.title}</h1>
                  <p className="font-semibold">{text.text}</p>
                </div>
              ))}
            </div>
          </div>
          {/* div answers */}
          <div className="w-[45%] mt-[30px] h-fit">
            {/* Map through aufgabens array */}
            {lesenTeil_2.aufgabens.map((aufgabe) => (
              <div key={aufgabe.id} className="bg-[#ccc] rounded-lg my-3">
                <h1 className="px-3 pt-5 font-bold">{aufgabe.qustion}</h1>
                {/* Map through answers */}
                {Object.keys(aufgabe).map((key) =>
                  key.startsWith("answers") ? (
                    <div
                      key={key}
                      className="flex gap-4 ml-5 py-1 items-center"
                    >
                      <input type="checkbox" className="w-4 h-4" />
                      <span>{aufgabe[key]}</span>
                    </div>
                  ) : null
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Lesenteiltow;
