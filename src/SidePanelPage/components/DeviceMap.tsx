import React, { useState } from "react";
import { DeviceData } from "./SidebarData";
import Device from "./Device";
import NavBar from "./NavBar";

const DeviceMap = () => {
  const [selectedDevice, setSelectedDevice] = useState(null);
  const [sidebar, setSidebar] = useState(false);

  const handleDeviceClick = (device: any) => {
    setSelectedDevice(device);
    setSidebar(true);
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "600px",
        border: "1px solid black",
      }}
    >
      {DeviceData.map((device, index) => (
        <Device
          key={index}
          device={device}
          onClick={() => handleDeviceClick(device)}
        />
      ))}
      <NavBar
        sidebar={sidebar}
        setSidebar={setSidebar}
        selectedDevice={selectedDevice}
      />
    </div>
  );
};

export default DeviceMap;
