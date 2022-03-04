import React, { useState } from 'react';
import styled from 'styled-components';
import ChecknPhoneNumber from 'components/ChecknPhoneNumber';
import CareSelectBoxes from 'components/CareSelectBoxes';
import Address from 'components/Address';
import PageTitle from 'components/PageTitle';
import Header from 'components/Header';
import BottomNav from 'components/BottomNav';
import { useSelector } from 'react-redux';
import Complete from 'components/Complete';
import Schedule from 'components/Schedule';

export default function Apply() {
  const pageNum = useSelector((state) => state.page.pageNum);
  return (
    <>
      <Header />
      <Container>
        {pageNum < 4 && <PageTitle index={pageNum} />}
        {pageNum === 0 && <CareSelectBoxes />}
        {pageNum === 1 && <Schedule />}

        {pageNum === 2 && <Address />}
        {pageNum === 3 && <ChecknPhoneNumber />}
        {pageNum === 4 && <Complete />}
      </Container>
      {pageNum < 4 && <BottomNav />}
    </>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 56px 0 64px 0;
`;
