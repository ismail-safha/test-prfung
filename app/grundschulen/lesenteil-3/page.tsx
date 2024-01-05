"use client";
import React, { useEffect, useState } from "react";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import Header from "../../components/Header";
import CartDroppable from "../../components/lesen/CartDroppable";

import AnswerDraggableT from "../../components/lesen/lesen-3/AnswerDraggableT";
import { lesenTeil_3 } from "../../data/Insekten_H/grundschuleData";

const LesenTeil3 = () => {
  const [cartItems, setCartItems] = useState(lesenTeil_3.carts);

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
  console.log(cartItems);

  return (
    <div className="container w-full px-2">
      <Header
        pageHome="/grundschulen"
        pageTow="/grundschulen/lesenteil-2"
        pageThree="/grundschulen/lesenteil-3"
        pageFour="/grundschulen/sprachbauchteine-1"
        pageFive="/grundschulen/sprachbauchteine-2"
      />

      <DndContext onDragEnd={addItemsToCart}>
        <main>
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
                {lesenTeil_3.answers.map((answer) => (
                  <AnswerDraggableT key={answer} answer={answer} />
                ))}
              </ul>
            </div>
          </div>
        </main>
      </DndContext>
    </div>
  );
};

export default LesenTeil3;
