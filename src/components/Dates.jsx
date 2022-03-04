import { setEndDate, setStartDate } from 'modules/careDate';
import React from 'react';
import { useDispatch } from 'react-redux';
import styled, { css } from 'styled-components';

export default function Dates({
  children,
  setClickday,
  startDay,
  endDay,
  isIncluded,
}) {
  const dispatch = useDispatch();
  const execGene = (clickDay) => {
    let { value } = setClickday.next(clickDay);
    if (!value) setClickday.next(clickDay);
  };

  const setDate = () => {
    // 선택상태저장
    const date = '222';
    dispatch(setStartDate(date));
    dispatch(setEndDate(date));
  };
  return (
    <DIV>
      <Date
        startDay={startDay}
        endDay={endDay}
        isIncluded={isIncluded}
        onClick={(e) => children && execGene(e.target.innerText)}
      >
        {children}
      </Date>
      {(startDay || endDay) && (
        <HalfBack startDay={startDay} endDay={endDay} isIncluded={isIncluded} />
      )}
    </DIV>
  );
}
const DIV = styled.div`
  position: relative;
  width: 50px;
  height: 48px;
`;
const Date = styled.div`
  position: absolute;
  font-weight: 700;
  text-align: center;
  z-index: 8;
  width: 50px;
  height: 48px;
  line-height: 60px;
  cursor: pointer;
  color: ${({ startDay, endDay }) => (startDay || endDay) && 'white'};
  border-radius: ${({ startDay, endDay }) => (startDay || endDay) && '50%'};
  ${({ startDay, endDay, isIncluded }) => {
    if (startDay || endDay) {
      return css`
        background-color: rgba(255, 132, 80, 1);
      `;
    } else {
      if (isIncluded) {
        return css`
          background-color: rgba(255, 207, 181, 1);
        `;
      }
    }
  }}
  &:hover {
    background-color: rgba(255, 132, 80, 1);
  }
`;
const HalfBack = styled.div`
  position: absolute;
  top: 0;
  width: 25px;
  height: 48px;
  z-index: 7;
  pointer-events: none;
  ${({ startDay, endDay, isIncluded }) => {
    if (startDay && isIncluded) {
      return css`
        background-color: rgba(255, 207, 181, 1);
        right: 0;
        opacity: 1;
      `;
    }
    if (endDay) {
      return css`
        background-color: rgba(255, 207, 181, 1);
        left: 0;
        opacity: 1;
      `;
    }
  }}
`;
