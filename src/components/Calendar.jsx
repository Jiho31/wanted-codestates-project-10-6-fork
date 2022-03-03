import React from 'react';
import styled from 'styled-components';

const days = ['일', '월', '화', '수', '목', '금', '토'];

export default function Calendar() {
  console.log('aa');

  const today = new Date(2022, 13);

  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();

  const preLastInfo = new Date(year, month - 1, 0);
  const thisLastInfo = new Date(year, month, 0);

  console.log(preLastInfo);
  console.log(thisLastInfo);

  const preLastDate = preLastInfo.getDate();
  const preLastDay = preLastInfo.getDay();
  const thisLastDate = thisLastInfo.getDate();
  const thisLastDay = thisLastInfo.getDay();
  console.log(preLastDate);
  console.log(preLastDay);
  console.log(thisLastDate);
  console.log(days[thisLastDay]);

  const preDates = [];
  const nextDates = [];
  //
  // 28 -
  if (preLastDay < 6) {
    for (let i = preLastDate; i > preLastDate - preLastDay - 1; i--) {
      preDates.unshift(i);
    }
  }

  for (let i = 1; i < 7 - thisLastDay; i++) {
    nextDates.push(i);
  }

  const thisDates = [...Array(thisLastDate + 1).keys()].slice(1);

  console.log(preDates);
  console.log(nextDates);
  console.log(thisDates);

  const thisMonth = [...preDates, ...thisDates, ...nextDates];
  console.log(thisMonth);
  return (
    <ContainerSt>
      {thisMonth.map((el, idx) => (
        <Dates key={idx}>{el}</Dates>
      ))}
    </ContainerSt>
  );
}

const ContainerSt = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 220px;
`;
const Dates = styled.div`
  text-align: center;
  width: 30px;
`;
