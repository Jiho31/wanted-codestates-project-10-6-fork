import { combineReducers } from 'redux';
import page from './page';
import careTime from './careTime';
import address from './address';
import activeButton from './activeButton';
import careDate from './careDate';


const rootReducer = combineReducers({
  careType,
  page,
  activeButton,
  address,
  careTime,
  careDate,
});

export default rootReducer;

//store 생성은 src/index.js에서

//돌봄유형 "careType" => 'part', 'full'
//시작일 종료일 "startDate", "endDate"
//시작 시간 "startTime"
//돌봄 시간 "careTime"
//주소 "address"
// 버튼 활성화 "activeButton"
// -> careType 은 activeButton 내부에서 처리
