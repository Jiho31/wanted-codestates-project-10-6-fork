import React from 'react';
import styled from 'styled-components';

export default function TimeListModal({ title, showListHandler }) {
  const startTimeList = [
    '오전 8시',
    '오전 9시',
    '오전 10시',
    '오전 11시',
    '오전 12시',
    '오후 1시',
    '오후 2시',
    '오후 3시',
    '오후 4시',
    '오후 5시',
  ];
  const careTimeList = [
    '1시간',
    '2시간',
    '3시간',
    '4시간',
    '5시간',
    '6시간',
    '7시간',
    '8시간',
    '9시간',
    '10시간',
    '11시간',
    '12시간',
  ];
  let timeList = [];
  const selectHandler = (e) => {
    showListHandler();

    if (title === 'start') {
      // 시작 시간 상태 셋 함수 실행
      timeList = startTimeList;
      console.log(e.target.innerText);
    }
    if (title === 'care') {
      // 돌봄 시간 상태 셋 함수 실행
      timeList = careTimeList;
      console.log(e.target.innerText);
    }
  };

  const subTitle = () => {
    switch (title) {
      case 'start':
        return '돌봄 시작 시간';
      case 'care':
        return '하루 돌봄 시간';
      default:
        return;
    }
  };

  return (
    <>
      <BackgroundSt>
        <ContainerSt>
          <MiniWrapper>
            <TitleSt>{subTitle()}</TitleSt>
            <div className="close" onClick={showListHandler}>
              x
            </div>
          </MiniWrapper>
          {startTimeList.map((el, idx) => (
            <TimeListSt key={idx} onClick={selectHandler}>
              {el}
            </TimeListSt>
          ))}
        </ContainerSt>
      </BackgroundSt>
    </>
  );
}

const BackgroundSt = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  top: -1px;
  left: 0px;
  width: 360px;
  height: 811px;
  position: absolute;
`;
const ContainerSt = styled.div`
  background-color: #fff;
  border-radius: 16px 16px 0 0;
  position: absolute;
  top: 256px;
  left: 0px;
  width: 360px;
  height: 625px;
`;
const MiniWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 17.8px 16px 16px;
  .close {
    :hover {
      cursor: pointer;
    }
  }
`;
const TitleSt = styled.div`
  font-size: 18px;
  line-height: 28px;
  font-weight: 700;
`;
const TimeListSt = styled.div`
  width: 100%;
  padding-left: 16px;
  font-size: 14px;
  height: 48px;
  line-height: 48px;
  transition: 0.1s;
  :hover {
    cursor: pointer;
    background-color: lightgray;
  }
`;
