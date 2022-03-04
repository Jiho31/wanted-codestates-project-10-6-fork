import React from 'react';
import SelectBox from 'components/SelectBox';
import styled from 'styled-components';
import Time from 'assets/time.svg';
import Sun from 'assets/sun.svg';
import { useDispatch, useSelector } from 'react-redux';
import { setPart, setFull } from 'modules/activeButton';

export default function CareSelectBoxes() {
  const isActive = useSelector((state) => state.activeButton.isActive);

  const dispatch = useDispatch();

  const onSetFull = () => dispatch(setFull());
  const onSetPart = () => dispatch(setPart());

  return (
    <div>
      <BoxWrapper>
        <div onClick={onSetFull}>
          <SelectBox icon={Sun} isActive={isActive === 'full'}>
            24시간 상주
          </SelectBox>
        </div>
        <div onClick={onSetPart}>
          <SelectBox icon={Time} isActive={isActive === 'part'}>
            시간제 돌봄
          </SelectBox>
        </div>
      </BoxWrapper>
    </div>
  );
}
const BoxWrapper = styled.div`
  display: flex;
`;
