import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  return (
    <HomeContainer>
      <BtnContainer>
        <Btn className="btn" onClick={() => navigate("/Chessboard")}>
          Grid to Snap(체스보드)
        </Btn>
        <Btn className="btn" onClick={() => navigate("/gridLevel")}>
          Grid Level test
        </Btn>
        <Btn className="btn" onClick={() => navigate("/slidePanel")}>
          Slide Panel
        </Btn>
      </BtnContainer>
    </HomeContainer>
  );
}

export default Home;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  justify-content: center;

  height: 100vh;
  background-color: rgb(255, 255, 255);
`;

const BtnContainer = styled.div`
  display: flex;

  flex-direction: column;
  /* border: 2px solid gold; */
  padding: 50px;
`;

const Btn = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
  margin: 10px;
  border: 6px solid rgb(69, 162, 255);
  background-color: white;
  border-radius: 10px;
  cursor: pointer;
  font-size: 50px;
  font-weight: bolder;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  &:hover {
    transform: scale(1.1);
    background-color: rgb(69, 162, 255);
  }
`;
