// import React from "react";
import React, { JSX, useEffect, useRef, useState } from "react";
import "./Chessboard.css";
import Tile from "./Tile/Tile.tsx";

const verticalAxis = [1, 2, 3, 4, 5, 6, 7, 8];
const horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];
const rows = 8;
const cols = 8; // 앞으로 사용할 그리드 촘촘함 정도를 이 값으로 조절하게 될 것
const boardSize = 800;
interface Piece {
  // 디바이스 (아이콘)
  image: string; // 아이콘
  x: number; // 해당 피스의 위치
  y: number;
}
// const pieces: Piece[] = []; // Piece라는 타입을 갖는 배열 pieces

const initialBoardState: Piece[] = [];

for (let i = 0; i < cols; i++) {
  initialBoardState.push({ image: "assets/icons/light_bulb.png", x: i, y: 6 }); // piece에 이미지와 x,y값 넣어줌. (x,y값은 타일 번호)
  initialBoardState.push({ image: "assets/icons/light_bulb.png", x: i, y: 7 }); // piece에 이미지와 x,y값 넣어줌. (x,y값은 타일 번호)
}
for (let i = 0; i < cols; i++) {
  initialBoardState.push({ image: "assets/icons/light_bulb.png", x: i, y: 1 });
  initialBoardState.push({ image: "assets/icons/light_bulb.png", x: i, y: 0 });
} // piece에 이미지와 x,y값 넣어줌. (x,y값은 타일 번호)

export default function Chessboard() {
  const [activePiece, setActivePiece] = useState<HTMLElement | null>(null); // 현재 grab하고 움직이는 피스 하나만 동작하도록, 현재 active한 애를 변수에 넣어준다

  const [gridX, setGridX] = useState(0);
  const [gridY, setGridY] = useState(0);
  // board 배열의 타입을 명시적으로 정의
  const [pieces, setPieces] = useState<Piece[]>(initialBoardState); // 처음 보드 상태를 pieces에 넣어줌!!(각 pieces가 들어간 위치..)
  const chessboardRef = useRef<HTMLDivElement>(null); // chessboardRef로 체스보드에 접근 가능해짐

  function grabPiece(e: React.MouseEvent<HTMLElement, MouseEvent>) {
    // piece를 클릭했으면 piece만 움직이도록..
    const element = e.target as HTMLElement; // element라는 변수에 event의 target을 넣어줌!
    const chessboard = chessboardRef.current;
    if (element.classList.contains("icon-piece") && chessboard) {
      setGridX(Math.floor((e.clientX - chessboard.offsetLeft) / 100)); // 좌표값 얻기위해... 100으로 나누면 139 = 1.39가 되니까 "1"을 좌표로.
      setGridY(
        Math.floor((boardSize - (e.clientY - chessboard.offsetTop)) / 100)
      ); // 0,0 ~ 7,7까지가 좌상단부터 시작인데 좌하단부터 시작하기위해 800을 빼줌. (보드 크기가 800Px이라서 나중에 다같이 바꿀 필요)
      console.log(e); // icon-piece라는 클래스명을 가진 엘리먼트다? 그러면 콘솔에 출력

      /* piece를 마우스 따라가서 움직이도록!! BUT 이 코드까지는 마우스가 이 영역을 클릭하면 마우스 가운데로 피스를 옮김. 드래그 기능 X  */
      const x = e.clientX - 50; //offset
      const y = e.clientY - 50; // offset
      element.style.position = "absolute";
      element.style.left = `${x}px`;
      element.style.top = `${y}px`;

      setActivePiece(element);
    }
  }

  function movePiece(e: React.MouseEvent) {
    // console.log(element);
    const chessboard = chessboardRef.current; // 여기서 chessboard가 null이 아니도록 넣어줌

    // if (activePiece && activePiece.classList.contains("icon-piece")) {
    if (activePiece && chessboard) {
      /* 보더 설정해주는 코드(제한 영역) : */
      const minX = chessboard.offsetLeft - 25; // x좌표값의 최소 바운더리 (왼쪽)
      const minY = chessboard.offsetTop - 25; // y좌표값의 최솟 바운더리 (위쪽)
      const maxX = chessboard.offsetLeft + chessboard.clientWidth - 75; // x좌표값의 최대 바운더리 (오른쪽)
      const maxY = chessboard.offsetTop + chessboard.clientHeight - 75; // y좌표값의 최솟 바운더리 (아래쪽)
      // grabPiece에서 설정해준 현재 움직이는 피스.
      const x = e.clientX - 50; //offset
      const y = e.clientY - 50; // offset
      activePiece.style.position = "absolute";
      // activePiece.style.left = `${x}px`;
      // activePiece.style.top = `${y}px`;

      // constraints (도면 제한))
      if (x < minX) {
        activePiece.style.left = `${minX}px`;
      } else if (x > maxX) {
        activePiece.style.left = `${maxX}px`;
      } else {
        activePiece.style.left = `${x}px`;
      }

      if (y < minY) {
        activePiece.style.top = `${minY}px`;
      } else if (y > maxY) {
        activePiece.style.top = `${maxY}px`;
      } else {
        activePiece.style.top = `${y}px`;
      }
    }
  }
  function dropPiece(e: React.MouseEvent) {
    const chessboard = chessboardRef.current;
    if (activePiece && chessboard) {
      const x = Math.floor((e.clientX - chessboard.offsetLeft) / 100); // 좌표값 얻기위해... 100으로 나누면 139 = 1.39가 되니까 "1"을 좌표로.
      const y = Math.floor(
        (boardSize - (e.clientY - chessboard.offsetTop)) / 100
      ); // 0,0 ~ 7,7까지가 좌상단부터 시작인데 좌하단부터 시작하기위해 800을 빼줌. (보드 크기가 800Px이라서 나중에 다같이 바꿀 필요)

      //  console.log(x, y);
      //chessboard가 null 아닌지 확인
      setPieces((value) => {
        const pieces = value.map((p) => {
          if (p.x === gridX && p.y === gridY) {
            p.x = x;
            p.y = y;
          }
          return p;
        });
        return pieces;
      });

      // 마우스 클릭 끝났을때 activePiece를 null 로 넣어서 비활성화시킴
      setActivePiece(null);
    }
  }

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
    <div id="app">
      <div
        onMouseMove={(e) => movePiece(e)}
        onMouseDown={(e) => grabPiece(e)}
        onMouseUp={(e) => dropPiece(e)}
        id="chessboard"
        ref={chessboardRef}
      >
        {board}
      </div>
    </div>
  );
}

//  Chessboard;
