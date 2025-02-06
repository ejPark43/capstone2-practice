import React from "react";
import styled from "styled-components";

function GridBoard({ value }: { value: number }) {
  return (
    <Container>
      <div>{value} LEVEL </div>
      <BoardBorder>
        <div
          className={
            value === 1
              ? "level-one"
              : value === 2
              ? "level-two"
              : "level-three"
          }
        ></div>
      </BoardBorder>
    </Container>
  );
}

export default GridBoard;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  width: 100%;
`;
const BoardBorder = styled.div`
  display: flex;
  border: 2px solid green;
  width: 1300px;
  height: 700px;
  & > .level-one {
    display: flex;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, transparent 38px, #ddd 38px) 0 0 /
        100% 40px repeat-y,
      linear-gradient(to right, transparent 38px, #ddd 38px) 0 0 / 40px 100vh
        repeat-x white;
  }
  & > .level-two {
    display: flex;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, transparent 38px, #ddd 38px) 0 0 /
        100% 40px repeat-y,
      linear-gradient(to right, transparent 38px, #ddd 38px) 0 0 / 40px 100vh
        repeat-x white;
  }
  & > .level-three {
    display: flex;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, transparent 38px, #ddd 38px) 0 0 /
        100% 40px repeat-y,
      linear-gradient(to right, transparent 38px, #ddd 38px) 0 0 / 40px 100vh
        repeat-x white;
  }
`;
