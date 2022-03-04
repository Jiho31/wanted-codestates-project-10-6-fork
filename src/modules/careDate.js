import { act } from 'react-dom/test-utils';
import { Switch } from 'react-router-dom';

const SET_START_DATE = 'careDate/SET_START_DATE';
const SET_END_DATE = 'careDate/SET_END_DATE';
const SET_SHOW_CALENDAR = 'careDate/SHOW_CALENDAR';

export const setStartDate = (startDate) => ({
  type: SET_START_DATE,
  startDate,
});
export const setEndDate = (endDate) => ({
  type: SET_END_DATE,
  endDate,
});
export const setShowCalendar = () => ({ type: SET_SHOW_CALENDAR });

const initialState = { startDate: null, endDate: null, showCalendar: false };

export default function careDate(state = initialState, action) {
  switch (action.type) {
    case SET_START_DATE:
      return { ...state, startDate: action.startDate };
    case SET_END_DATE:
      return { ...state, endDate: action.endDate };
    case SET_SHOW_CALENDAR:
      return { ...state, showCalendar: !state.showCalendar };
    default:
      return state;
  }
}
