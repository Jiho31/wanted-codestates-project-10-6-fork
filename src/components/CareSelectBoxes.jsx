import React from 'react';
import SelectBox from 'components/SelectBox';
import styled from 'styled-components';
import Time from 'assets/time.svg';
import Sun from 'assets/sun.svg';

export default function CareSelectBoxes() {
  return (
    <div>
      <BoxWrapper>
        <SelectBox icon={Time}>24시간 상주</SelectBox>
        <SelectBox icon={Sun}>시간제 돌봄</SelectBox>
      </BoxWrapper>
    </div>
  );
}
const BoxWrapper = styled.div`
  display: flex;
`;
