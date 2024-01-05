// import React from "react";
// import { useDraggable } from "@dnd-kit/core";

// interface DraggableItemProps {
//   id: number;
//   title: string;
//   anser: string;
// }

// const DraggableItem: React.FC<DraggableItemProps> = ({ id, title, anser }) => {
//   const { attributes, listeners, setNodeRef, transform } = useDraggable({
//     id: String(id),
//   });

//   return (
//     <div
//       ref={setNodeRef}
//       style={{
//         transform: `translate3d(${transform?.x}px, ${transform?.y}px, 0)`,
//       }}
//       {...attributes}
//       {...listeners}
//     >
//       {title}: {anser}
//     </div>
//   );
// };

// export default DraggableItem;
