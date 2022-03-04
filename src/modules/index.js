import { combineReducers } from 'redux';
import page from './page';
import careType from './careType';
import careTime from './careTime';
import address from './address';
import activeButton from './activeButton';

const rootReducer = combineReducers({ careType, page, activeButton, address,careTime });
export default rootReducer;

//store 생성은 src/index.js에서

//돌봄유형 "careType" => 'part', 'full'
//시작일 종료일 "startDate", "endDate"
//시작 시간 "startTime"
//돌봄 시간 "careTime"
//주소 "address"
