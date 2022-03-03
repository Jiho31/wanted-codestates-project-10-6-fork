import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GlobalStyles from './GlobalStyles';
import Main from './pages/Main';
import styled from 'styled-component';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Routes>
        <Wrapper>
          <Route path="/" element={<Main />} />
        </Wrapper>
      </Routes>
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
`;
