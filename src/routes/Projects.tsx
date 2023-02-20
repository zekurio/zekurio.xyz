import React, { useEffect} from 'react';
import styled from 'styled-components';
import Header from '../components/Projects/Header';
import Cards from '../components/Projects/Cards';

const OuterContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${(p) => p.theme.background};
  color: ${(p) => p.theme.text};
`;

function Projects() {

  useEffect(() => {
    document.title = "zekurio.xyz | Projects";
  }, []);

  return (
    <OuterContainer>
      <Header></Header>
      <Cards></Cards>
    </OuterContainer>
  );
}

export default Projects;