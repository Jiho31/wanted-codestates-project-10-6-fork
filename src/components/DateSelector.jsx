import React, { useState, useEffect, useMemo } from 'react';
import styled from 'styled-components';
import Calendar from './Calendar';
export default function DateSelector({ showCalendarHandler }) {
  const [targetYear, setTargetYear] = useState(new Date().getFullYear());
  const [targetMonth, setTargetMonth] = useState(new Date().getMonth() + 1);
  const [startDay, setStartDay] = useState(null);
  const [endDay, setEndDay] = useState(null);

  const init = () => {
    setStartDay(null);
    setEndDay(null);
  };
  const setClickday = useMemo(() => {
    return (function* () {
      while (true) {
        const selectedStDate = yield;
        setStartDay((prev) => ({ ...prev, ...selectedStDate }));
        const selectedEdDate = yield 1;
        setEndDay((prev) => ({ ...prev, ...selectedEdDate }));
        yield 2;
        init();
      }
    })();
  }, []);
  return (
    <ContainerSt>
      <TopSt onClick={showCalendarHandler}>돌봄 날짜 선택</TopSt>
      <CalendarWrapper>
        <Calendar
          month={targetMonth}
          setMonth={setTargetMonth}
          year={targetYear}
          setTargetYear={setTargetYear}
          startDay={startDay}
          setStartDay={setStartDay}
          endDay={endDay}
          setEndDay={setEndDay}
          setClickday={setClickday}
          pos="top"
        />
      </CalendarWrapper>
      <CalendarWrapper>
        <Calendar
          month={targetMonth + 1}
          setMonth={setTargetMonth}
          year={targetYear}
          setTargetYear={setTargetYear}
          startDay={startDay}
          setStartDay={setStartDay}
          endDay={endDay}
          setEndDay={setEndDay}
          setClickday={setClickday}
          pos="bottom"
        />
      </CalendarWrapper>
      <ButtonSt onClick={showCalendarHandler}>선택 완료</ButtonSt>
    </ContainerSt>
  );
}
const ContainerSt = styled.div`
  position: absolute;
  top: 0px;
  left: -16px;
  background-color: white;
  /* background-color: lightgray; */
  width: 360px;
  height: 1000px;
  z-index: 100;
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
  /* background-color: skyblue; */
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
