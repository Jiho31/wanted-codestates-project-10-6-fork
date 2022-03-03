import React from 'react';
import styled from 'styled-components';

const AddressList = () => {
  return (
    <>
      <ListBox>
        <LeftBox>
          <TopText>
            <h1>서울특별시 강남구 테헤란로77길 6 (삼성동)</h1>
          </TopText>
          <BottomText>
            <span>지번</span>
            <p>서울특별시 강남구 삼성동 144-21</p>
          </BottomText>
        </LeftBox>
        <RightBox>
          <h1>06158</h1>
        </RightBox>
      </ListBox>
    </>
  );
};

const ListBox = styled.div`
  width: 100%;
  height: 80px;
  background-color: #fff;
  border-bottom: 1px solid #f6f6f6;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
`;

const LeftBox = styled(ListBox)`
  width: 80%;
  height: 100%;
  border-bottom: none;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0;
`;

const TopText = styled(ListBox)`
  width: 100%;
  height: 50%;
  border-bottom: 0;
  padding: 0;
  justify-content: flex-start;
  align-items: flex-end;
  font-size: 14px;
  font-weight: bold;
  padding-bottom: 4px;
`;

const BottomText = styled(TopText)`
  color: #7d7878;
  font-size: 12px;
  font-weight: 400;
  align-items: flex-start;
  padding-top: 4px;
  padding-bottom: 0px;

  span {
    font-weight: bold;
    font-size: 10px;
    padding: 0px 8px;
    background: #f6f6f6;
    border-radius: 32px;
    color: #b6b3b3;
    margin-right: 4px;
  }
`;

const RightBox = styled(ListBox)`
  width: 20%;
  height: 100%;
  border-bottom: none;
  font-size: 14px;
  font-weight: bold;
  justify-content: flex-end;
  padding: 0;
`;

export default AddressList;
