import React, { useState } from "react";
import DiscreteSlider from "./components/DescreteSlider.tsx";
import styled from "styled-components";
import GridBoard from "./components/GridBoard.tsx";
import ButtonAppBar from "../SidePanelPage/components/ButtonAppBar.tsx";

function GridLevelPage() {
  const [value, setValue] = useState(1); // 부모에서 상태 관리
  return (
    <div>
      <ButtonAppBar />
      <SliderBar>
        <DiscreteSlider setValue={setValue} />
      </SliderBar>
      <GridBoard value={value} />
    </div>
  );
}

export default GridLevelPage;

const SliderBar = styled.div`
  display: flex;
  justify-content: center;
  padding: 40px;
  /* border: 2px solid red; */
`;
