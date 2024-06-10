"use client";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import AnswerDraggable from "../components/lesen/AnswerDraggable";
import CartDroppable from "../components/lesen/CartDroppable";

import Image from "next/image";

import Header from "../components/Header";
import { lesenTeil_1 } from "../data/Insekten_H/kelnerData-1";

const shuffleArray = (array: any[]) => {
  return array.sort(() => Math.random() - 0.5);
};

const LesenTeil: React.FC = () => {
  const { data: session } = useSession();
  const [cartItems, setCartItems] = useState(lesenTeil_1.carts);
  const [checkResult, setCheckResult] = useState<(boolean | undefined)[]>([]);
  const [selectedCartId, setSelectedCartId] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  //====

  const [answers, setAnswers] = useState(lesenTeil_1.answers);

  const shuffleAnswers = () => {
    const texts = answers.map((answer) => answer.text);
    const shuffledTexts = shuffleArray(texts);

    const shuffledAnswers = answers.map((answer, index) => ({
      ...answer,
      text: shuffledTexts[index],
    }));

    setAnswers(shuffledAnswers);
    console.log("answers", answers);
  };
  //====

  const addItemsToCart = (event: DragEndEvent) => {
    const { active, over } = event;
    if (active && over) {
      const cartIndex = parseInt(
        (over.id as string).split("-").pop() || "",
        10
      );
      const updatedCartItems = [...cartItems];
      updatedCartItems[cartIndex].cartItemAnswers = active.id.toString();
      setCartItems(updatedCartItems);
    }
  };

  const handleDelete = (cartId: number) => {
    const updatedCartItems = cartItems.map((cart) => {
      if (cart.id === cartId) {
        return { ...cart, cartItemAnswers: "" };
      }
      return cart;
    });
    setCartItems(updatedCartItems);
  };

  const checkAnswers = () => {
    const results = cartItems.map(
      (cart) => cart.cartItemAnswers === cart.cartAcoordion
    );
    setCheckResult(results);
  };

  const resetCheckResult = () => {
    setCartItems(
      lesenTeil_1.carts.map((cart) => ({ ...cart, cartItemAnswers: "" }))
    );
    setCheckResult([]);
    setSelectedCartId(null);
  };

  const handleAnswerClick = (answerText: string) => {
    if (selectedCartId !== null) {
      const updatedCartItems = cartItems.map((item) =>
        item.id === selectedCartId
          ? { ...item, cartItemAnswers: answerText }
          : item
      );
      setCartItems(updatedCartItems);
    }
  };

  const handleInputClick = (cartId: number) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) =>
        item.id === cartId ? { ...item, cartItemAnswers: "" } : item
      )
    );
    setSelectedCartId(cartId);
  };

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

  return (
    session && (
      <div className="container m-auto  w-full px-2">
        <Header
          pageHome="/kelner-1"
          pageTow="/kelner-1/lesenteil-2"
          pageThree="/kelner-1/lesenteil-3"
          pageFour="/kelner-1/sprachbauchteine-1"
          pageFive="/kelner-1/sprachbauchteine-2"
        />
        <DndContext onDragEnd={addItemsToCart}>
          <main>
            <div className="w-full bg-blue-900 text-white">
              <h1 className="p-2">Leseverstehen, TEIL 1</h1>
            </div>
            <div className="flex flex-col lg:flex-row justify-between gap-[20px]">
              {/* div text */}
              <div className=" w-full lg:w-[55%] mt-[20px]">
                <p className="bg-[#f6f2bc] dark:bg-[#9e9d98] text-black rounded-lg p-2">
                  Lesen Sie zuerst die zehn Überschriften. Lesen Sie dann die
                  fünf Texte und entscheiden Sie, welche Überschrift (a-j) am
                  besten zu welchem Text (1-5) passt. Tragen Sie Ihre Lösungen
                  in den Antwortbogen bei den Aufgaben 1-5 ein.
                </p>
                <div className="mt-[30px] bg-[#f6f2bc] dark:bg-[#9e9d98] overflow-y-scroll h-[650px]">
                  {cartItems.map((cart, index) => (
                    <CartDroppable
                      key={cart.id}
                      cart={cart}
                      isCorrect={checkResult[index]}
                      onDelete={() => handleDelete(cart.id)}
                      onClick={() => handleInputClick(cart.id)}
                    />
                  ))}
                </div>
              </div>
              {/* div answers */}
              <div className="w-full lg:w-[45%] mt-[30px] bg-[#ccc] dark:bg-[#777] rounded-lg h-fit">
                <div className="hidden lg:block">
                  {lesenTeil_1.answers.map((answer) => (
                    <AnswerDraggable
                      key={answer.id}
                      answer={answer.text}
                      number={answer.number}
                      handleAnswerClick={handleAnswerClick}
                    />
                  ))}
                </div>
                <div className="block lg:hidden">
                  {answers.map((answer) => (
                    <div
                      key={answer.id}
                      className="flex items-center cursor-pointer"
                      onClick={() => handleAnswerClick(answer.text)}
                    >
                      <h1 className="pl-3">{answer.number}</h1>
                      <div className="p-[5px] m-[10px] rounded-lg bg-blue-200">
                        {answer.text}
                      </div>
                    </div>
                  ))}
                </div>
                {/* check Answers */}
                <div className="flex justify-center gap-[10px] m-[20px]">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
                    onClick={checkAnswers}
                  >
                    Check Answers
                  </button>
                  <button
                    onClick={shuffleAnswers}
                    className="bg-[#c37e2fc7] block lg:hidden hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded mt-4"
                  >
                    Shuffle 🔄
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
