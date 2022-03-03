import React, { useState } from 'react';
import styled from 'styled-components';

const titleInfo = [
  {
    id: 1,
    title: '돌봄 유형',
    content: '돌봄 유형을 설정해주세요',
  },
  {
    id: 2,
    title: '돌봄 스케줄',
    content: '돌봄 스케줄을 설정해주세요',
  },
  {
    id: 3,
    title: '돌봄 주소',
    content: '돌봄 주소를 입력해주세요',
  },
  {
    id: 4,
    title: '신청 완료',
    content: '인증하신 휴대폰 번호로\n케어코디 프로필을\n받아보실 수 있어요 ☺️',
  },
];

const PageTitle = () => {
  // props로 전달 받는 컴포넌트 인덱스 번호 (?)
  const [index, setIndex] = useState('3');

  return (
    <Container>
      <div className="top">
        <span className="title">{titleInfo[index].title}</span>
        <span className="page-index">
          <span style={{ color: '#FF8450' }}>{titleInfo[index].id} </span>/ 4
        </span>
      </div>
      <div className="bottom">
        <p>{titleInfo[index].content}</p>
      </div>
    </Container>
  );
};
const Container = styled.section`
  // width: 328px;
  width: 100%;
  height: auto;
  padding: 0 16px;
  font-weight: 700;
  .top {
    width: 100%;
    height: 26px;
    margin-bottom: 8px;
    display: flex;
    align-items: center;
  }
  .bottom {
    width: 100%;
    height: auto;
    font-size: 24px;
    line-height: 36px;
    p {
      width: 100%;
      white-space: pre-wrap;
    }
  }
  .title {
    font-size: 16px;
    margin-right: 8px;
  }
  .page-index {
    font-size: 12px;
    color: #d3d2d2;
  }
`;

export default PageTitle;
