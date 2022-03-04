import reducer from './page';

const SET_START_TIME = 'careTime/SET_START_TIME';
const SET_CARE_TIME = 'careTime/SET_CARE_TIME';

export const setStartTime = (start) => ({
  type: SET_START_TIME,
  start,
});
export const setCareTime = (care) => ({
  type: SET_CARE_TIME,
  care,
});

const initialState = {};

export default function careTime(state = initialState, action) {
  switch (action.type) {
    case SET_START_TIME:
      return { ...state, startTime: action.start };
    case SET_CARE_TIME:
      return { ...state, careTime: action.care };
    default:
      return state;
  }
}
