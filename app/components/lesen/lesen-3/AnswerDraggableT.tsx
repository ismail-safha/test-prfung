"use client";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { useState } from "react";

interface AnswerDraggableProps {
  answer: string;
  number: string;
  handleAnswerClick: (answerText: string) => void;
}

const AnswerDraggableT: React.FC<AnswerDraggableProps> = ({
  answer,
  number,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: answer,
    data: { answer },
  });

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex items-center">
      <h1 onClick={toggleIsOpen} className="px-2 text-[25px] cursor-pointer">
        {isOpen ? "X" : "O"}
      </h1>
      <h1>{number}</h1>
      <div
        ref={setNodeRef}
        className="mt-[17px] ml-[8px] mb-[23px] bg-blue-200 p-[5px] m-[5px] rounded-lg"
        style={{ transform: CSS.Translate.toString(transform) }}
        {...attributes}
        {...listeners}
      >
        {answer}
      </div>
    </div>
  );
};

export default AnswerDraggableT;
