"use client";
import React, { useRef, useState } from "react";
import {
  DndContext,
  DragEndEvent,
  useDraggable,
  useDroppable,
} from "@dnd-kit/core";
import Header from "../../components/Header";

// import DroppableContainer from "../../components/DroppableContainer";
// import DraggableItem from "../../components/DraggableItem";

interface Answer {
  id: number;
  title: string;
  answer?: string;
}

const Answers: Answer[] = [
  {
    id: 1,
    title: "A",
    answer: "An",
  },
  {
    id: 2,
    title: "B",
    answer: "Auf",
  },
  {
    id: 3,
    title: "C",
    answer: "Auf",
  },
];

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
    if (event.over && draggedItemIdRef.current !== null) {
      const draggedAnswer = Answers.find(
        (answer) => answer.id === draggedItemIdRef.current
      );

      if (draggedAnswer) {
        setDroppedAnswer(draggedAnswer.answer);
      } else {
        setDroppedAnswer(null);
      }
    }

    // Reset the dragged item id
    draggedItemIdRef.current = null;
  };

  const { isOver, setNodeRef } = useDroppable({
    id: "droppable-container",
  });

  return (
    <div className="container w-full px-2">
      <Header
        pageHome="/lesen"
        pageTow="/lesen/lesenteil-2"
        pageThree="/lesen/lesenteil-3"
        pageFour="/lesen/sprachbauchteine-1"
        pageFive="/lesen/sprachbauchteine-2"
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
                <p>
                  Millionen Kinder leben in Deutschland. Verglichen{" "}
                  {"31:________"}
                  der Bevölkerungszahl von ungefähr 80 Millionen ist das fast
                  ein Viertel der Einwohner. Doch nur für jedes zehnte Kind
                  unter drei Jahren steht ein Betreuungsplatz in einer
                  Kindertagesstätte zur Verfügung. Die Folge: Nur etwas mehr als
                  die Hälfte der Mütter dieser Kinder ist berufstätig - und nur
                  ein Viertel kann ganztägig zur Arbeit gehen. Um dem
                  entgegenzuwirken, gibt es in Deutschland die dreijährige
                  Elternzeit, die es einem Elternteil ermöglichen soll, drei
                  Jahre {"32:________"} dem Kind zu Hause zu bleiben,{" "}
                  {"33:________"} hat den Vorteil, dass der zu Hause bleibende
                  Elternteil seinen Arbeitsplatz nicht verliert. Dennoch wird
                  die Elternzeit für viele Eltern in finanzieller Hinsicht zu
                  einem gravierenden Problem. Außerdem gilt die Elternzeit nur
                  für Angestellte. Mütter zum Beispiel, die vor der Geburt ihres
                  Kindes selbständig waren und mit dem Baby zu Hause bleiben
                  wollen, stehen weit schlechter da. Kind und Karriere zu
                  vereinbaren ist daher in Deutschland für die meisten Mütter so
                  gut wie unmöglich. Dies scheinen die Hauptgründe{" "}
                  {"34:________"} zu sein, warum in Deutschland zurzeit weltweit
                  die wenigsten Kinder geboren werden.
                </p>
              </div>
            </div>

            <div className="w-[45%] mt-[30px] h-fit">
              <div
                className="bg-[#ccc] rounded-lg my-3  items-center p-[10px]"
                ref={setNodeRef}
                style={{
                  border: isOver ? "2px solid green" : "2px dashed black",
                  minHeight: "50px",
                }}
              >
                {Answers.map((answer) => (
                  <React.Fragment key={answer.id}>
                    <div className="flex gap-5">
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
