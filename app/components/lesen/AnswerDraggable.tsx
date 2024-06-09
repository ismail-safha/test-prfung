"use client";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import React, { useState } from "react";

interface AnswerDraggableProps {
  answer: string;
  number: string;
  handleAnswerClick: (answerText: string) => void;
}

const AnswerDraggable: React.FC<AnswerDraggableProps> = ({
  answer,
  number,
}) => {
  const [isActive, setIsActive] = useState(false);

  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({
      id: answer,
      data: { answer },
    });

  const addClassActive = () => {
    setIsActive((prevIsActive) => !prevIsActive);
  };

  return (
    <div className="flex items-center">
      <h1 className="pl-3">{number}</h1>
      <div
        ref={setNodeRef}
        onClick={addClassActive}
        className={`m-3 ${
          isDragging ? "bg-[#7778]" : "bg-blue-200"
        } p-[5px] m-[10px] rounded-lg ${isActive ? "bg-[#7778]" : ""}`}
        style={{ transform: CSS.Translate.toString(transform) }}
        {...attributes}
        {...listeners}
      >
        {answer}
      </div>
    </div>
  );
};

export default AnswerDraggable;
