import React from 'react';
import SelectBox from 'components/SelectBox';
import styled from 'styled-components';
import Time from 'assets/time.svg';
import Sun from 'assets/sun.svg';
import { useDispatch } from 'react-redux';
import { setPart, setFull } from 'modules/careType';

export default function CareSelectBoxes() {
  const dispatch = useDispatch();

  const onSetPart = () => dispatch(setPart());
  const onSetFull = () => dispatch(setFull());

  return (
    <div>
      <BoxWrapper>
        <div onClick={onSetFull}>
          <SelectBox icon={Time}>24시간 상주</SelectBox>
        </div>
        <div onClick={onSetPart}>
          <SelectBox icon={Sun}>시간제 돌봄</SelectBox>
        </div>
      </BoxWrapper>
    </div>
  );
}
const BoxWrapper = styled.div`
  display: flex;
`;
