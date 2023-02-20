import React, { useEffect } from "react";
import styled from "styled-components";
import Header from "../components/Home/Header";
import About from "../components/Home/About";
import ArrowComponent from "../components/Home/Arrow";

const OuterContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${(p) => p.theme.background};
  color: ${(p) => p.theme.text};
`;

function Home() {

  useEffect(() => {
    document.title = "zekurio.xyz | Home";
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about-section");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <OuterContainer>
      <Header></Header>
      <ArrowComponent onClick={scrollToAbout} />
      <div id="about-section">
        <About></About>
      </div>
    </OuterContainer>
  );
}

export default Home;