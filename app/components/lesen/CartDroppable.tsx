"use client";

import React, { useState } from "react";
import { useDroppable } from "@dnd-kit/core";

interface ICartDroppable {
  cart: {
    id: number;
    idText?: string;
    title: string;
    cartItemAnswers: string;
    cartAcoordion?: string;
  };
  onDelete?: () => void;
  onClick?: () => void;
  isCorrect?: boolean;
}

const CartDroppable: React.FC<ICartDroppable> = ({
  cart,
  onDelete,
  isCorrect,
  onClick,
}) => {
  const [isAccordionOpen, setAccordionOpen] = useState(false);

  const { setNodeRef, isOver } = useDroppable({
    id: `cart-droppable-${cart.id}`,
  });

  const toggleAccordion = () => {
    setAccordionOpen(!isAccordionOpen);
  };

  return (
    <div
      className={`bg-[#777] p-[10px] m-[3px] ${isOver ? "bg-green-200" : ""} ${
        isCorrect !== undefined
          ? isCorrect
            ? "bg-green-300"
            : "bg-red-300"
          : ""
      }`}
      ref={setNodeRef}
    >
      <span className="px-2 py-1 text-[#0b0b0b] text-center border border-[#fff]">
        {cart.idText}
      </span>
      {/* Large Screen */}
      <div className="hidden lg:block">
        <h1
          onClick={onClick}
          className="bg-blue-500 p-[10px] m-[10px] flex justify-between items-center rounded-[9px]"
        >
          {cart.cartItemAnswers}
        </h1>
      </div>
      {/* Small and Tablet Screen */}
      <div className="block lg:hidden">
        <input
          type="text"
          className="bg-blue-500 p-[10px] my-[10px] w-full flex justify-between items-center rounded-[9px]"
          value={cart.cartItemAnswers}
          onClick={onClick}
          readOnly
        />
      </div>
      <p className="bg-[#efefef] dark:bg-[#1d2a35] dark:text-[#ededed] font-semibold p-[10px] m-[10px]">
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
