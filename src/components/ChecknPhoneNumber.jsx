import React from 'react';
import styled from 'styled-components';
import ApplicationDetail from './ApplicationDetail';

function ChecknPhoneNumber() {
  return (
    <Container>
      {/* <Guide>
        인증하신 휴대폰 번호로
        <br />
        케어코디 프로필을
        <br />
        받아보실 수 있어요😃
        <br />
      </Guide> */}
      <div>
        <ApplicationDetail />
        <PhoneNumber
          type="text"
          placeholder="전화번호를 입력해주세요 (숫자만 입력해주세요.)"
        />
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

const Guide = styled.p`
  margin-top: 1rem;
  line-height: 36px;
  font-size: 24px;
  font-weight: 700;
`;

const PhoneNumber = styled.input`
  width: 360px;
  font-size: 14px;
  line-height: 20px;
`;

export default ChecknPhoneNumber;
