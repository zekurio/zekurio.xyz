import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo.png";

const NavbarContainer = styled.div`
  background-color: #000;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

const Logo = styled.img`
    width: 35px;
    height: 35px;
    margin: 10px;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
`;

const NavItem = styled.li`
  display: inline-block;
  font-family: "Fira Mono", monospace;
  font-weight: 500;
`;

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 18px;
  margin-right: 50px;
`;

function Navbar() {
  return (
    <NavbarContainer>
        <Logo src={logo} alt="logo" />
      <NavList>
        <NavItem>
          <NavLink to="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/projects">Projects</NavLink>
        </NavItem>
        <NavItem>
            <NavLink to="/setup">Setup</NavLink>
        </NavItem>
        <NavItem>
            <NavLink to="/about">About</NavLink>
        </NavItem>
      </NavList>
    </NavbarContainer>
  );
}

export default Navbar;