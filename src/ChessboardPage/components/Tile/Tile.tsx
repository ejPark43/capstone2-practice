import React from "react";
// import "./Tile.css";
import styled from "styled-components";

interface Props {
  icon?: string; //모든 타일이 아이콘 갖지 않을거니까 ? 넣어줌
  number: number;
}

function Tile({ number, icon }: Props) {
  return (
    <TileContainer isBlack={number % 2 === 0}>
      {icon && (
        <IconPiece
          style={{ backgroundImage: `url(${icon})` }}
          className="icon-piece"
        >
          {/* {icon && <img src={icon}></img>} */}
        </IconPiece>
      )}

      {/* <img src="assets/icons/lightbulb.png"></img> */}
    </TileContainer>
  );
}

export default Tile;

const TileContainer = styled.div<{ isBlack: boolean }>`
  width: 100px;
  height: 100px;
  display: grid;
  place-content: center; /* 타일 내부에 있는 것을 center로.*/
  border-right: 1px solid rgb(40, 84, 64);
  border-bottom: 1px solid rgb(40, 84, 64);
  background-color: ${(props) =>
    props.isBlack ? "rgb(68, 68, 68)" : "rgb(237, 237, 216)"};
`;

const IconPiece = styled.div<{ icon?: string }>`
  width: 100px;
  height: 100px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 50px;
  /* background-image: ${(props) =>
    props.icon ? `url(${props.icon})` : "none"}; */

  &:hover {
    cursor: grab;
  }

  &:active {
    cursor: grabbing;
  }
`;
