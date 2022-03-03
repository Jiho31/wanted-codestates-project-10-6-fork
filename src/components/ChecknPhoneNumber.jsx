import React from 'react';
import styled from 'styled-components';
import ApplicationDetail from './ApplicationDetail';

function ChecknPhoneNumber() {
  return (
    <Container>
      <Guide>
        인증하신 휴대폰 번호로
        <br />
        케어코디 프로필을
        <br />
        받아보실 수 있어요 😃
        <br />
      </Guide>
      <DetailContainer>
        <ApplicationDetail />
      </DetailContainer>
      <PhoneNumber
        type="text"
        placeholder="전화번호를 입력해주세요 (숫자만 입력해주세요.)"
      />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Guide = styled.p`
  margin-top: 1rem;
  line-height: 36px;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 30px;
`;

const DetailContainer = styled.div`
  width: 320px;
  height: 452px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* border: 1px solid rgba(0, 0, 5, 0.5); */
  box-shadow: 0px 0px 16px 0px #0000000d;
  margin-bottom: 32px;
  border-radius: 8px;
`;

const PhoneNumber = styled.input`
  width: 328px;
  height: 48px;
  font-size: 14px;
  border: 1px solid #eeeeee;
  border-radius: 4px;
  padding-left: 16px;
`;

export default ChecknPhoneNumber;
