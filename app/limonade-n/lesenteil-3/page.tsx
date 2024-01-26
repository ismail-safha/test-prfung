"use client";
import React, { useEffect, useState } from "react";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import Header from "../../components/Header";
import CartDroppable from "../../components/lesen/CartDroppable";

import AnswerDraggableT from "../../components/lesen/lesen-3/AnswerDraggableT";
import { lesenTeil_3 } from "../../data/Insekten_H/limonade-nData";
import { toast } from "react-toastify";
import Image from "next/image";

const LesenTeil3 = () => {
  const [cartItems, setCartItems] = useState(lesenTeil_3.carts);
  const [answers, setAnswers] = useState(lesenTeil_3.answers);
  const [shuffleKey, setShuffleKey] = useState(0);

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

      // Save updated cart items to local storage
      // localStorage.setItem("cartItems_3", JSON.stringify(updatedCartItems));
    }
  };
  // useEffect(() => {
  //   // Retrieve cart items from local storage
  //   const storedCartItems = localStorage.getItem("cartItems_3");
  //   if (storedCartItems) {
  //     setCartItems(JSON.parse(storedCartItems));
  //   }
  // }, []);

  // delete
  const handleDelete = (cartId: number) => {
    const updatedCartItems = cartItems.map((cart) => {
      if (cart.id === cartId) {
        return { ...cart, cartItemAnswers: "" };
      }
      return cart;
    });
    setCartItems(updatedCartItems);
    // localStorage.setItem("cartItems_3", JSON.stringify(updatedCartItems));
  };
  //==
  const shuffleAnswers = () => {
    const shuffledAnswers = [...answers].sort(() => Math.random() - 0.5);
    setAnswers(shuffledAnswers);

    // Increment the key to force re-render of the component displaying answers
    setShuffleKey((prevKey) => prevKey + 1);

    // Show toast notification
    toast.success("Antworten schalten 🔄");
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
    <div className="container m-auto w-full px-2">
      <Header
        pageHome="/limonade-n"
        pageTow="/limonade-n/lesenteil-2"
        pageThree="/limonade-n/lesenteil-3"
        pageFour="/limonade-n/sprachbauchteine-1"
        pageFive="/limonade-n/sprachbauchteine-2"
      />

      <DndContext onDragEnd={addItemsToCart}>
        <main key={shuffleKey}>
          <div className="w-full bg-blue-900 text-white">
            <h1 className="p-2">Leseverstehen, TEIL 3</h1>
          </div>
          <div className="flex justify-between  gap-[20px]">
            {/* div text */}
            <div className=" w-[60%] mt-[20px]">
              <p className="bg-[#f6f2bc] text-black rounded-lg p-2">
                Lesen Sie zuerst die zehn Situationen (11-20) und dann die zwölf
                Info-Texte (a-l). Welcher Info-Text passt zu welcher Situation?
                Sie können jeden Info-Text nur einmal verwenden. Markieren Sie
                Ihre Lösungen auf dem Antwortbogen bei den Aufgaben 11-20.
                Manchmal gibt es keine Lösung. Markieren Sie dann x.
              </p>
              <div className="mt-[30px] bg-[#f6f2bc] overflow-y-auto h-fit grid grid-cols-2">
                {cartItems.map((cart) => (
                  <CartDroppable
                    key={cart.id}
                    cart={cart}
                    onDelete={() => handleDelete(cart.id)}
                  />
                ))}
              </div>
            </div>
            {/* div answers */}
            <div className="w-[40%] mt-[30px] bg-[#ccc] rounded-lg h-fit">
              <ul>
                {answers.map((answer) => (
                  <AnswerDraggableT key={answer} answer={answer} />
                ))}
              </ul>
              <div className="shuffleAnswersDiv ">
                <button onClick={shuffleAnswers} className="shuffleAnswers">
                  <Image src="/shuffle.png" alt="" width={35} height={35} />
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
  );
};

export default LesenTeil3;
