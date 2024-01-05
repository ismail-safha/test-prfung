import React from "react";
import { DndContext } from "@dnd-kit/core";
import { useDroppable } from "@dnd-kit/core";

interface DroppableContainerProps {
  children: React.ReactNode;
}

const DroppableContainer: React.FC<DroppableContainerProps> = ({
  children,
}) => {
  const { isOver, setNodeRef } = useDroppable({
    id: "droppable-container",
  });

  return (
    <div
      ref={setNodeRef}
      style={{
        border: isOver ? "2px solid green" : "2px dashed black",
        minHeight: "50px",
      }}
    >
      {children}
    </div>
  );
};

export default DroppableContainer;
