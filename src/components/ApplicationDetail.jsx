import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

function ApplicationDetail() {
  const careType = useSelector((state) => state.activeButton.careType);
  const careTime = useSelector((state) => state.careTime);
  const address = useSelector((state) => state.address);
  return (
    <Detail>
      <AppDetail>신청 내역</AppDetail>
      <CareType>
        <h5>돌봄 유형</h5>
        {careType === 'full' ? (
          <div>🌞 &nbsp;24시간 상주</div>
        ) : (
          <div>⏰ &nbsp;시간제 돌봄</div>
        )}
      </CareType>
      <CareShedule>
        <h5>돌봄 일정</h5>
        <div>
          <div>2022년 1월 12일 ~ 22년 1월 23일</div>
          <div>{`${careTime.startTime}부터`}</div>
          <div>{careTime.careTime}</div>
        </div>
      </CareShedule>
      <Address>
        <h5>돌봄 주소</h5>
        <div>{address.roadAddr}</div>
        <DetailAddress>
          <p>지번</p>&nbsp;
          <span>{address.jibunAddr}</span>
        </DetailAddress>
        <div>
          <span>{address.userAddr}</span>
        </div>
      </Address>
    </Detail>
  );
}

const Detail = styled.div`
  width: 288px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  /* border: 1px solid black; */
  margin: 0 32px 16px;
  > hr {
    background-color: #f6f6f6;
    height: 1px;
    width: 288px;
    margin-bottom: 30px;
  }
`;

const AppDetail = styled.h3`
  width: 288px;
  height: 26px;
  line-height: 26px;
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 16px;
  margin-top: 32px;
`;

const CareType = styled.div`
  height: 56px;
  margin-bottom: 16px;
  padding-bottom: 16px;
  > h5 {
    height: 20px;
    line-height: 20px;
    font-size: 14px;
    font-weight: 700;
  }
  > div {
    border-bottom: 1px solid #f6f6f6;
    height: 52px;
    font-size: 14px;
    font-weight: 400;
    padding: 16px 0;
  }
`;

const CareShedule = styled.div`
  /* height: 112px; */
  border-bottom: 1px solid #f6f6f6;

  margin-top: 16px;
  > h5 {
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 16px;
  }

  > div {
    > div {
      height: 20px;
      font-size: 14px;
      margin-bottom: 8px;
    }
  }
`;

const Address = styled.div`
  margin-top: 16px;
  > h5 {
    height: 20px;
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 16px;
  }
  > div {
    font-size: 14px;
    height: 20px;
    margin-bottom: 8px;
  }
`;

const DetailAddress = styled.div`
  display: flex;
  > p {
    font-size: 10px;
    position: relative;
    width: 35px;
    line-height: 20px;
    border-radius: 8px;
    text-align: center;
    top: -4px;
    background: #7d78781a;
  }
  > span {
    font-size: 12px;
    color: #7d7878;
  }
`;

export default ApplicationDetail;
