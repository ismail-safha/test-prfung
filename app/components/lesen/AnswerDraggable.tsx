"use client";
import {
  DndContext,
  DragEndEvent,
  useDroppable,
  useDraggable,
} from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

const AnswerDraggable: React.FC<{ answer: string }> = ({ answer }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: answer,
    data: { answer },
  });

  return (
    <div
      ref={setNodeRef}
      className="mt-[17px] ml-[8px] mb-[23px] bg-blue-200 p-[5px] m-[5px] rounded-lg"
      style={{ transform: CSS.Translate.toString(transform) }}
      {...attributes}
      {...listeners}
    >
     
      {answer}
    </div>
  );
};

export default AnswerDraggable;
