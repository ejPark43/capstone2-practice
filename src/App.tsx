import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router";
import "./App.css";
import Chessboard from "./ChessboardPage/components/Chessboard.tsx";
import Home from "./Home.tsx";
import SlideSidePanel from "./SidePanelPage/SlideSidePanel.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chessboard" element={<Chessboard />} />
        <Route path="/slidePanel" element={<SlideSidePanel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
