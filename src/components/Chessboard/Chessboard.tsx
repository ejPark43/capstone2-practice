// import React from "react";
import React, { JSX } from "react";
import "./Chessboard.css";
import Tile from "../Tile/Tile.tsx";

const verticalAxis = [1, 2, 3, 4, 5, 6, 7, 8];
const horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];
const rows = 8;
const cols = 8;
interface Piece {
  // 디바이스 (아이콘)
  image: string; // 아이콘
  x: number; // 해당 피스의 위치
  y: number;
}
const pieces: Piece[] = []; // Piece라는 타입을 갖는 배열 pieces

for (let i = 0; i < cols; i++)
  pieces.push({ image: "assets/icons/light_bulb.png", x: i, y: 6 }); // piece에 이미지와 x,y값 넣어줌. (x,y값은 타일 번호)
for (let i = 0; i < cols; i++)
  pieces.push({ image: "assets/icons/light_bulb.png", x: i, y: 1 }); // piece에 이미지와 x,y값 넣어줌. (x,y값은 타일 번호)

let activePiece: HTMLElement | null = null; // 현재 grab하고 움직이는 피스 하나만 동작하도록, 현재 active한 애를 변수에 넣어준다

function grabPiece(e: React.MouseEvent<HTMLElement, MouseEvent>) {
  // piece를 클릭했으면 piece만 움직이도록..
  // console.log(e.target);
  const element = e.target as HTMLElement; // element라는 변수에 event의 target을 넣어줌!
  if (element.classList.contains("icon-piece")) {
    // icon-piece라는 클래스명을 가진 엘리먼트다? 그러면 콘솔에 출력
    console.log(e);

    /* piece를 마우스 따라가서 움직이도록!! BUT 이 코드까지는 마우스가 이 영역을 클릭하면 마우스 가운데로 피스를 옮김. 드래그 기능 X  */
    const x = e.clientX - 50; //offset
    const y = e.clientY - 50; // offset
    element.style.position = "absolute";
    element.style.left = `${x}px`;
    element.style.top = `${y}px`;

    activePiece = element;
  }
}

function movePiece(e: React.MouseEvent) {
  // console.log(element);
  if (activePiece && activePiece.classList.contains("icon-piece")) {
    // grabPiece에서 설정해준 현재 움직이는 피스.
    const x = e.clientX - 50; //offset
    const y = e.clientY - 50; // offset
    activePiece.style.position = "absolute";
    activePiece.style.left = `${x}px`;
    activePiece.style.top = `${y}px`;
  }
}
function dropPiece(e: React.MouseEvent) {
  if (activePiece) {
    // 마우스 클릭 끝났을때 activePiece를 null 로 넣어서 비활성화시킴
    activePiece = null;
  }
}

export default function Chessboard() {
  // board 배열의 타입을 명시적으로 정의
  let board: JSX.Element[] = []; // jsx 원소를 갖는 배열

  for (let j = verticalAxis.length - 1; j >= 0; j--) {
    for (let i = 0; i < horizontalAxis.length; i++) {
      const number = j + i + 2; // 짝수타일, 홀수타일인지 구분(흑백 타일 구분 위해)

      // image 변수의 타입을 string | undefined로 명시
      let image: string | undefined = undefined; // string이나 undefined가질 수 있음

      pieces.forEach((p) => {
        if (p.x === i && p.y === j) image = p.image; // 각 타일 위치에 맞게 이미지 하나 올려줌
      });

      board.push(<Tile key={`${j},${i}`} icon={image} number={number} />); // unique 한 키값을 넣어주기위해 j, i 조합을 string으로 넣음 "0,0" "0,1" 등...
    }
  }

  return (
    <div
      onMouseMove={(e) => movePiece(e)}
      onMouseDown={(e) => grabPiece(e)}
      onMouseUp={(e) => dropPiece(e)}
      id="chessboard"
    >
      {board}
    </div>
  );
}

//  Chessboard;
