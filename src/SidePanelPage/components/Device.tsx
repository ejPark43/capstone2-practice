// // // import React from "react";

// // // interface DeviceProps {
// // //   device: {
// // //     type: string;
// // //     location: string;
// // //     state: string;
// // //     x: number;
// // //     y: number;
// // //   };
// // //   onClick: () => void;
// // // }

// // // const Device: React.FC<DeviceProps> = ({ device, onClick }) => {
// // //   return (
// // //     <div
// // //       style={{
// // //         position: "absolute",
// // //         left: `${device.x}px`,
// // //         top: `${device.y}px`,
// // //         cursor: "pointer",
// // //         background: device.state === "ON" ? "yellow" : "gray",
// // //         padding: "10px",
// // //         borderRadius: "50%",
// // //       }}
// // //       onClick={onClick}
// // //     >
// // //       {device.type}
// // //     </div>
// // //   );
// // // };

// // // export default Device;

// import React from "react";
// import { useState, useRef } from "react";

// const Device = ({ x, y }: { x: number; y: number }) => {
//   const [position, setPosition] = useState({ x, y });
//   const isDragging = useRef(false);
//   const startCoords = useRef({ x: 0, y: 0 });

//   const handleMouseDown = (e: React.MouseEvent) => {
//     isDragging.current = true;
//     startCoords.current = {
//       x: e.clientX - position.x,
//       y: e.clientY - position.y,
//     };
//     document.addEventListener("mousemove", handleMouseMove); // DOM event
//     document.addEventListener("mouseup", handleMouseUp);
//   };

//   const handleMouseMove = (e: MouseEvent) => {
//     if (!isDragging.current) return;
//     const newX = e.clientX - startCoords.current.x;
//     const newY = e.clientY - startCoords.current.y;
//     setPosition({ x: newX, y: newY });
//   };

//   const handleMouseUp = () => {
//     isDragging.current = false;
//     document.removeEventListener("mousemove", handleMouseMove);
//     document.removeEventListener("mouseup", handleMouseUp);
//   };

//   return (
//     <div
//       style={{
//         position: "absolute",
//         left: position.x,
//         top: position.y,
//         width: 100,
//         height: 100,
//         backgroundColor: "gold",
//         borderRadius: 10,
//         cursor: "pointer",
//       }}
//       onMouseDown={handleMouseDown}
//     >
//       Device
//     </div>
//   );
// };

// export default Device;

// Device.tsx
import React from "react";

interface DeviceProps {
  device: {
    type: string;
    location: string;
    state: string;
    x: number;
    y: number;
  };
  onClick: () => void;
}

const Device = ({ device, onClick }: DeviceProps) => {
  return (
    <div
      style={{
        position: "absolute",
        left: device.x,
        top: device.y,
        width: 100,
        height: 100,
        backgroundColor: "gold",
        borderRadius: 10,
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      {device.type} {/* Or other device details to display */}
    </div>
  );
};

export default Device;
