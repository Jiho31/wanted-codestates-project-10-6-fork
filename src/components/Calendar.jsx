import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as LeftArrow } from 'assets/leftArrow.svg';
import { ReactComponent as RightArrow } from 'assets/rightArrow.svg';
import { ReactComponent as Fill } from 'assets/Fill.svg';

export default function Calendar(props) {
  const [targetYear, setTargetYear] = useState(new Date().getFullYear());
  const [targetMonth, setTargetMonth] = useState(new Date().getMonth());

  const {} = props;
  const days = ['일', '월', '화', '수', '목', '금', '토'];

  const today = new Date(targetYear, targetMonth + 1);
  const year = today.getFullYear();
  const month = today.getMonth();
  console.log(targetYear, targetMonth);
  console.log(year, month);

  const preLastInfo = new Date(year, month - 1, 0);
  const thisLastInfo = new Date(year, month, 0);
  console.log(preLastInfo);
  console.log(thisLastInfo);

  const preLastDate = preLastInfo.getDate();
  const preLastDay = preLastInfo.getDay();
  const thisLastDate = thisLastInfo.getDate();
  const thisLastDay = thisLastInfo.getDay();
  console.log(preLastDate);
  console.log(preLastDay, days[preLastDay]);
  console.log(thisLastDate);
  console.log(thisLastDay, days[thisLastDay]);

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
  return (
    <ContainerSt>
      <Title>
        <div className="arrow">
          <LeftArrow />
        </div>
        <div className="thisMonth">{`${year}년 ${month}월`}</div>
        <div className="arrow">
          <RightArrow />
        </div>
      </Title>
      <DatesWrapper>
        {days.map((el, idx) => (
          <Days key={idx}>{el}</Days>
        ))}
        {thisMonth.map((el, idx) => (
          <Dates key={idx}>{el}</Dates>
        ))}
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
const Dates = styled.div`
  font-weight: 700;
  text-align: center;
  width: 50px;
  height: 48px;
  line-height: 60px;
`;
