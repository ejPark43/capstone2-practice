import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
// import { Link } from "react-router-dom";
import { SidebarData, DeviceData } from "./SidebarData.tsx";
import styled from "styled-components";

interface NavBarProps {
  sidebar: boolean;
  setSidebar: (value: boolean) => void;
}

function NavBar({ sidebar, setSidebar }: NavBarProps) {
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <Container>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ModalContainer>
          <div className="navbar-toggle">
            <CloseIcon onClick={showSidebar}>
              <AiIcons.AiOutlineClose />
            </CloseIcon>
          </div>
          {DeviceData.map((item, index) => {
            return (
              <ModalInfoContainer key={index}>
                <ModalInfo>
                  <div className="info-container-text">
                    <span>디바이스 종류: </span> {item.type} {/* {item.icon} */}
                  </div>
                  <div className="info-container-text">
                    <span>디바이스 이름: </span>
                    {item.name}
                  </div>
                  <div className="info-container-text">
                    <span>조명 색온도: </span>
                    {item.lighting}
                  </div>
                  <div className="info-container-text">
                    <span>디바이스 위치:</span> {item.location}
                  </div>
                  <div className="info-container-text">
                    <span>현재 작동 상태: </span>
                    {item.state}
                  </div>
                  <div className="info-container-text">
                    <span>좌표: </span>({item.x},{item.y})
                  </div>
                </ModalInfo>
              </ModalInfoContainer>
            );
          })}
        </ModalContainer>
      </nav>
    </Container>
  );
}

export default NavBar;

const Container = styled.div`
  display: flex;
  z-index: 1500;
  & > .nav-menu.active {
    right: 0;

    transition: 400ms;
  }
  & > .nav-menu {
    /* background-color: #060b26; */
    background-color: #ffffff;
    width: 500px;
    border-radius: 20px;
    /* border: 2px solid #1b76d2; */
    border: 1px solid #1b76d2;
    /* margin-left: 20px; */
    display: flex;
    justify-content: center;
    position: fixed;
    height: 500px;
    margin: 20px;
    right: -100%;
    transition: 1000ms;
    /* height: 100%; */
  }
`;

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  & > .navbar-toggle {
    border-radius: 20px;
    background-color: #ffffff;

    width: 100%;
    height: 80px;
    display: flex;
    justify-content: end;
    align-items: center;
  }
`;

const CloseIcon = styled.div`
  display: flex;
  align-items: end;
  margin-right: 2rem;
  font-size: 2rem;
  background: none;
  cursor: pointer;
  color: #1b76d2;
`;

const ModalInfo = styled.div`
  display: flex;
  text-decoration: none;
  color: #1b76d2;
  font-size: 18px;

  display: flex;
  /* align-items: center; */
  padding: 0 16px;

  flex-direction: column;
  width: 100%;
  height: 100%;
  /* border: 2px solid gold; */

  & > .info-container-text {
    /* border: 2px solid red; */
    display: flex;
    /* justify-content: center; */
    align-items: center;
    padding: 8px;
    & > span {
      /* display: flex; */
      font-size: larger;
      font-weight: bolder;
      margin-right: 10px;
    }
  }
`;

const ModalInfoContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;
