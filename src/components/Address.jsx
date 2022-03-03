import React, { useState } from 'react';
import styled from 'styled-components';
import SearchIcon from 'Assets/searchIcon.svg';
import SearchAddress from './SearchAddress';

const Address = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const openHandler = (Event) => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <AddressBox>
        <AddressTop>
          <MainAddress
            placeholder="주소 또는 건물명으로 검색"
            onClick={openHandler}
          />
          <AddBTN>재검색</AddBTN>
        </AddressTop>
        <AddressBottom>
          <DetailedAddress
            placeholder="상세 주소를 입력해주세요"
            onClick={openHandler}
          />
        </AddressBottom>
      </AddressBox>
      {isOpen ? (
        <SearchAddress isOpen={isOpen} openHandler={openHandler} />
      ) : null}
    </>
  );
};

const AddressBox = styled.div`
  width: 100%;
  height: auto;
  padding-top: 32px;
`;

const AddressTop = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MainAddress = styled.input`
  width: 78%;
  height: 48px;
  padding: 0 16px;
  border: 1px solid #eeeeee;
  border-radius: 4px;
  margin-right: 2%;
  cursor: text;

  ::placeholder {
    color: #b6b3b3;
    padding-left: 25px;
    background-image: url(${SearchIcon});
    background-repeat: no-repeat;
    background-position: left center;
    background-size: 15px;
  }

  :focus {
    background-image: none;
  }
`;

const AddBTN = styled.button`
  width: 20%;
  height: 48px;
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  background: #ff8450;
  border-radius: 4px;
`;

const AddressBottom = styled(AddressTop)`
  margin-top: 8px;
`;

const DetailedAddress = styled(MainAddress)`
  width: 100%;
  margin: 0;
  background: none;

  ::placeholder {
    padding-left: 0;
    background-image: none;
  }
`;

export default Address;
