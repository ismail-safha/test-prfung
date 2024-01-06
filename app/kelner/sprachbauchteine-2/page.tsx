"use client";
import React, { useRef, useState } from "react";
import {
  DndContext,
  DragEndEvent,
  useDraggable,
  useDroppable,
} from "@dnd-kit/core";
import Header from "../../components/Header";
import { sprachbau_2 } from "../../data/Insekten_H/kelnerData";

interface Answer {
  id: number;
  title: string;
  answer?: string;
}

const DraggableItem: React.FC<{ answer: string; id: number }> = ({
  answer,
  id,
}) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: String(id),
  });

  return (
    <div
      ref={setNodeRef}
      className="font-bold  px-2"
      style={{
        transform: `translate3d(${transform?.x}px, ${transform?.y}px, 0)`,
      }}
      {...attributes}
      {...listeners}
    >
      {answer}
    </div>
  );
};

const Sprachbauchteine_2 = () => {
  const [droppedAnswer, setDroppedAnswer] = useState<string | null>(null);

  const draggedItemIdRef = useRef<number | null>(null);

  const handleDragEnd = (event: DragEndEvent) => {
    // if (event.over && draggedItemIdRef.current !== null) {
    //   const draggedAnswer = Answers.find(
    //     (answer) => answer.id === draggedItemIdRef.current
    //   );
    //   if (draggedAnswer) {
    //     setDroppedAnswer(draggedAnswer.answer);
    //   } else {
    //     setDroppedAnswer(null);
    //   }
    // }
    // // Reset the dragged item id
    // draggedItemIdRef.current = null;
  };

  const { isOver, setNodeRef } = useDroppable({
    id: "droppable-container",
  });

  return (
    <div className="container w-full px-2">
      <Header
        pageHome="/kelner"
        pageTow="/kelner/lesenteil-2"
        pageThree="/kelner/lesenteil-3"
        pageFour="/kelner/sprachbauchteine-1"
        pageFive="/kelner/sprachbauchteine-2"
      />
      <main>
        <div className="w-full bg-blue-900 text-white">
          <h1 className="p-2">Sprachbauchteine, TEIL 2</h1>
        </div>
        <DndContext onDragEnd={handleDragEnd}>
          <div className="flex justify-between gap-[20px]">
            {/* div text */}
            <div className="w-[55%] mt-[20px]">
              <p className="bg-[#f6f2bc] text-black rounded-lg p-2">
                Lesen Sie den folgenden Text und entscheiden Sie, welches Wort
                (a, b oder c) in die jeweilige Lücke passt. Markieren Sie Ihre
                Lösungen auf dem Antwortbogen bei den Aufgaben 21 - 30
              </p>
              <div className="mt-[30px] bg-[#fbfbfb] rounded-lg h-fit">
                <h1 className="font-bold pb-1">{sprachbau_2.texts[0].title}</h1>
                <p>{sprachbau_2.texts[0].text}</p>
              </div>
            </div>

            <div className="w-[45%] mt-[30px] h-fit">
              <div
                className="bg-[#ccc] rounded-lg my-3  items-center p-[10px]"
                ref={setNodeRef}
              >
                {sprachbau_2.Answers.map((answer) => (
                  <React.Fragment key={answer.id}>
                    <div className="flex gap-2 bg-[#5c72fa9e] mb-2 rounded-lg">
                      {answer.title}
                      <DraggableItem answer={answer.answer} id={answer.id} />
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </DndContext>
      </main>
    </div>
  );
};

export default Sprachbauchteine_2;
