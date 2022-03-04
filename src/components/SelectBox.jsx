import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

export default function SelectBox({ children, icon, isActive }) {
  const boxRef = useRef();

  useEffect(() => {
    if (isActive === true) {
      boxRef.current.classList.add('active');
    } else {
      boxRef.current.classList.remove('active');
    }
  }, [isActive]);

  return (
    <Box className="box" ref={boxRef}>
      <Icon src={icon} />
      <span>{children}</span>
    </Box>
  );
}
const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px;
  cursor: pointer;
  background-color: #fff;

  position: static;
  width: 160px;
  height: 144px;
  left: calc(50% - 160px / 2 + 84px);
  top: 0px;

  border: 1px solid #eeeeee;
  box-sizing: border-box;
  border-radius: 4px;
  flex: none;
  order: 1;
  flex-grow: 1;
  margin: 0px 8px;
  font-size: 14px;
  font-weight: 700;

  &.active {
    background-color: #ff8450;
  }
  &.active > span {
    color: #fff;
  }
`;
const Icon = styled.img`
  font-family: Spoqa Han Sans Neo;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 68px;
  letter-spacing: 0em;
  text-align: center;
  margin-bottom: 10px;
`;
