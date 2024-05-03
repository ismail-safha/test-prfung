"use client";

import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import AnswerDraggable from "../components/lesen/AnswerDraggable";
import CartDroppable from "../components/lesen/CartDroppable";

import Image from "next/image";

import Header from "../components/Header";
import { lesenTeil_1 } from "../data/Insekten_H/sport-ist-gesund-1-1-Data";

const LesenTeil = () => {
  const [cartItems, setCartItems] = useState(lesenTeil_1.carts);
  const [checkResult, setCheckResult] = useState<(boolean | undefined)[]>([]);
  const { data: session } = useSession();

  const addItemsToCart = (event: DragEndEvent) => {
    const { active, over } = event;
    if (active && over) {
      const cartIndex = parseInt(
        (over.id as string).split("-").pop() || "",
        10
      );
      const updatedCartItems = [...cartItems];
      updatedCartItems[cartIndex].cartItemAnswers = active.id.toString(); // Convert to string
      setCartItems(updatedCartItems);
    }
  };

  // delete
  const handleDelete = (cartId: number) => {
    const updatedCartItems = cartItems.map((cart) => {
      if (cart.id === cartId) {
        return { ...cart, cartItemAnswers: "" };
      }
      return cart;
    });
    setCartItems(updatedCartItems);
  };
  // checkAnswers
  const checkAnswers = () => {
    const results = cartItems.map(
      (cart) => cart.cartItemAnswers === cart.cartAcoordion
    );
    setCheckResult(results);
  };
  // console.log("checkResult", checkResult);

  const resetCheckResult = () => {
    setCheckResult([]);
  };

  // scroll up

  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    session && (
      <div className="container m-auto  w-full px-2">
        <Header
          pageHome="/sport-ist-gesund-1-1"
          pageTow="/sport-ist-gesund-1-1/lesenteil-2"
          pageThree="/sport-ist-gesund-1-1/lesenteil-3"
          pageFour="/sport-ist-gesund-1-1/sprachbauchteine-1"
          pageFive="/sport-ist-gesund-1-1/sprachbauchteine-2"
        />

        <DndContext onDragEnd={addItemsToCart}>
          <main>
            <div className="w-full bg-blue-900 text-white">
              <h1 className="p-2">Leseverstehen, TEIL 1</h1>
            </div>
            <div className="flex justify-between  gap-[20px]">
              {/* div text */}
              <div className=" w-[55%] mt-[20px]">
                <p className="bg-[#f6f2bc] dark:bg-[#9e9d98] text-black rounded-lg p-2">
                  Lesen Sie zuerst die zehn Überschriften. Lesen Sie dann die
                  fünf Texte und entscheiden Sie, welche Überschrift (a-j) am
                  besten zu welchem Text (1-5) passt. Tragen Sie Ihre Lösungen
                  in den Antwortbogen bei den Aufgaben 1-5 ein.
                </p>
                <div className="mt-[30px] bg-[#f6f2bc] dark:bg-[#9e9d98] h-fit">
                  {cartItems.map((cart, index) => (
                    <CartDroppable
                      key={cart.id}
                      cart={cart}
                      isCorrect={checkResult[index]}
                      onDelete={() => handleDelete(cart.id)}
                    />
                  ))}
                </div>
              </div>
              {/* div answers */}
              <div className="w-[45%] mt-[30px] bg-[#ccc] dark:bg-[#777] rounded-lg h-fit">
                {lesenTeil_1.answers.map((answer) => (
                  <div key={answer.number}>
                    <AnswerDraggable
                      answer={answer.text}
                      number={answer.number}
                    />
                  </div>
                ))}
                {/* check Answers */}
                <div className="flex justify-center m-[20px]">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
                    onClick={checkAnswers}
                  >
                    Check Answers
                  </button>
                  <button
                    className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-4 ml-2"
                    onClick={resetCheckResult}
                  >
                    Reset
                  </button>
                </div>
              </div>
            </div>
          </main>
        </DndContext>
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
      </div>
    )
  );
};

export default LesenTeil;
