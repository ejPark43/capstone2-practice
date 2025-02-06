import React, { useState } from "react";
import styled from "styled-components";

const GRID_WIDTH = 1300;
const GRID_HEIGHT = 700;
const ITEM_SIZE = 20; // 아이템 크기
const LINE_THICKNESS = 1; // 격자 라인 두께

// 레벨별로 그리드 내부 칸 크기 설정
const getGridSize = (level: number) =>
  level === 1 ? 100 : level === 2 ? 50 : 25;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BoardBorder = styled.div`
  width: ${GRID_WIDTH}px;
  height: ${GRID_HEIGHT}px;
  border: 2px solid black;
  position: relative;
`;

const Grid = styled.div<{ gridSize: number }>`
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.2) ${LINE_THICKNESS}px,
      transparent ${LINE_THICKNESS}px
    ),
    linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.2) ${LINE_THICKNESS}px,
      transparent ${LINE_THICKNESS}px
    );
  background-size: ${({ gridSize }) => `${gridSize}px ${gridSize}px`};
`;

const Item = styled.div<{ x: number; y: number }>`
  width: ${ITEM_SIZE}px;
  height: ${ITEM_SIZE}px;
  background-color: red;
  position: absolute;
  left: ${({ x }) => x}px;
  top: ${({ y }) => y}px;
  cursor: grab;
`;

function GridBoard({ value }: { value: number }) {
  const gridSize = getGridSize(value);
  const centerOffset = -ITEM_SIZE / 2 + LINE_THICKNESS / 2; // 🔥 교차점 보정값

  const [items, setItems] = useState<{ id: number; x: number; y: number }[]>([
    { id: 1, x: centerOffset, y: centerOffset }, // 처음 위치를 교차점 중심으로 설정
  ]);

  const [draggingItem, setDraggingItem] = useState<number | null>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  // 드래그 시작
  const handleMouseDown = (
    e: React.MouseEvent,
    id: number,
    x: number,
    y: number
  ) => {
    setDraggingItem(id);
    setOffset({ x: e.clientX - x, y: e.clientY - y });
  };

  // 드래그 중
  const handleMouseMove = (e: React.MouseEvent) => {
    if (draggingItem !== null) {
      setItems((prevItems) =>
        prevItems.map((item) =>
          item.id === draggingItem
            ? {
                ...item,
                x:
                  Math.round((e.clientX - offset.x) / gridSize) * gridSize +
                  centerOffset,
                y:
                  Math.round((e.clientY - offset.y) / gridSize) * gridSize +
                  centerOffset,
              }
            : item
        )
      );
    }
  };

  // 드래그 종료
  const handleMouseUp = () => {
    setDraggingItem(null);
  };

  return (
    <Container>
      <div>{value} 레벨</div>
      <BoardBorder onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}>
        <Grid gridSize={gridSize} />
        {items.map((item) => (
          <Item
            key={item.id}
            x={item.x}
            y={item.y}
            onMouseDown={(e) => handleMouseDown(e, item.id, item.x, item.y)}
          />
        ))}
      </BoardBorder>
    </Container>
  );
}

export default GridBoard;
