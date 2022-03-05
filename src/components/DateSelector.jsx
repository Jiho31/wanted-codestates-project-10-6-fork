import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled, { css } from 'styled-components';
import Calendar from './Calendar';
export default function DateSelector({ showCalendarHandler }) {
  const [targetYear, setTargetYear] = useState(new Date().getFullYear());
  const [targetMonth, setTargetMonth] = useState(new Date().getMonth() + 1);
  // const today = new Date(targetYear, targetMonth + 1);
  // const [month, setMonth] = useState(today.getMonth());

  const startDateSet = useSelector((state) => state.careDate.startDate.set);
  const endDateSet = useSelector((state) => state.careDate.endDate.set);
  const isOnButton = startDateSet && endDateSet;
  console.log('on', isOnButton);

  const buttonHandler = () => {
    if (isOnButton) {
      showCalendarHandler();
    }
  };
  return (
    <ContainerSt>
      <div>
        <TopSt>돌봄 날짜 선택</TopSt>
        <CalendarWrapper>
          <Calendar
            month={targetMonth}
            setMonth={setTargetMonth}
            year={targetYear}
            setTargetYear={setTargetYear}
          />
        </CalendarWrapper>
        {/* <CalendarWrapper>
        <Calendar
          month={targetMonth + 1}
          setMonth={setTargetMonth}
          year={targetYear}
          setTargetYear={setTargetYear}
        />
      </CalendarWrapper> */}
      </div>

      <ButtonSt onClick={buttonHandler} isOnButton={isOnButton}>
        선택 완료
      </ButtonSt>
    </ContainerSt>
  );
}
const ContainerSt = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: white;
  width: 360px;
  min-height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px;

  z-index: 9;
`;
const TopSt = styled.div`
  text-align: center;
  line-height: 48px;
  font-weight: 700;
  width: 360px;
  height: 48px;
  padding: 0 17.8px;
  position: relative;
`;
const CalendarWrapper = styled.div`
  border-top: 1px solid #f6f6f6;
  height: 444px;
`;
const ButtonSt = styled.div`
  background-color: #e2e2e2;
  width: 360px;
  text-align: center;
  line-height: 48px;
  /* position: absolute; */
  /* bottom: 0px; */
  height: 48px;
  font-weight: 700;
  ${(props) => {
    if (props.isOnButton) {
      return css`
        background-color: #ff8450;
        color: #fff;
        cursor: pointer;
      `;
    }
  }}
`;
