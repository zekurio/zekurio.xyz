import React from 'react';
import styled from 'styled-components';
import background from "../../assets/background2.jpg";
import logo from "../../assets/logo.png";

const HomeHeader = styled.header`
  width: 100%;
  height: 100vh;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  transition: transform 0.25s ease-in-out;
  &::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0,0,0,0.5);
    z-index: 0;
  }
`;

const GreetingDiv = styled.div`
  padding: 15vh 0;
  text-align: center;
  position: relative;
  z-index: 1;
  h1 {
    font-weight: 500;
    font-size: 80px;
    font-family: "Fira Mono", monospace;
    margin-bottom: 0;
  }
`;

const Logo = styled.img`
  width: 300px;
  height: 300px;
`;

function Header() {

  return (
    <HomeHeader>
      <GreetingDiv id="greeting">
        <Logo src={logo} alt="logo" />
        <h1>zekurio.xyz</h1>
      </GreetingDiv>
      
    </HomeHeader>
  )

}

export default Header;