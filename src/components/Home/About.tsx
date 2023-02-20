import React from "react";
import styled from "styled-components";

const AboutDiv = styled.div`
  margin-top: 10vh;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  background-color: ${(p) => p.theme.background};
`;

function About() {
  return (
    <AboutDiv>
      <h1>About me</h1>
      <p>
        Hey there! 👋
        <br />
        <br />
        My name is Michael and I'm a software developer from Vienna, Austria. I am currently {new Date().getFullYear() - 2001 - ((new Date().getMonth() < 6 || (new Date().getMonth() === 6 && new Date().getDate() < 28)) ? 1 : 0)} years old and I'm studying computer science at the Vienna University of Technology.
        I have been passionate about programming since I was 14 years old, starting with some basic Batch scripts and other useless stuff. From there, I started to learn Python and Java, which I still sometimes use today.
        Later on I started to learn Go, Javascript and Typescript, which is what I used to create this website. In addition to that, I also collected some experience with C and C++ while using Linux as a daily driver for some time.
        <br />
        <br />
        My current focus is backend development, with my main programming language being Go. <a href="https://github.com/zekurio/daemon">daemon</a> is a project that started my journey into Go and I'm still working on it to this day.
        With daemon I also dipped my toes into Divization and databases, with Docker and Postgresql being my current go-to tools.
        <br />
        <br />
        But I am also an avid PC enthusiast and love tinkering with my hardware, with overclocking being my current nemesis. Of course, I also love to play games, with my current favorites being Cyberpunk 2077 and Valorant.
      </p>
    </AboutDiv>
  );
}

export default About;