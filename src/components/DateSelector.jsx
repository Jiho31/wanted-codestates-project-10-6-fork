import React, { useState, useMemo } from 'react';
import styled, { css } from 'styled-components';
import Calendar from './Calendar';
import { useDispatch } from 'react-redux';
import { setEndDate, setStartDate } from 'modules/careDate';
export default function DateSelector({ showCalendarHandler }) {
  const [targetYear, setTargetYear] = useState(new Date().getFullYear());
  const [targetMonth, setTargetMonth] = useState(new Date().getMonth() + 1);
  const [startDay, setStartDay] = useState(null);
  const [endDay, setEndDay] = useState(null);
  const dispatch = useDispatch();

  const selectedHandler = () => {
    if (endDay) {
      const { year: sY, month: sM, el: sD } = startDay;
      const { year: eY, month: eM, el: eD } = endDay;
      dispatch(setStartDate(sY, sM, sD));
      dispatch(setEndDate(eY, eM, eD));
      showCalendarHandler();
    }
  };

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
      <TopSt>돌봄 날짜 선택</TopSt>
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
      <ButtonSt endDay={endDay} onClick={selectedHandler}>
        선택 완료
      </ButtonSt>
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
  font-weight: 700;
`;
const CalendarWrapper = styled.div`
  /* background-color: skyblue; */
  border-top: 1px solid #f6f6f6;
  height: 444px;
`;
const ButtonSt = styled.div`
  background-color: #e2e2e2;
  width: 360px;
  text-align: center;
  line-height: 48px;
  position: absolute;
  bottom: 0px;
  height: 48px;
  font-weight: 700;
  ${({ endDay }) => {
    if (!endDay) return;
    return css`
      background-color: #ff8450;
      color: #fff;
    `;
  }}
`;
