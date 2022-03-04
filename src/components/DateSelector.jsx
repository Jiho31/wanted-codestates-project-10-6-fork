import React, { useState } from 'react';
import styled from 'styled-components';
import Calendar from './Calendar';
export default function DateSelector() {
  const [targetYear, setTargetYear] = useState(new Date().getFullYear());
  const [targetMonth, setTargetMonth] = useState(new Date().getMonth() + 1);
  // const today = new Date(targetYear, targetMonth + 1);
  // const [month, setMonth] = useState(today.getMonth());
  return (
    <ContainerSt>
      <TopSt>돌봄 날짜 선택</TopSt>
      <CalendarWrapper>
        <Calendar
          month={targetMonth}
          setMonth={setTargetMonth}
          year={targetYear}
          setTargetYear={setTargetYear}
        />
      </CalendarWrapper>
      <CalendarWrapper>
        {/* <Calendar
          month={targetMonth + 1}
          setMonth={setTargetMonth}
          year={targetYear}
          setTargetYear={setTargetYear}
        /> */}
      </CalendarWrapper>
      <ButtonSt>선택 완료</ButtonSt>
    </ContainerSt>
  );
}
const ContainerSt = styled.div`
  position: absolute;
  top: 0px;
  left: -16px;
  background-color: lightgray;
  width: 360px;
  height: 1000px;
`;
const TopSt = styled.div`
  text-align: center;
  line-height: 48px;
  width: 360px;
  height: 48px;
  padding: 0 17.8px;
  position: relative;
`;
const CalendarWrapper = styled.div`
  background-color: skyblue;
  border-top: 1px solid #f6f6f6;
  height: 444px;
`;
const ButtonSt = styled.div`
  background-color: orange;
  width: 360px;
  text-align: center;
  line-height: 48px;
  position: absolute;
  bottom: 0px;
  height: 48px;
`;
