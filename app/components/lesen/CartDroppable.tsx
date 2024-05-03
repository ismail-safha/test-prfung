"use client";

import React, { useState } from "react";
import { useDroppable } from "@dnd-kit/core";

interface ICartDroppable {
  cart: {
    id: number;
    idText?: string;
    titleText?: string;
    title: string;
    cartItemAnswers: string;
    cartAcoordion?: string;
  };
  onDelete?: () => void;
  isCorrect?: boolean;
}

const CartDroppable: React.FC<ICartDroppable> = ({
  cart,
  onDelete,
  isCorrect,
}) => {
  const [isAccordionOpen, setAccordionOpen] = useState(false);

  const { setNodeRef, isOver } = useDroppable({
    id: `cart-droppable-${cart.id}`,
  });
  // add class toggle
  const toggleAccordion = () => {
    setAccordionOpen(!isAccordionOpen);
  };

  // console.log("cart is Correct", isCorrect);

  return (
    <div
      className={`bg-[#777] p-[10px] m-[3px] ${isOver ? "bg-green-200" : ""}  ${
        isCorrect !== undefined
          ? isCorrect
            ? "bg-green-300"
            : "bg-red-300"
          : ""
      } `}
      ref={setNodeRef}
    >
      <span className="px-2 py-1  text-[#0b0b0b] text-center border border-[#fff] ">
        {cart.idText}
      </span>
      <h1
        className={`bg-blue-500 p-[10px] m-[10px] flex justify-between items-center rounded-[9px] `}
      >
        {cart.cartItemAnswers}

        {cart.cartItemAnswers && (
          <button onClick={onDelete} className="delete-button">
            X
          </button>
        )}
      </h1>

      <p className="bg-[#efefef] dark:bg-[#1d2a35]  dark:text-[#ededed]  font-semibold p-[10px] m-[10px] ">
        <div className="font-bold text-[15px]">{cart.titleText}</div>
        {cart.title}
      </p>
      <h1 onClick={toggleAccordion} className="accordion-header">
        {isAccordionOpen ? "Hide" : "Show"}
      </h1>
      {isAccordionOpen && (
        <div className="cart-accordion">{cart.cartAcoordion}</div>
      )}
    </div>
  );
};

export default CartDroppable;
