"use client";
import React, { useEffect, useState } from "react";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import AnswerDraggable from "../components/lesen/AnswerDraggable";
import CartDroppable from "../components/lesen/CartDroppable";

import Header from "../components/Header";
import { lesenTeil_1 } from "../data/Insekten_H/grundschuleData";

const LesenTeil = () => {
  const [cartItems, setCartItems] = useState(lesenTeil_1.carts);

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
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    }
  };
  useEffect(() => {
    // Retrieve cart items from local storage
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  // delete
  const handleDelete = (cartId: number) => {
    const updatedCartItems = cartItems.map((cart) => {
      if (cart.id === cartId) {
        return { ...cart, cartItemAnswers: "" };
      }
      return cart;
    });
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };
  //==

  return (
    <div className="container w-full px-2">
      <Header
        pageHome="/grundschulen"
        pageTow="/grundschulen/lesenteil-2"
        pageThree="/grundschulen/lesenteil-3"
      />

      <DndContext onDragEnd={addItemsToCart}>
        <main>
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
                {lesenTeil_1.answers.map((answer) => (
                  <AnswerDraggable key={answer} answer={answer} />
                ))}
              </ul>
            </div>
          </div>
        </main>
      </DndContext>
    </div>
  );
};

export default LesenTeil;
