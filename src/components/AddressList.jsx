import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { setAddress } from 'modules/address';

const AddressList = ({ datas, setIsOpen }) => {
  const searchAddressList = datas;
  const dispatch = useDispatch();
  const selectAddress = (datas) => {
    dispatch(setAddress(datas));
    setIsOpen(false);
  };
  const listSearchAddress = () => {
    if (!searchAddressList) return;
    return searchAddressList.map((el, idx) => (
      <ListBox
        className="list_box"
        key={idx}
        onClick={() => {
          selectAddress(el);
        }}
      >
        <LeftBox>
          <TopText>
            <h1>{el.roadAddr}</h1>
          </TopText>
          <BottomText>
            <span>지번</span>
            <p>{el.jibunAddr}</p>
          </BottomText>
        </LeftBox>
        <RightBox>
          <h1>{el.zipNo}</h1>
        </RightBox>
      </ListBox>
    ));
  };
  return <>{listSearchAddress()}</>;
};

const ListBox = styled.div`
  width: 100%;
  height: auto;
  background-color: #fff;
  border-bottom: 1px solid #f6f6f6;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
  margin-bottom: 8px;
  cursor: pointer;

  :last-child {
    margin-bottom: 0;
  }
`;

const LeftBox = styled.div`
  width: 80%;
  height: 100%;
  border-bottom: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0;
`;

const TopText = styled(ListBox)`
  width: 100%;
  height: 50%;
  min-height: 40px;
  border-bottom: 0;
  padding: 0;
  justify-content: flex-start;
  align-items: flex-end;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 0;
  padding-bottom: 4px;
  text-align: left;
`;

const BottomText = styled(TopText)`
  color: #7d7878;
  font-size: 12px;
  font-weight: 400;
  align-items: flex-start;
  padding-top: 4px;
  padding-bottom: 0px;

  span {
    height: 17px;
    font-weight: bold;
    font-size: 10px;
    padding: 0px 8px;
    background: #f6f6f6;
    border-radius: 32px;
    color: #b6b3b3;
    margin-right: 4px;
    white-space: nowrap;
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
