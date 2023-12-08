"use client";

import React, { useState } from "react";
import { useDroppable } from "@dnd-kit/core";

interface ICartDroppable {
  cart: {
    id: number;
    title: string;
    cartItemAnswers: string;
    cartAcoordion?: string;
  };
  onDelete?: () => void;
}

const CartDroppable: React.FC<ICartDroppable> = ({ cart, onDelete }) => {
  const [isAccordionOpen, setAccordionOpen] = useState(false);

  const { setNodeRef, isOver } = useDroppable({
    id: `cart-droppable-${cart.id}`,
  });

  const toggleAccordion = () => {
    setAccordionOpen(!isAccordionOpen);
  };

  return (
    <div className="bg-[#777] p-[10px] m-[3px]" ref={setNodeRef}>
      <h1 className="bg-blue-500 p-[10px] m-[10px] flex justify-between items-center">
        {cart.cartItemAnswers}
        {cart.cartItemAnswers && (
          <button onClick={onDelete} className="delete-button">
            X
          </button>
        )}
      </h1>

      <p className="bg-[#efefef] font-semibold p-[10px] m-[10px] ">
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
