"use client";
import {
  DndContext,
  DragEndEvent,
  useDroppable,
  useDraggable,
} from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import React, { useState, useEffect } from "react";

const AnswerDraggable: React.FC<{ answer: string; number: string }> = ({
  answer,
  number,
}) => {
  const [isActive, setIsActive] = useState(false);

  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({
      id: answer,
      data: { answer },
    });

  // add class Active
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
