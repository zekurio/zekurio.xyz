import React from 'react';
import styled from 'styled-components';
import { FaAngleDown } from "react-icons/fa";

const ArrowContainer = styled.div`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
`;

const Arrow = styled(FaAngleDown)`
  color: ${(p) => p.theme.white};
  font-size: 30px;
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

interface ArrowProps {
  onClick: () => void;
}

export default function ArrowComponent(props: ArrowProps) {
  return (
    <ArrowContainer onClick={props.onClick}>
      <Arrow />
    </ArrowContainer>
  );
}
