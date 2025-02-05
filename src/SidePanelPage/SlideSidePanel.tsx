// // import React, { useState } from "react";
// // import styled from "styled-components";
// import icon from "./icons/light_bulb.png";
// // import ButtonAppBar from "./components/ButtonAppBar.tsx";
// // import NavBar from "./components/NavBar.tsx";
// // function SlideSidePanel() {
// //   const [sidebar, setSidebar] = useState(false);
// //   return (
// //     <SidePanelPage>
// //       <ButtonAppBar />
// //       <Container>
// //         <Device onClick={() => setSidebar(true)} />
// //       </Container>
// //       <NavBar sidebar={sidebar} setSidebar={setSidebar} />
// //     </SidePanelPage>
// //   );
// // }

// // export default SlideSidePanel;
// // const SidePanelPage = styled.div`
// //   display: flex;
// //   flex-direction: column;
// //   width: 100vw;
// //   /* height: 100vh; */
// // `;
// // const Container = styled.div`
// //   display: flex;
// //   flex-direction: row;
// //   border: 2px solid green;
// // `;
// // const Device = styled.div`
// //   display: flex;
// //   border: 2px solid red;
// //   border-radius: 50p;
// //   /* padding: 20px; */
// //   background-image: url(${icon});
// //   width: 50px;
// //   height: 50px;
// //   background-repeat: no-repeat;
// //   background-position: center;
// //   background-size: 50px;
// //   cursor: pointer;
// //   &:hover {
// //   }
// // `;

// import React, { useState } from "react";
// import styled from "styled-components";
// import ButtonAppBar from "./components/ButtonAppBar.tsx";
// import NavBar from "./components/NavBar.tsx";
// import { DeviceData } from "./components/SidebarData.tsx"; // DeviceData 가져오기

// function SlideSidePanel() {
//   const [sidebar, setSidebar] = useState(false);

//   const [selectedDevice, setSelectedDevice] = useState<any>(null); // 선택된 디바이스 상태
//   const handleDeviceClick = (device: any) => {
//     setSelectedDevice(device); // 선택된 디바이스 설정
//     setSidebar(true); // 패널 열기
//   };

//   return (
//     <SidePanelPage>
//       <ButtonAppBar />
//       <Container>
//         {/* DeviceData를 map으로 반복하여 각 디바이스 배치 */}
//         {DeviceData.map((device, index) => (
//           <Device
//             key={index}
//             x={device.x}
//             y={device.y}
//             onClick={() => handleDeviceClick(device)}
//           />
//         ))}
//       </Container>
//       <NavBar
//         sidebar={sidebar}
//         setSidebar={setSidebar}
//         selectedDevice={selectedDevice}
//       />
//     </SidePanelPage>
//   );
// }

// export default SlideSidePanel;
// const iconUrl = require("./icons/light_bulb.png");
// // 전체 페이지 스타일
// const SidePanelPage = styled.div`
//   display: flex;
//   flex-direction: column;
//   width: 100vw;
//   height: 100vh;
// `;

// // 컨테이너 (디바이스들이 놓일 공간)
// const Container = styled.div`
//   position: relative; /* 자식 요소의 absolute 배치를 위해 */
//   width: 100vw;
//   height: 100vh;
//   border: 2px solid green;
// `;

// // 디바이스 스타일 (각 좌표값을 반영하여 배치)
// const Device = styled.div<{ x: number; y: number }>`
//   position: absolute;
//   left: ${({ x }) => x}px;
//   top: ${({ y }) => y}px;
//   width: 100px;
//   height: 100px;
//   background-color: gold;
//   border-radius: 10px;
//   cursor: pointer;

//   background-image: ${({ x }) => `url(${iconUrl})`}; /* 템플릿 리터럴 사용 */
//   background-size: cover;
//   background-repeat: no-repeat;
//   background-position: center;
// `;import React, { useState } from "react";

import { useState } from "react";
import DraggableDevice from "./components/DraggableDevice.tsx"; // 위에서 만든 DraggableDevice 컴포넌트 import
import React from "react";

// 예시 디바이스 데이터
const deviceData = [
  {
    id: 1,
    type: "조명",
    location: "3층 동쪽 소회의실",
    state: "ON",
    x: 50,
    y: 50,
  },
  {
    id: 2,
    type: "장치",
    location: "3층 동쪽 소회의실",
    state: "OFF",
    x: 200,
    y: 150,
  },
  // 추가 디바이스 데이터
];

const SlideSidePanel = () => {
  const [selectedDevice, setSelectedDevice] = useState<any>(null); // 선택된 디바이스 상태 관리

  // 디바이스 선택 시 처리 함수
  const handleDeviceSelect = (device: any) => {
    setSelectedDevice(device); // 선택된 디바이스 정보 설정
  };

  return (
    <div style={{ display: "flex" }}>
      <div style={{ position: "relative", width: "100%", height: "500px" }}>
        {/* 디바이스들 렌더링 */}
        {deviceData.map((device) => (
          <DraggableDevice
            key={device.id}
            initialX={device.x}
            initialY={device.y}
            deviceData={device}
            onDeviceSelect={handleDeviceSelect}
          />
        ))}
      </div>
      {/* 옆 패널에 선택된 디바이스 정보 표시 */}
      <div
        style={{
          width: "300px",
          padding: "20px",
          borderLeft: "1px solid #ccc",
        }}
      >
        {selectedDevice ? (
          <div>
            <h3>디바이스 정보</h3>
            <p>종류: {selectedDevice.type}</p>
            <p>위치: {selectedDevice.location}</p>
            <p>상태: {selectedDevice.state}</p>
            <p>
              좌표: ({selectedDevice.x}, {selectedDevice.y})
            </p>
          </div>
        ) : (
          <span>디바이스를 더블클릭하여 정보를 확인하세요.</span>
        )}
      </div>
    </div>
  );
};

export default SlideSidePanel;
