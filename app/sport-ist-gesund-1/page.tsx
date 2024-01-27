"use client";
import React, { useEffect, useState } from "react";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import AnswerDraggable from "../components/lesen/AnswerDraggable";
import CartDroppable from "../components/lesen/CartDroppable";

import Header from "../components/Header";
import { lesenTeil_1 } from "../data/Insekten_H/sport-ist-gesund-1-Data";
import { toast } from "react-toastify";
import Image from "next/image";

const LesenTeil = () => {
  const [cartItems, setCartItems] = useState(lesenTeil_1.carts);

  const [answers, setAnswers] = useState(lesenTeil_1.answers);
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
    // localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
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
        pageHome="/sport-ist-gesund-1"
        pageTow="/sport-ist-gesund-1/lesenteil-2"
        pageThree="/sport-ist-gesund-1/lesenteil-3"
        pageFour="/sport-ist-gesund-1/sprachbauchteine-1"
        pageFive="/sport-ist-gesund-1/sprachbauchteine-2"
      />

      <DndContext onDragEnd={addItemsToCart}>
        <main key={shuffleKey}>
          <div className="w-full bg-blue-900 text-white">
            <h1 className="p-2">Leseverstehen, TEIL 1</h1>
          </div>
          <div className="flex justify-between  gap-[20px]">
            {/* div text */}
            <div className=" w-[55%] mt-[20px]">
              <p className="bg-[#f6f2bc] text-black rounded-lg p-2">
                Lesen Sie zuerst die zehn Überschriften. Lesen Sie dann die fünf
                Texte und entscheiden Sie, welche Überschrift (a-j) am besten zu
                welchem Text (1-5) passt. Tragen Sie Ihre Lösungen in den
                Antwortbogen bei den Aufgaben 1-5 ein.
              </p>
              <div className="mt-[30px] bg-[#f6f2bc] h-fit">
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
            <div className="w-[45%] mt-[30px] bg-[#ccc] rounded-lg h-fit">
              <ul>
                {answers.map((answer) => (
                  <AnswerDraggable key={answer} answer={answer} />
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

export default LesenTeil;
