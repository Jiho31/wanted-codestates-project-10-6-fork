import React, { useState } from 'react';
import styled from 'styled-components';
import DateSelector from './DateSelector';
import TimeListModal from './TimeListModal';
import { ReactComponent as Fill } from 'assets/Fill.svg';

export default function Schedule() {
  const [showStartTimeList, setShowStartTimeList] = useState(false);
  const [showCareTimeList, setShowCareTimeList] = useState(false);
  // const [select]

  const showStartTimeListHandler = () => {
    setShowStartTimeList(!showStartTimeList);
  };
  const showCareTimeListHandler = () => {
    setShowCareTimeList(!showCareTimeList);
  };

  return (
    <ContainerSt>
      <SelectDateWrapperSt>
        <MiniWrapperSt>
          <span>시작일</span>
          <SelectDateSt>
            <div>날짜 선택</div>
            <div>
              <Fill />
            </div>
          </SelectDateSt>
        </MiniWrapperSt>
        <MiniWrapperSt>
          <span>종료일</span>
          <SelectDateSt>
            <div>날짜 선택</div>
            <div>
              <Fill />
            </div>
          </SelectDateSt>
        </MiniWrapperSt>
      </SelectDateWrapperSt>
      <MiniWrapperSt onClick={showStartTimeListHandler}>
        <span>돌봄 시작 시간</span>
        <SelectTimeSt>
          <div>선택</div>
          <div>화살표</div>
        </SelectTimeSt>
      </MiniWrapperSt>
      <MiniWrapperSt onClick={showCareTimeListHandler}>
        <span>하루 돌봄 시간</span>
        <SelectTimeSt>
          <div>선택</div>
          <div>화살표</div>
        </SelectTimeSt>
      </MiniWrapperSt>
      {showStartTimeList && (
        <TimeListModal
          title="start"
          showListHandler={showStartTimeListHandler}
        />
      )}
      {showCareTimeList && (
        <TimeListModal //
          title="care"
          showListHandler={showCareTimeListHandler}
        />
      )}
      <DateSelector />
    </ContainerSt>
  );
}

const ContainerSt = styled.section`
  width: 100%;
  height: 458px;
  padding: 32px 0 64px;
  position: relative;
`;
const SelectDateWrapperSt = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const SelectDateSt = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f6f6f6;
  border-radius: 4px;
  width: 160px;
  height: 48px;
  font-size: 14px;
  line-height: 20px;
  font-weight: 700;
  padding: 0 16px;
  div {
    display: flex;
    align-items: center;
  }
`;
const MiniWrapperSt = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  span {
    font-size: 14px;
    font-weight: 700;
    line-height: 20px;
    margin-bottom: 8px;
  }
`;
const SelectTimeSt = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;
  height: 48px;
  border: none;
  background-color: #f6f6f6;
  padding: 14px 16px;
  option {
  }
`;
