import React from "react";
import "./Tile.css";

interface Props {
  icon?: string; //모든 타일이 아이콘 갖지 않을거니까 ? 넣어줌
  number: number;
}

function Tile({ number, icon }: Props) {
  if (number % 2 === 0) {
    return (
      <div className="tile black-tile">
        {icon && (
          <div
            style={{ backgroundImage: `url(${icon})` }}
            className="icon-piece"
          >
            {/* {icon && <img src={icon}></img>} */}
          </div>
        )}

        {/* <img src="assets/icons/lightbulb.png"></img> */}
      </div>
    );
  } else
    return (
      <div className="tile white-tile">
        {icon && (
          <div
            style={{ backgroundImage: `url(${icon})` }}
            className="icon-piece"
          ></div>
        )}
      </div>
    );
}

export default Tile;
