import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import SearchIcon from 'assets/searchIcon.svg';
import SearchAddress from './SearchAddress';
import { setUserAddress } from 'modules/address';

const Address = () => {
  const dispatch = useDispatch();
  // 주소 검색 모달 상태관리
  const [isOpen, setIsOpen] = useState(false);
  // 상세 주소 입력 값
  const detailAddress = useRef('');
  // 상세 주소 리덕스 상태 저장
  const onSetUserAddress = () => {
    dispatch(setUserAddress(detailAddress.current.value));
  };
  // useSelector를 활용하여 console.log 확인하기
  // console.log(useSelector((state) => state.address));

  // 모달 오픈 핸들러
  const openHandler = (Event) => {
    setIsOpen(!isOpen);
  };
  // 검색 후 유저가 선택한 주소 useSelector를 사용하여 choiceAddress에 저장
  const choiceAddress = useSelector((state) => state.address.roadAddr);

  // 유저가 작성한 상세주소를 onBlur사용으로 인풋 포커스가 벗어났을 시 setUserAddress실행

  return (
    <>
      <AddressBox>
        <AddressTop>
          <MainAddress widthMargin={choiceAddress} onClick={openHandler}>
            {!choiceAddress ? (
              <div>주소 또는 건물명으로 검색</div>
            ) : (
              <div className="choicaAddressFontColor">
                {choiceAddress.split(' ').slice(0, 3).join(' ')}
              </div>
            )}
          </MainAddress>
          {!choiceAddress ? null : (
            <AddBTN widthMargin={choiceAddress} onClick={openHandler}>
              재검색
            </AddBTN>
          )}
        </AddressTop>
        <AddressBottom>
          <DetailedAddress
            ref={detailAddress}
            onBlur={onSetUserAddress}
            placeholder="상세 주소를 입력해주세요"
          />
        </AddressBottom>
      </AddressBox>
      {isOpen ? (
        <SearchAddress
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          openHandler={openHandler}
        />
      ) : null}
    </>
  );
};

const AddressBox = styled.div`
  width: 100%;
  height: auto;
`;

const AddressTop = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MainAddress = styled.div`
  ${(props) => (props.widthMargin ? 'width: 78%' : 'width: 100%')};
  ${(props) => (props.widthMargin ? 'margin-right: 2%;' : 'margin-right: 0;')};
  height: 48px;
  padding: 0 16px;
  border: 1px solid #eeeeee;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  cursor: text;
  background-image: url(${SearchIcon});
  background-repeat: no-repeat;
  background-position: 16px center;

  div {
    width: 90%;
    padding-top: 2px;
    margin-left: 30px;
    white-space: nowrap;
    color: #b6b3b3;
  }

  .choicaAddressFontColor {
    color: #5b5555;
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

const DetailedAddress = styled.input`
  width: 100%;
  height: 48px;
  padding: 0 16px;
  border: 1px solid #eeeeee;
  border-radius: 4px;
  cursor: text;

  ::placeholder {
    padding-left: 0;
    background-image: none;
    color: #b6b3b3;
  }
`;

export default Address;
