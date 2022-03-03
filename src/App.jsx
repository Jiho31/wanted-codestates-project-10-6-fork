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
  padding: 0 16px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
`;
