"use client";
import {
  DndContext,
  DragEndEvent,
  useDroppable,
  useDraggable,
} from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

const AnswerDraggableT: React.FC<{ answer: string }> = ({ answer }) => {
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
      <input
        type="checkbox"
        value=""
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
      />
      {answer}
    </div>
  );
};

export default AnswerDraggableT;
