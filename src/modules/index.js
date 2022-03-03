import { combineReducers } from 'redux';
import counter from './counter';
//! 한프로젝트에 리듀서가 여러개일경우 한 리듀서로 합쳐사용한다.
//! 합쳐진 리듀서를 루트 리듀서라고 부른다.

const rootReducer = combineReducers({ counter });

export default rootReducer;

//store 생성은 src/index.js에서

//돌봄유형 "careType" => 'part', 'full'
//시작일 종료일 "startDate", "endDate"
//시작 시간 "startTime"
//돌봄 시간 "careTime"
//주소 "address"
