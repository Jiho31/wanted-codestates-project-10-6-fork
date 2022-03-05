import React from 'react';
import styled from 'styled-components';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import Dates from 'components/Dates';

export default function Calendar(props) {
  const {
    month,
    setMonth,
    year,
    setTargetYear,
    startDay,
    setStartDay,
    endDay,
    setEndDay,
    setClickday,
    pos,
  } = props;

  const days = ['일', '월', '화', '수', '목', '금', '토'];
  const preLastInfo = new Date(year, month - 1, 0);
  const thisLastInfo = new Date(year, month, 0);
  const preLastDate = preLastInfo.getDate();
  const preLastDay = preLastInfo.getDay();
  const thisLastDate = thisLastInfo.getDate();
  const thisLastDay = thisLastInfo.getDay();

  const preDates = [];
  const nextDates = [];
  const newYear = new Date(year, month, 0).getFullYear();
  const newMonth = new Date(year, month, 0).getMonth() + 1;

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
    const newDate = new Date(year, month + (pos === 'bottom' ? n - 1 : n), 0);
    setMonth(newDate.getMonth() + 1);
    setTargetYear(newDate.getFullYear());
  };
  return (
    <ContainerSt>
      <Title>
        <div className="arrow">
          <div onClick={() => monthHandler(-1)}>
            <AiOutlineArrowLeft />
          </div>
        </div>
        <div className="thisMonth">{`${newYear}년 ${newMonth}월`}</div>
        <div className="arrow">
          <div onClick={() => monthHandler(1)}>
            <AiOutlineArrowRight />
          </div>
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
              days={{ year, month, el }}
              startDay={startDay}
              setStartDay={setStartDay}
              endDay={endDay}
              setEndDay={setEndDay}
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
    cursor: pointer;
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
