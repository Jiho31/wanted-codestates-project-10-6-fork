import React from 'react';
import styled from 'styled-components';

export default function Main() {
  return (
    <Wrapper>
      <div>
        <H5>어르신 돌보미</H5>
        <H4>케어코디</H4>
      </div>
      <Button>신청하기</Button>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const H5 = styled.h5`
  font-family: Spoqa Han Sans Neo;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 52px;
  letter-spacing: 0em;
  text-align: center;
`;
const H4 = styled.h4`
  font-family: Spoqa Han Sans Neo;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 52px;
  letter-spacing: 0em;
  text-align: center;
  color: rgba(255, 132, 80, 1);
`;
const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  position: static;
  width: 184px;
  height: 56px;
  left: 0px;
  top: 136px;
  background: #ff8450;
  border-radius: 40px;
  margin: 32px 0px;
  color: #fff;
`;
