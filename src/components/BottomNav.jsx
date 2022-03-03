import { clickNext, clickPrev } from 'modules/activeButton';
import { NEXT_PAGE, PREV_PAGE } from 'modules/page';
import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

const BottomNav = () => {
  const dispatch = useDispatch();
  const handleNextPage = () => {
    dispatch({ type: NEXT_PAGE });
    dispatch(clickNext());
  };
  const handlePrevPage = () => {
    dispatch({ type: PREV_PAGE });
    dispatch(clickPrev());
  };
  const checkN = useSelector((state) => state.activeButton.activateBtn);

  return (
    <Nav>
      <PrevButton onClick={handlePrevPage}>이전</PrevButton>
      <NextButton
        className="unabled"
        onClick={handleNextPage}
        disabled={!checkN}
      >
        다음
      </NextButton>
    </Nav>
  );
};

const Nav = styled.div`
  width: 100%;
  height: 64px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
`;
const PrevButton = styled.button`
  width: 58px;
  height: 48px;
  padding: 10px 12px;
  color: #7d7878;
  font-size: 14px;
  font-weight: bold;
`;
const NextButton = styled.button`
  width: 278px;
  height: 48px;
  border-radius: 4px;
  background-color: #ff8450;
  color: #fff;
  font-size: 14px;
  font-weight: bold;

  &.unabled {
    background-color: #e2e2e2;
    color: #b6b3b3;
  }
`;

export default BottomNav;
