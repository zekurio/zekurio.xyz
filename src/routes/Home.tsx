import React, { useEffect } from "react";
import styled from "styled-components";
import background from "../assets/background2.jpg";
import logo from "../assets/logo.png";
import { FaAngleDown } from "react-icons/fa";

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
    font-weight: 300;
    font-size: 80px;
    font-family: "Fira Sans", sans-serif;
    margin-bottom: 0;
  }
`;

const ScrollDownArrow = styled(FaAngleDown)`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 30px;
  cursor: pointer;
  animation: arrow-bounce 2s infinite;
  @keyframes arrow-bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(10px);
    }
    60% {
      transform: translateY(5px);
    }
  }
`;

const AboutDiv = styled.div`
  margin-top: 10vh;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
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

  useEffect(() => {
    document.title = "zekurio.xyz | Home";
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about-section");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div id="home_route">
      <HomeHeader>
        <GreetingDiv id="greeting">
          <img src={logo} alt="logo" width={300} height={300}/>
          <h1>zekurio.xyz</h1>
        </GreetingDiv>
      </HomeHeader>
      <ScrollDownArrow onClick={scrollToAbout}>
        <span />
      </ScrollDownArrow>
      <AboutDiv id="about-section">
        <h1>ABOUT ME</h1>
        <p>
          Hey there! 👋
          <br />
          <br />
          My name is Michael and I'm a software developer from Vienna, Austria. I am currently {new Date().getFullYear() - 2001 - ((new Date().getMonth() < 6 || (new Date().getMonth() === 6 && new Date().getDate() < 28)) ? 1 : 0)} years old and I'm studying computer science at the Vienna University of Technology.
          I have been passionate about programming since I was 14 years old, starting with some basic Batch scripts and other useless stuff. From there, I started to learn Python and Java, which I still sometimes use today.
          Later on I started to learn Go, Javascript and Typescript, which is what I used to create this website. In addition to that, I also collected some experience with C and C++ while using Linux as a daily driver for some time.
          <br />
          <br />
          My current focus is backend development, with my main programming language being Go. [daemon](https://github.com/zekurio/daemon) is a project that started my journey into Go and I'm still working on it to this day.
          With daemon I also dipped my toes into Divization and databases, with Docker and Postgresql being my current go-to tools.
          <br />
          <br />
          But I am also an avid PC enthusiast and love tinkering with my hardware, with overclocking being my current nemesis. Of course, I also love to play games, with my current favorites being Cyberpunk 2077 and Valorant.
        </p>
      </AboutDiv>
    </div>
  );
}

export default Home;