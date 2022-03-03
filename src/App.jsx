import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GlobalStyles from './GlobalStyles';
import Main from './pages/Main';
import styled from 'styled-components';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Wrapper>
        <Routes>
          <Route path="/" element={<Main />} />
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
  margin: auto;
`;
