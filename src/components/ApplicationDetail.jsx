import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

function ApplicationDetail() {
  const careTime = useSelector((state) => state.careTime);

  return (
    <Detail>
      <AppDetail>신청 내역</AppDetail>
      <CareType>
        <h5>돌봄 유형</h5>
        <div>🕰 시간제 돌봄</div>
      </CareType>
      <hr />
      <CareShedule>
        <h5>돌봄 일정</h5>
        <div>
          <div>2022년 1월 12일 ~ 22년 1월 23일</div>
          <div>{`${careTime.startTime}부터`}</div>
          <div>{careTime.careTime}</div>
        </div>
      </CareShedule>
      <hr />
      <Address>
        <h5>돌봄 주소</h5>
        <div>서울특별시 강남구 테헤란로 77길 9 (삼성동)</div>
        <DetailAddress>
          <p>지번</p>&nbsp;
          <span>서울특별시 강남구 삼성동 143-27</span>
        </DetailAddress>
        <div>
          <span>케어닥주공아파트 102동 1204호</span>
        </div>
      </Address>
    </Detail>
  );
}

const Detail = styled.div`
  width: 288px;
  height: 452px;
  display: flex;
  flex-direction: column;
  /* border: 1px solid black; */
  margin: 32px 16px;
  > hr {
    background-color: silver;
    border-top: 1px solid silver;
    color: silver;
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
  margin-top: 7px;
`;

const CareType = styled.div`
  height: 56px;
  margin-bottom: 16px;
  > h5 {
    height: 20px;
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 16px;
  }
  > div {
    height: 20px;
    font-size: 14px;
    font-weight: 400;
  }
`;

const CareShedule = styled.div`
  /* height: 112px; */
  margin-bottom: 10px;
  > h5 {
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 16px;
  }

  > div {
    > div {
      height: 20px;
      font-size: 14px;
      margin-bottom: 5px;
    }
  }
`;

const Address = styled.div`
  > h5 {
    height: 20px;
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 12px;
  }
  > div {
    font-size: 14px;
    height: 20px;
    margin-bottom: 5px;
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
`;

export default ApplicationDetail;
