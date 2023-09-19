import React, { useState } from 'react';
import { NavLink, Nav, NavMenu, MobileIcon, Sidebar, SidebarLink, SidebarMenu } from './NavbarElements';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [sidebar, setSidebar] = useState(false);

  const handleClick = () => setClick(!click);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <Nav>
        <NavLink to='/'>
          <img style={{ float: 'right', height: '100%' }} src={require('../../assets/r2logobehind.png')} alt="logo" />
        </NavLink>
        <MobileIcon onClick={showSidebar}>
          <FaBars />
        </MobileIcon>
        <NavMenu onClick={handleClick}>
          <NavLink to="home" activeStyle>
            Home
          </NavLink>
        </NavMenu>
        <NavMenu onClick={handleClick}>
          <NavLink to="roadmaps" activeStyle>
            Roadmaps
          </NavLink>
        </NavMenu>
        <NavMenu onClick={handleClick}>
          <NavLink to="about" activeStyle>
            About
          </NavLink>
        </NavMenu>
       
      </Nav>
      <Sidebar isOpen={sidebar} onClick={showSidebar}>
        <SidebarMenu>
          <SidebarLink to="home" onClick={showSidebar}>Home</SidebarLink>
          <SidebarLink to="roadmaps" onClick={showSidebar}>Roadmaps</SidebarLink>
          <SidebarLink to="about" onClick={showSidebar}>About</SidebarLink>
        </SidebarMenu>
      </Sidebar>
    </>
  );
};

export default Navbar;