import React, { useState } from 'react';
import styled from 'styled-components';
import DateSelector from './DateSelector';
import TimeListModal from './TimeListModal';
import { ReactComponent as Fill } from 'assets/Fill.svg';
import UnderArrow from '../assets/UnderArrow.svg';
import { useSelector, useDispatch } from 'react-redux';
import { setShowCalendar } from 'modules/careDate';

export default function Schedule() {
  const [showStartTimeList, setShowStartTimeList] = useState(false);
  const [showCareTimeList, setShowCareTimeList] = useState(false);
  const careTime = useSelector((state) => state.careTime);
  const careDate = useSelector((state) => state.careDate);
  const showCalendar = useSelector((state) => state.careDate.showCalendar);

  const dispatch = useDispatch();

  const showStartTimeListHandler = () => {
    setShowStartTimeList(!showStartTimeList);
  };
  const showCareTimeListHandler = () => {
    setShowCareTimeList(!showCareTimeList);
  };

  const showCalendarHandler = () => {
    dispatch(setShowCalendar());
  };

  return (
    <ContainerSt>
      <SelectDateWrapperSt>
        <MiniWrapperSt>
          <span>시작일</span>
          <SelectDateSt onClick={showCalendarHandler}>
            <div>
              {careDate.startDate.set
                ? `${careDate.startDate.year}년 ${careDate.startDate.month}월 ${careDate.startDate.date}일`
                : '날짜 선택'}
            </div>
            <div>
              <Fill />
            </div>
          </SelectDateSt>
        </MiniWrapperSt>
        <MiniWrapperSt>
          <span>종료일</span>
          <SelectDateSt onClick={showCalendarHandler}>
            <div>
              {careDate.endDate.set
                ? `${careDate.endDate.year}년 ${careDate.endDate.month}월 ${careDate.endDate.date}일`
                : '날짜 선택'}
            </div>
            <div>
              <Fill />
            </div>
          </SelectDateSt>
        </MiniWrapperSt>
      </SelectDateWrapperSt>
      <MiniWrapperSt onClick={showStartTimeListHandler}>
        <span>돌봄 시작 시간</span>
        <SelectTimeSt>
          <div>{careTime.startTime ? careTime.startTime : '선택'}</div>
          <div className="arrow">
            <img src={UnderArrow} alt="" />
          </div>
        </SelectTimeSt>
      </MiniWrapperSt>
      <MiniWrapperSt onClick={showCareTimeListHandler}>
        <span>하루 돌봄 시간</span>
        <SelectTimeSt>
          <div>{careTime.careTime ? careTime.careTime : '선택'}</div>
          <div className="arrow">
            <img src={UnderArrow} alt="" />
          </div>
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
      {showCalendar && (
        <DateSelector showCalendarHandler={showCalendarHandler} />
      )}
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
  font-size: 14px;
  font-weight: 700;
  .arrow {
    width: 16px;
    height: 10px;
  }
`;
