"use client";

import { useState } from "react";

interface AnswerDraggableProps {
  answer: string;
  number: string;
  handleAnswerClick: (answerText: string) => void;
  onClick?: () => void;
}

const AnswerDraggableTSmal: React.FC<AnswerDraggableProps> = ({
  answer,
  number,
  onClick,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex items-center cursor-pointer" onClick={onClick}>
      <h1 onClick={toggleIsOpen} className="px-2 text-[25px] cursor-pointer">
        {isOpen ? "X" : "O"}
      </h1>
      <h1>{number}</h1>
      <div className="mt-[17px] ml-[8px] mb-[23px] bg-blue-200 p-[5px] m-[5px] rounded-lg">
        {answer}
      </div>
    </div>
  );
};

export default AnswerDraggableTSmal;
