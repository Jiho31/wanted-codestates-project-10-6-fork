import React from 'react';
import SelectBox from 'components/SelectBox';
import styled from 'styled-components';

export default function Apply() {
  return (
    <div>
      apply
      <BoxWrapper>
        <SelectBox icon="🌞">24시간 상주</SelectBox>
        <SelectBox icon="⏰">시간제 돌봄</SelectBox>
      </BoxWrapper>
    </div>
  );
}
const BoxWrapper = styled.div`
  display: flex;
`;
