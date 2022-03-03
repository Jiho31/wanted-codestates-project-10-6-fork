import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GlobalStyles from './GlobalStyles';
import Main from './pages/Main';
import Apply from './pages/Apply';
import Schedule from './components/Schedule';
import styled from 'styled-components';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Wrapper>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/schedule" element={<Schedule />} />
        </Routes>
      </Wrapper>
    </Router>
  );
}

export default App;

const Wrapper = styled.div`
  background-color: rgba(28, 21, 1, 0.2);
  width: 360px;
  height: 812px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
`;

// 1rem 16px
// rem 루트 기준 크기?
