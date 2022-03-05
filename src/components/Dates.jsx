import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';

export default function Dates({
  children,
  setClickday,
  days,
  setStartDay,
  setEndDay,
  endDay,
  startDay,
}) {

  const execGene = (clickDay) => {
    let { value } = setClickday.next(clickDay);
    if (!value) setClickday.next(clickDay);
  };

  const setDate = () => {
    children && execGene(days);
  };

  useEffect(() => {
    if (!endDay) return;
    const { year: sY, month: sM, el: sD } = startDay;
    const { year: eY, month: eM, el: eD } = endDay;
    if (
      new Date(sY, sM - 1, sD).getTime() > new Date(eY, eM - 1, eD).getTime()
    ) {
      setStartDay(endDay);
      setEndDay(startDay);
    }
  }, [setStartDay, setEndDay, startDay, endDay]);

  return (
    <DIV onClick={setDate}>
      <DateC startDay={startDay} endDay={endDay} days={days}>
        {children}
      </DateC>
      {days.el && <HalfBack startDay={startDay} endDay={endDay} days={days} />}
    </DIV>
  );
}
const DIV = styled.div`
  position: relative;
  width: 50px;
  height: 48px;
`;
const DateC = styled.div`
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
  ${({ startDay, endDay, days }) => {
    const { year, month, el } = days;
    if (startDay || endDay) {
      const { year: sY, month: sM, el: sD } = startDay;
      if (endDay) {
        const { year: eY, month: eM, el: eD } = endDay;
        if (
          (eY !== year || eM !== month || eD !== el) &&
          (sY !== year || sM !== month || sD !== el)
        )
          return css`
            color: black;
          `;
        return css`
          background-color: rgba(255, 132, 80, 1);
        `;
      }
      if (sY !== year || sM !== month || sD !== el)
        return css`
          color: black;
        `;
      return css`
        background-color: rgba(255, 132, 80, 1);
      `;
    }
  }}
  ${({ startDay, days, endDay }) => {
    const { year, month, el } = days;
    if (el && endDay) {
      const { year: sY, month: sM, el: sD } = startDay;
      const { year: eY, month: eM, el: eD } = endDay;
      if (
        new Date(year, month - 1, el).getTime() <=
          new Date(sY, sM - 1, sD).getTime() ||
        new Date(year, month - 1, el).getTime() >=
          new Date(eY, eM - 1, eD).getTime()
      )
        return;

      return css`
        background-color: rgba(255, 207, 181, 1);
        border-radius: 0;
      `;
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
  ${({ startDay, endDay, days }) => {
    if (!endDay || startDay.el === endDay.el) return;
    const { year, month, el } = days;
    const { year: sY, month: sM, el: sD } = startDay;
    if (
      new Date(year, month - 1, el).getTime() ===
      new Date(sY, sM - 1, sD).getTime()
    )
      return css`
        background-color: rgba(255, 207, 181, 1);
        right: 0;
      `;
  }}
  ${({ startDay, endDay, days }) => {
    if (!endDay || startDay.el === endDay.el) return;
    const { year, month, el } = days;
    const { year: eY, month: eM, el: eD } = endDay;

    if (
      new Date(year, month - 1, el).getTime() ===
      new Date(eY, eM - 1, eD).getTime()
    )
      return css`
        background-color: rgba(255, 207, 181, 1);
        left: 0;
      `;
  }}
`;
