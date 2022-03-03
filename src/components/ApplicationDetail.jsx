import React from 'react';
import styled from 'styled-components';

function ApplicationDetail() {
  return (
    <Detail>
      <span>신청 내역</span>
      <CareType>
        <h5>돌봄 유형</h5>
        <div>🕰시간제 돌봄</div>
      </CareType>
      <CareShedule>
        <h5>돌봄 일정</h5>
        <div>
          2022년 1월 12일 ~ 22년 1월 23일 <br />
          오전 10시부터
          <br />
          8시간
        </div>
      </CareShedule>
      <Address>
        <span>서울특별시 강남구 테헤란로 77길 9 (삼성동)</span>
        <span>
          <p>지번</p>
          <span>서울특별시 강남구 상성동 143-27</span>
          <span>케어닥주공아파트 102동 1204호</span>
        </span>
      </Address>
    </Detail>
  );
}

const Detail = styled.div``;

const CareType = styled.div``;

const CareShedule = styled.div``;

const Address = styled.div``;

export default ApplicationDetail;
