// // import React, { useState, useRef } from "react";
// // import styled from "styled-components";
// // import icon from "../icons/light_bulb.png";

// // const Device = styled.div`
// //   width: 100px;
// //   height: 100px;
// //   background-color: gold;
// //   border-radius: 10px;
// //   cursor: pointer;

// //   background-image: url(${icon});
// //   background-size: cover;
// //   background-repeat: no-repeat;
// //   background-position: center;
// // `;

// // interface DraggableDeviceProps {
// //   initialX: number;
// //   initialY: number;
// // }

// // const DraggableDevice = ({ initialX, initialY }: DraggableDeviceProps) => {
// //   const [position, setPosition] = useState({ x: initialX, y: initialY });
// //   const isDragging = useRef(false); // 드래그 중인지 체크하는 변수
// //   const startCoords = useRef({ x: 0, y: 0 }); // 드래그 시작 좌표 저장

// //   // 마우스다운 이벤트 처리: 드래그 시작
// //   const handleMouseDown = (e: React.MouseEvent) => {
// //     isDragging.current = true;
// //     startCoords.current = {
// //       x: e.clientX - position.x,
// //       y: e.clientY - position.y,
// //     };
// //     document.addEventListener("mousemove", handleMouseMove); // 마우스 이동 감지
// //     document.addEventListener("mouseup", handleMouseUp); // 마우스 떼기 이벤트
// //   };

// //   // 마우스무브 이벤트 처리: 드래그 중
// //   const handleMouseMove = (e: MouseEvent) => {
// //     if (!isDragging.current) return;

// //     const newX = e.clientX - startCoords.current.x;
// //     const newY = e.clientY - startCoords.current.y;
// //     setPosition({ x: newX, y: newY });
// //   };

// //   // 마우스업 이벤트 처리: 드래그 종료
// //   const handleMouseUp = () => {
// //     isDragging.current = false;
// //     document.removeEventListener("mousemove", handleMouseMove); // 마우스 이동 이벤트 제거
// //     document.removeEventListener("mouseup", handleMouseUp); // 마우스 업 이벤트 제거
// //   };

// //   return (
// //     <Device
// //       style={{
// //         position: "absolute",
// //         left: position.x,
// //         top: position.y,
// //       }}
// //       onMouseDown={handleMouseDown} // 마우스 다운 시 드래그 시작
// //     />
// //   );
// // };

// // export default DraggableDevice;

// // DraggableDevice.tsx

// // import React from "react";

// // interface DeviceProps {
// //   initialX: number;
// //   initialY: number;
// //   deviceData: {
// //     id: number;
// //     type: string;
// //     location: string;
// //     state: string;
// //     x: number;
// //     y: number;
// //   };
// //   onDeviceSelect: (device: any) => void;
// // }

// // const DraggableDevice = ({
// //   initialX,
// //   initialY,
// //   deviceData,
// //   onDeviceSelect,
// // }: DeviceProps) => {
// //   const handleDoubleClick = () => {
// //     onDeviceSelect(deviceData); // 디바이스 더블클릭 시 선택된 디바이스 정보 전달
// //   };

// //   return (
// //     <div
// //       style={{
// //         position: "absolute",
// //         left: initialX,
// //         top: initialY,
// //         width: "100px",
// //         height: "100px",
// //         backgroundColor: "gold",
// //         borderRadius: "10px",
// //         cursor: "pointer",
// //       }}
// //       onDoubleClick={handleDoubleClick}
// //     >
// //       {deviceData.type} {/* or other details you want to display */}
// //     </div>
// //   );
// // };

// // export default DraggableDevice;

// // DraggableDevice.tsx
// import React, { useState } from "react";

// interface DeviceProps {
//   initialX: number;
//   initialY: number;
//   deviceData: {
//     id: number;
//     type: string;
//     location: string;
//     state: string;
//     x: number;
//     y: number;
//   };
//   onDeviceSelect: (device: any) => void;
// }

// const DraggableDevice = ({
//   initialX,
//   initialY,
//   deviceData,
//   onDeviceSelect,
// }: DeviceProps) => {
//   const [position, setPosition] = useState({ x: initialX, y: initialY });
//   const [isDragging, setIsDragging] = useState(false);

//   const handleMouseDown = (e: React.MouseEvent) => {
//     setIsDragging(true);
//     console.log("dragging");
//     // 마우스 다운 시 상대 좌표 계산
//     const offsetX = e.clientX - position.x;
//     const offsetY = e.clientY - position.y;

//     const handleMouseMove = (e: MouseEvent) => {
//       if (isDragging) {
//         setPosition({
//           x: e.clientX - offsetX,
//           y: e.clientY - offsetY,
//         });
//       }
//     };

//     const handleMouseUp = () => {
//       setIsDragging(false);
//       window.removeEventListener("mousemove", handleMouseMove);
//       window.removeEventListener("mouseup", handleMouseUp);
//     };

//     window.addEventListener("mousemove", handleMouseMove);
//     window.addEventListener("mouseup", handleMouseUp);
//   };

//   const handleDoubleClick = () => {
//     onDeviceSelect(deviceData); // 디바이스 더블클릭 시 선택된 디바이스 정보 전달
//   };

//   return (
//     <div
//       style={{
//         position: "absolute",
//         left: position.x,
//         top: position.y,
//         width: "100px",
//         height: "100px",
//         backgroundColor: "gold",
//         borderRadius: "10px",
//         cursor: "pointer",
//       }}
//       onMouseDown={handleMouseDown} // 드래그 시작
//       onDoubleClick={handleDoubleClick} // 디바이스 더블클릭 시 선택
//     >
//       {deviceData.type} {/* 또는 디바이스 정보 표시 */}
//     </div>
//   );
// };

// export default DraggableDevice;

import React, { useState, useRef } from "react";

interface DeviceProps {
  initialX: number;
  initialY: number;
  deviceData: {
    id: number;
    type: string;
    location: string;
    state: string;
    x: number;
    y: number;
  };
  onDeviceSelect: (device: any) => void;
}

const DraggableDevice = ({
  initialX,
  initialY,
  deviceData,
  onDeviceSelect,
}: DeviceProps) => {
  const [position, setPosition] = useState({ x: initialX, y: initialY });
  const [isDragging, setIsDragging] = useState(false);
  const dragOffset = useRef({ x: 0, y: 0 }); // 드래그 시작 시점 오프셋 저장
  const isMounted = useRef(false); // 컴포넌트가 마운트되었는지 체크 (중복 이벤트 등록 방지)

  const handleMouseDown = (e: React.MouseEvent) => {
    // 드래그 시작
    if (!isDragging) {
      setIsDragging(true);
      dragOffset.current = {
        x: e.clientX - position.x,
        y: e.clientY - position.y,
      };
    }
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - dragOffset.current.x,
        y: e.clientY - dragOffset.current.y,
      });
    }
  };

  const handleMouseUp = () => {
    if (isDragging) {
      setIsDragging(false);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    }
  };

  // 마운트될 때 한 번만 이벤트 리스너 등록
  React.useEffect(() => {
    if (isMounted.current) return; // 이미 마운트된 경우, 이벤트 등록을 피합니다.
    isMounted.current = true;

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  // 더블클릭 시 디바이스 선택
  const handleDoubleClick = () => {
    onDeviceSelect(deviceData);
  };

  return (
    <div
      style={{
        position: "absolute",
        left: position.x,
        top: position.y,
        width: "100px",
        height: "100px",
        backgroundColor: "gold",
        borderRadius: "10px",
        cursor: "pointer",
      }}
      onMouseDown={handleMouseDown} // 드래그 시작
      onDoubleClick={handleDoubleClick} // 디바이스 더블클릭 시 선택
    >
      {deviceData.type}
    </div>
  );
};

export default DraggableDevice;
