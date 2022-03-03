import React from 'react';
import styled from 'styled-components';

const Complete = () => {
  return (
    <Container>
      <div>📱 신청이 완료되었습니다!</div>
      <p>
        신청하신 내용을 보고 케어코디님들이 지원할 예정입니다. 케어코디님들이
        신청할 때 마다 앱이나 문자로 알림을 보내드립니다.
        <br /> 케어코디님의 지원 알림을 기다려주세요!
      </p>
      <EndButton>끝내기</EndButton>
    </Container>
  );
};

const Container = styled.section`
  width: 360px;
  height: 268px;
  padding: 32px 16px;

  div {
    width: 100%;
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;
    margin-bottom: 8px;
  }
  p {
    width: 100%;
    font-weight: 400;
    line-height: 20px;
    color: #7d7878;
  }
`;
const EndButton = styled.button`
  margin: 32px auto;
  width: 71px;
  height: 48px;
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  padding: 14px 15px;
  border-radius: 4px;
  border: 1px solid #e2e2e2;
`;

export default Complete;
