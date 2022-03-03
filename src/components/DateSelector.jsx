import React from 'react';
import styled from 'styled-components';
import Calendar from './Calendar';

export default function DateSelector() {
  return (
    <ContainerSt>
      <TopSt>돌봄 날짜 선택</TopSt>
      <CalendarWrapper>
        <Calendar />
      </CalendarWrapper>
      <CalendarWrapper>{/* <Calendar /> */}</CalendarWrapper>
      <ButtonSt>선택 완료</ButtonSt>
    </ContainerSt>
  );
}

const ContainerSt = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
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
