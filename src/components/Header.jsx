import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderComponent>
      <button>
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M31 36L19 24L31 12"
            stroke="black"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
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

  button {
    cursor: pointer;
    width: 24px;
    height: 24px;
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
