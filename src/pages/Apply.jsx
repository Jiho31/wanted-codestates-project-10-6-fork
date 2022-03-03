import React from 'react';
import styled from 'styled-components';
// 컴포넌트
import Header from 'components/Header';
import BottomNav from 'components/BottomNav';
import Address from 'components/Address';
import ChecknPhoneNumber from 'components/ChecknPhoneNumber';

export default function Apply() {
  return (
    <>
      <Header />
      <Container>
        {/* <ChecknPhoneNumber /> */}
        {/* <Address /> */}
      </Container>
      <BottomNav />
    </>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 56px 0 64px 0;
`;
