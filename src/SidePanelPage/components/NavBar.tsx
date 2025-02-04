import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
// import { Link } from "react-router-dom";
import { SidebarData, DeviceData } from "./SidebarData.tsx";
import "./NavBar.css";

interface NavBarProps {
  sidebar: boolean;
  setSidebar: (value: boolean) => void;
}

function NavBar({ sidebar, setSidebar }: NavBarProps) {
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items">
          <li className="navbar-toggle">
            <div className="menu-close" onClick={showSidebar}>
              <AiIcons.AiOutlineClose />
            </div>
          </li>
          {DeviceData.map((item, index) => {
            return (
              <li key={index} className="nav-text">
                <div className="info-container">
                  <div className="info-container-text">
                    종류: {item.type} {/* {item.icon} */}
                  </div>
                  <span className="info-container-text">
                    위치: {item.location}
                  </span>
                  <span className="info-container-text">
                    작동상태: {item.state}
                  </span>{" "}
                  <span className="info-container-text">
                    좌표: ({item.x},{item.y})
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
