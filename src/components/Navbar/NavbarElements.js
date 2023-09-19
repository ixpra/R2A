import { styled } from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaBars } from "react-icons/fa"; 

export const Nav = styled.nav`
 background: #000;
 height: 80px;
 display: flex;
 justify-content: space-between;
 padding: 0.5rem calc((100vw - 1000px) / 2);
 z-index: 10;
`;

export const NavLink = styled(Link)`
 color: #fff;
 display: flex;
 align-items: center;
 text-decoration: none;
 padding: 0 1rem;
 height: 100%;
 cursor: pointer;

&.active {
 color: 15cdfc;
}
`;

export const MobileIcon = styled(FaBars)`
  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(0%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff; 
  }
`;

export const Sidebar = styled.div`
  position: fixed;
  top: 0;
  left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  width: 250px;
  height: 100%;
  background-color: #101522;
  transition: all 0.3s ease;
`;

export const SidebarMenu = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  padding: 0;
  width: 100%;
  height: 100%;
`;

export const SidebarLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  padding: 1rem;
  width: 100%;
  text-align: center;

  &:hover {
    background-color: #15cdfc;
    color: #010606;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  list-style: none;
  margin-right: 24px;

  @media screen and (max-width: 760px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? 0 : "-100%")};
    opacity: 1;
    transition: all 0.5s ease;
    background: #101522;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 760px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #808080;
  padding: 10px 22px;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  margin-left: 24px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;
