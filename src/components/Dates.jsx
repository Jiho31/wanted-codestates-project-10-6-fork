import { setEndDate, setStartDate } from 'modules/careDate';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, { css } from 'styled-components';

export default function Dates(props) {
  const {
    children,
    setClickday,
    startDay,
    endDay,
    isIncluded,
    year,
    month,
    date,
  } = props;
  const dispatch = useDispatch();
  const execGene = (clickDay) => {
    let { value } = setClickday.next(clickDay);
    if (!value) setClickday.next(clickDay);
  };

  const makeCompareAbleDate = (year, month, date) => {
    month = month < 10 ? '0' + month : month;
    date = date < 10 ? '0' + date : date;
    return Number(`${year}${month}${date}`);
  };

  const dateState = useSelector((state) => state.careDate);

  const setDate = () => {
    const thisDate = makeCompareAbleDate(year, month, date);
    console.log(dateState);
    // 스토어에 startDate가 없으면
    const startSet = dateState.startDate.set;
    const endSet = dateState.endDate.set;
    console.log(startSet, endSet);
    console.log(startSet && endSet);
    if (startSet && endSet) {
      console.log('둘다있네');
      dispatch(setStartDate(year, month, date));
      dispatch(setEndDate(null, null, null, false));
    } else {
      if (!startSet) {
        console.log('end');
        dispatch(setStartDate(year, month, date));
      } else {
        // startDate가 있으면
        const startDate = makeCompareAbleDate(
          dateState.startDate.year,
          dateState.startDate.month,
          dateState.startDate.date,
        );

        if (thisDate > startDate) {
          dispatch(setEndDate(year, month, date));
        } else {
          //선택날짜가 startDate보다 빠르다면
          //기존 startDate가 endDate가되고
          //선택한 날이 startDate가된다.
          dispatch(
            setEndDate(
              dateState.startDate.year,
              dateState.startDate.month,
              dateState.startDate.date,
            ),
          );
          dispatch(setStartDate(year, month, date));
        }
      }
    }
  };

  return (
    <DIV onClick={setDate}>
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
      if (endDay) {
        return css`
          background-color: rgba(255, 207, 181, 1);
          right: 0;
          opacity: 0;
        `;
      } else {
        return css`
          background-color: rgba(255, 207, 181, 1);
          right: 0;
          opacity: 1;
        `;
      }
    }
    if (endDay && isIncluded) {
      return css`
        background-color: rgba(255, 207, 181, 1);
        left: 0;
        opacity: 1;
      `;
    }
  }}
`;
