import React from "react";
import styled from "styled-components";
import icon from "./icons/light_bulb.png";
import ButtonAppBar from "./components/ButtonAppBar.tsx";
function SlideSidePanel() {
  return (
    <SidePanelPage>
      <ButtonAppBar />
      <Container>
        <Device></Device>
      </Container>
    </SidePanelPage>
  );
}

export default SlideSidePanel;
const SidePanelPage = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  /* height: 100vh; */
`;
const Container = styled.div`
  display: flex;
  flex-direction: row;
  border: 2px solid green;
`;
const Device = styled.div`
  display: flex;
  border: 2px solid red;
  border-radius: 50p;
  /* padding: 20px; */
  background-image: url(${icon});
  width: 50px;
  height: 50px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 50px;
  cursor: pointer;
  &:hover {
  }
`;
