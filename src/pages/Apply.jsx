import ChecknPhoneNumber from 'components/ChecknPhoneNumber';
import React from 'react';
import CareSelectBoxes from 'components/CareSelectBoxes';
import Address from 'components/Address';

export default function Apply() {
  return (
    <>
     <CareSelectBoxes />
      <ChecknPhoneNumber />
      <Address />
    </>
  );
}
