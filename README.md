
## 모듈
- React `$ npx creat-react-app template`
- React-router-dom `$ npm i react-router-dom`
- styled-component `$ npm install --save styled-component`
- styled-reset `$ npm i styled-reset`
: reset css 설정
- redux `$npm i redux`
- react-redux `$ npm install react-redux`
: react와 redux를 연결시켜준다. provider 사용
- redux-devtools-extension `$ npm i redux-devtools-extension` 
: 크롬개발자도구로 리덕스 상태관리 기록을 확인 할수 있게 해준다.
<div align="center"><img width="400px" src="https://images.velog.io/images/hinyc/post/de0c319d-21bc-48e1-a041-c5efb5499ce9/image.png"/></div>
  
<div align="center"><img width="250px" src="https://images.velog.io/images/hinyc/post/f353854e-4903-4827-ba20-5cb7c61007cb/image.png"/></div>
  

## 설정 추가
### reset css 설정
#### `GlobalStyles.js` component 생성
```jsx
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
const GlobalStyles = createGlobalStyle` 
  ${reset}
    a{
        text-decoration: none;
        color: inherit;
    }
    *{
        box-sizing: border-box;
    }
    ::-webkit-scrollbar {
      display: none;
    }
    input, textarea { 
      -moz-user-select: auto;
      -webkit-user-select: auto;
      -ms-user-select: auto;
      user-select: auto;
    }
    input {
      border: none;
    }
    button {
      border: none;
      background: none;
      padding: 0;
      cursor: pointer;
    }
`;

export default GlobalStyles;

```

**App component에 GlobalStyles Comoponet 추가**
<div align="center"><img width="600px" src="https://images.velog.io/images/hinyc/post/decfa986-f57c-4496-b4ea-7ad967ed7b33/image.png"/></div>


### prettirerc 설정

<img width="150px" src="https://images.velog.io/images/hinyc/post/44f7e756-d3f1-472a-b1df-fbf9d26d5fc9/image.png"/>

```js
{
  "singleQuote": true,
  "semi": true,
  "useTabs": false,
  "tabWidth": 2,
  "trailingComma": "all",
  "printWidth": 200
}
```

## redux store 생성
```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import rootReducer from './modules';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
//!Provider를 이용해 <App/> 을 감싸면 모든 컴포넌트에서 store에 접근 가능

const store = createStore(rootReducer, composeWithDevTools());
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
```
