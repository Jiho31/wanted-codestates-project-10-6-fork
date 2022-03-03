import React from 'react';
import SelectBox from 'components/SelectBox';
import styled from 'styled-components';
import { ReactComponent as Time } from 'assets/time.svg';
import { ReactComponent as Sun } from 'assets/sun.svg';

export default function Apply() {
  return (
    <div>
      apply
      <BoxWrapper>
        <SelectBox icon={<Sun />}>24시간 상주</SelectBox>
        <SelectBox icon={<Time />}>시간제 돌봄</SelectBox>
      </BoxWrapper>
    </div>
  );
}
const BoxWrapper = styled.div`
  display: flex;
`;
