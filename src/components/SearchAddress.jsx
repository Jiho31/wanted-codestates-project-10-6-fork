import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { debounce } from 'lodash';
import { FaSearch } from 'react-icons/fa';
import AddressList from './AddressList';

const SearchAddress = ({ openHandler, setIsOpen }) => {
  const addAddress = useRef(null);
  const [datas, setDatas] = useState();

  const autoSearch = () => {
    const fetchData = async (url) => {
      const { data } = await axios.get(url);
      setDatas(data.results.juso);
    };
    fetchData(
      `https://www.juso.go.kr/addrlink/addrLinkApi.do?currentPage=1&countPerPage=10&keyword=${addAddress.current.value}&confmKey=${process.env.REACT_APP_API_KEY}&resultType=json`,
    );
    // 데이터 확인
    // console.log(datas);
  };
  // 디바운스 - api 요청 딜레이
  const debounceOnChange = debounce(autoSearch, 350);

  // 주소 컴포넌트 필터링
  const onOff = () => {
    if (!datas) return true;
    if (datas.length === 0) return true;
    return false;
  };

  return (
    <>
      <SearchAddressBox>
        <TitleBox>
          <LeftBox>
            <p>주소 검색</p>
          </LeftBox>
          <XBTN onClick={openHandler}>&#10005;</XBTN>
        </TitleBox>
        <TopBox>
          <SearchBox>
            <MainAddress
              placeholder="🔍 &nbsp; 주소 또는 건물명으로 검색"
              ref={addAddress}
              onChange={debounceOnChange}
            />
          </SearchBox>
          <TopAddressListBox>
            <AddressList datas={datas} setIsOpen={setIsOpen} />
          </TopAddressListBox>
          {onOff() && (
            <TopTextBox>
              <p>
                찾으시려는 도로명 주소의 건물번호 또는 시설명까지
                <br />
                상세히 입력 후 검색해주세요.
                <br />
                예) 중앙동, 불정로432번길
              </p>
            </TopTextBox>
          )}
        </TopBox>
        <BottomBox>
          <p>
            · 기본주소 선택 후 상세주소를 반드시 입력해주세요. 상세주소가 없는
            경우 주소지 특징을 입력해주세요.
            <br />
            · 2016년 8월 1일부터는 5가지 우편번호 사용이 의무화됩니다.
            <br />
            도로명주소 + 5자리 우편번호로 등록하셔서 서비스 이용에 불편함이
            없도록 하시길 바랍니다.
          </p>
        </BottomBox>
      </SearchAddressBox>
    </>
  );
};

const SearchAddressBox = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #fff;
  overflow: hidden;
  z-index: 9;
`;
const TitleBox = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  top: 0;
  left: 0;
`;

const LeftBox = styled(TitleBox)`
  p {
    font-size: 16px;
    font-weight: 500;
  }
`;

const XBTN = styled.div`
  width: 28px;
  height: 28px;
  text-align: right;
  line-height: 28px;
  font-weight: bold;
  position: absolute;
  right: 16px;
  cursor: pointer;
`;

const TopBox = styled.div`
  width: 100%;
  height: auto;
  margin-top: 8px;
`;

const SearchBox = styled.div`
  width: 100%;
  height: auto;
  padding: 0 16px;
  margin-bottom: 5px;
`;

const MainAddress = styled.input`
  width: 100%;
  height: 48px;
  padding: 0 16px;
  border: 1px solid #eeeeee;
  border-radius: 4px;
  cursor: text;

  ::placeholder {
    color: #b6b3b3;
    background-repeat: no-repeat;
    background-position: left center;
    background-size: 15px;
  }

  :focus {
    background-image: none;
  }
`;

const TopTextBox = styled(TitleBox)`
  width: 100%;
  height: 118px;
  color: #b6b3b3;
  font-size: 12px;
  line-height: 18px;
  text-align: center;
  margin: 0;
`;

const TopAddressListBox = styled(TopTextBox)`
  height: auto;
  max-height: 440px;
  overflow: scroll;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const BottomBox = styled(TopTextBox)`
  width: 100%;
  height: auto;
  min-height: 100%;
  background-color: #f6f6f6;
  align-items: flex-start;
  text-align: left;
  padding: 16px;
`;

export default SearchAddress;
