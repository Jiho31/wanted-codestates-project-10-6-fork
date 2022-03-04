import React, { useState, useMemo } from 'react';
import styled from 'styled-components';
import { ReactComponent as LeftArrow } from 'assets/leftArrow.svg';
import { ReactComponent as RightArrow } from 'assets/rightArrow.svg';
import { ReactComponent as Fill } from 'assets/Fill.svg';
import Dates from 'components/Dates';

export default function Calendar(props) {
  const { month, setMonth, year, setTargetYear } = props;
  const [startDay, setStartDay] = useState(null);
  const [endDay, setEndDay] = useState(null);
  const days = ['일', '월', '화', '수', '목', '금', '토'];
  const preLastInfo = new Date(year, month - 1, 0);
  const thisLastInfo = new Date(year, month, 0);

  const preLastDate = preLastInfo.getDate();
  const preLastDay = preLastInfo.getDay();
  const thisLastDate = thisLastInfo.getDate();
  const thisLastDay = thisLastInfo.getDay();

  const preDates = [];
  const nextDates = [];

  if (preLastDay < 6) {
    for (let i = preLastDate; i > preLastDate - preLastDay - 1; i--) {
      preDates.unshift('');
    }
  }
  for (let i = 1; i < 7 - thisLastDay; i++) {
    nextDates.push('');
  }
  const thisDates = [...Array(thisLastDate + 1).keys()].slice(1);

  const thisMonth = [...preDates, ...thisDates, ...nextDates];

  const monthHandler = (n) => {
    const newDate = new Date(year, month + n, 0);
    setMonth(newDate.getMonth() + 1);
    setTargetYear(newDate.getFullYear());
  };

  const init = () => {
    setStartDay(null);
    setEndDay(null);
  };
  const setClickday = useMemo(() => {
    return (function* () {
      while (true) {
        const startDay = yield;
        setStartDay(startDay);
        const endDay = yield 1;
        setEndDay(endDay);
        yield 2;
        init();
      }
    })();
  }, []);
  const newThisMonth = [...thisMonth.filter((v) => v)];
  const vaildate = (startDay, endDay, el) => {
    if (startDay <= endDay) {
      return el >= newThisMonth[startDay - 1] && el <= newThisMonth[endDay - 1]
        ? true
        : false;
    } else {
      setStartDay(endDay);
      setEndDay(startDay);
    }
  };
  return (
    <ContainerSt>
      <Title>
        <div className="arrow">
          <LeftArrow onClick={() => monthHandler(-1)} />
        </div>
        <div className="thisMonth">{`${year}년 ${month}월`}</div>
        <div className="arrow">
          <RightArrow onClick={() => monthHandler(1)} />
        </div>
      </Title>
      <DatesWrapper>
        {days.map((el, idx) => (
          <Days key={idx}>{el}</Days>
        ))}
        {thisMonth.map((el, idx) => {
          return (
            <Dates
              key={idx}
              setClickday={setClickday}
              startDay={el === newThisMonth[startDay - 1] ? true : false}
              endDay={el === newThisMonth[endDay - 1] ? true : false}
              isIncluded={endDay ? vaildate(+startDay, +endDay, el) : false}
            >
              {el}
            </Dates>
          );
        })}
      </DatesWrapper>
    </ContainerSt>
  );
}

const ContainerSt = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 32px;
  width: 192.4px;
  height: 40px;
  .thisMonth {
    font-size: 24px;
    font-weight: 700;
    line-height: 36px;
  }
  .arrow {
    width: 13.6px;
    height: 12.7px;
  }
`;
const DatesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 350px;
`;
const Days = styled.div`
  text-align: center;
  font-weight: 700;
  width: 50px;
  height: 48px;
  line-height: 60px;
`;
