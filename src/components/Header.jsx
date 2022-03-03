import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderComponent>
      <button>&#xE000;</button>
      <p>돌보미 신청하기</p>
    </HeaderComponent>
  );
};
const HeaderComponent = styled.header`
  width: 100%;
  height: 56px;
  background: #fff;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 16px;
  position: fixed;
  top: 0;
  left: 0;

  button {
    color: #5b5555;
    cursor: pointer;
    width: 24px;
    height: 24px;
    font-size: 22px;
    font-weight: 500;
  }
  p {
    width: 296px;
    height: 26px;
    color: #5b5555;
    text-align: center;
    font-size: 16px;
    font-weight: bold;
    line-height: 26px;
  }
`;

export default Header;
