import React from "react";
import styled from "styled-components";
import background from "../assets/background2.jpg";
import logo from "../assets/logo.png";

const HomeHeader = styled.header`
  width: 100%;
  height: 100vh;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  transition: transform 0.25s ease-in-out;
`;

const GrettingContainer = styled.div`
  padding: 15vh 0;
  text-align: center;
  h1 {
    font-weight: 300;
    font-size: 80px;
    font-family: "Fira Sans", sans-serif;
    margin-top: 0;
    margin-bottom: 0;
  }
  h2 {
    font-weight: 200;
    font-size: 27px;
    font-family: "Fira Sans", sans-serif;
    margin-top: 0;
    margin-bottom: 0;
  }
`;

function Home() {
  return (
    <HomeHeader>
      <GrettingContainer>
        <img src={logo} alt="logo" width={300} height={300}/>
        <h1>Hi 👋</h1>
        <h2>welcome to my homepage</h2>
      </GrettingContainer>
    </HomeHeader>
  );
}

export default Home;