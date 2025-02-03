import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router";
import "./App.css";
import Chessboard from "./ChessboardPage/components/Chessboard.tsx";
import Home from "./Home.tsx";

function App() {
  return (
    <div id="home-container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chessboard" element={<Chessboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
