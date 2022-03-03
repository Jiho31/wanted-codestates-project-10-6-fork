import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GlobalStyles from './GlobalStyles';
import Main from './pages/Main';
import Apply from './pages/Apply';
import styled from 'styled-components';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Wrapper>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/apply" element={<Apply />} />
        </Routes>
      </Wrapper>
    </Router>
  );
}

export default App;

const Wrapper = styled.div`
  width: 360px;
  height: 812px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 0px 16px 0px #0000000d;
  margin: auto;
`;

// 1rem 16px
// rem 루트 기준 크기?
