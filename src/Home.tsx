import React from "react";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  return (
    <div className="btn-container">
      <div className="btn" onClick={() => navigate("/Chessboard")}>
        Grid to Snap(체스보드)
      </div>
      <div className="btn">Slide Panel</div>
    </div>
  );
}

export default Home;
