//* 액션 타입 만들기
const SET_PART = 'careType/SET_PART';
const SET_FULL = 'careType/SET_FULL';

//* 액션 생성함수 만들기
//!export 키워드로 내보내기
export const setPart = () => ({ type: SET_PART });
export const setFull = () => ({ type: SET_FULL });

//* 초기상태선언
const initialState = '';

//* 리듀셔 선언
//! export default 로 내보내기
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_PART:
      return 'part';
    case SET_FULL:
      return 'full';
    default:
      return state;
  }
}
