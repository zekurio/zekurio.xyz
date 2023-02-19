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

const GreetingContainer = styled.div`
  padding: 15vh 0;
  text-align: center;
  h1 {
    font-weight: 300;
    font-size: 80px;
    font-family: "Fira Sans", sans-serif;
    margin-bottom: 0;
  }
`;

const AboutContainer = styled.div`
  padding: 10vh 0;
  background-color: #000;
  h1 {
    text-align: center;
    font-family: "Fira Sans", sans-serif;
    font-weight: 200;
    font-size: 48px;
  }
  p {
    font-family: "Fira Sans", sans-serif;
    font-weight: 400;
    font-size: 20px;
    margin-left: 20vw;
    margin-right: 20vw;
  }
`;

function Home() {
  return (
    <>
      <HomeHeader>
        <GreetingContainer>
          <img src={logo} alt="logo" width={300} height={300}/>
          <h1>zekurio.xyz</h1>
        </GreetingContainer>
      </HomeHeader>
      <AboutContainer>
        <h1>ABOUT ME</h1>
        <p>
          Hey there! 👋
          <br />
          <br />
          My name is Michael and I'm a software developer from Vienna, Austria. I am currently {new Date().getFullYear() - 2001} years old and I'm studying computer science at the Vienna University of Technology.
          I have been passionate about programming since I was 14 years old, starting with some basic Batch scripts and other useless stuff. From there, I started to learn Python and Java, which I still sometimes use today.
          Later on I started to learn Go, Javascript and Typescript, which is what I used to create this website. In addition to that, I also collected some experience with C and C++ while using Linux as a daily driver for some time.
          <br />
          <br />
          My current focus is backend development, with my main programming language being Go. [daemon](https://github.com/zekurio/daemon) is a project that started my journey into Go and I'm still working on it to this day.
          With daemon I also dipped my toes into containerization and databases, with Docker and Postgresql being my current go-to tools.
          <br />
          <br />
          But I am also an avid PC enthusiast and love tinkering with my hardware, with overclocking being my current nemesis. Of course, I also love to play games, with my current favorites being Cyberpunk 2077 and Valorant.
        </p>
      </AboutContainer>
    </>
  );
}

export default Home;