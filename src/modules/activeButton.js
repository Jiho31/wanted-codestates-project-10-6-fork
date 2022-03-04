//* 초기상태선언
const initialState = {
  activateBtn: false,
  number: '',
  careType: '',
};

//* 액션 타입
const SET_PART = 'careType/SET_PART';
const SET_FULL = 'careType/SET_FULL';
export const PHONE_NUMBER = 'activeButton/PHONE_NUMBER';
export const CLICK_NEXT = 'activeButton/CLICK_NEXT';
export const CLICK_PREV = 'activeButton/CLICK_PREV';

//* 액션 생성함수
//!export 키워드로 내보내기
export const phoneNumberChange = (pnumber) => ({ type: PHONE_NUMBER, pnumber });
export const clickNext = () => ({
  type: CLICK_NEXT,
});
export const clickPrev = () => ({
  type: CLICK_PREV,
});
export const setPart = () => ({ type: SET_PART });
export const setFull = () => ({ type: SET_FULL });

//* 리듀서 선언
//! export default 로 내보내기
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case PHONE_NUMBER: {
      if (action.pnumber.length === 11) {
        return {
          ...state,
          activateBtn: true,
          number: action.pnumber,
        };
      } else {
        return {
          ...state,
          activateBtn: false,
          number: action.pnumber,
        };
      }
    }
    case SET_PART:
      return {
        ...state,
        activateBtn: true,
        careType: 'part',
      };
    case SET_FULL:
      return {
        ...state,
        activateBtn: true,
        careType: 'full',
      };
    case CLICK_NEXT: {
      return {
        ...state,
        activateBtn: false,
      };
    }
    case CLICK_PREV: {
      return {
        ...state,
        activateBtn: true,
      };
    }
    default:
      return state;
  }
}
