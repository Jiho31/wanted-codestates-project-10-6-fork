import { phoneNumberChange } from 'modules/activeButton';
import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import ApplicationDetail from './ApplicationDetail';

function ChecknPhoneNumber() {
  const dispatch = useDispatch();

  const changeHandler = (e) => {
    const pnumber = e.target.value;
    if (e.type === 'keyup' && isNaN(Number(e.key))) {
      return;
    } else if (e.type === 'change' && isNaN(Number(pnumber))) {
      return;
    }
    dispatch(phoneNumberChange(pnumber));
  };

  const inputNumber = useSelector((state) => state.activeButton.number);

  return (
    <>
      <Container>
        <DetailContainer>
          <ApplicationDetail />
        </DetailContainer>
        <PhoneNumber
          type="text"
          placeholder="전화번호를 입력해주세요 (11자리의 숫자)"
          onKeyUp={changeHandler}
          onChange={changeHandler}
          maxLength="11"
          value={inputNumber}
        />
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

const DetailContainer = styled.div`
  width: 320px;
  /* height: 452px; */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
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
  margin-bottom: 62px;
  ::placeholder {
    color: #b6b3b3;
  }
`;

export default ChecknPhoneNumber;
