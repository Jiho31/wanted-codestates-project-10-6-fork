const SET_START_DATE = 'careDate/SET_START_DATE';
const SET_END_DATE = 'careDate/SET_END_DATE';
const SET_SHOW_CALENDAR = 'careDate/SHOW_CALENDAR';
const DATE_INIT = 'careDate/DATE_INIT';

export const setStartDate = (year, month, date) => ({
  type: SET_START_DATE,
  year,
  month,
  date,
});
export const setEndDate = (year, month, date, set) => ({
  type: SET_END_DATE,
  year,
  month,
  date,
  set,
});
export const setShowCalendar = () => ({ type: SET_SHOW_CALENDAR });
export const dateInit = () => ({ type: DATE_INIT });

const initialState = {
  startDate: { year: null, month: null, date: null, set: false },
  endDate: { year: null, month: null, date: null, set: false },
  showCalendar: false,
};

export default function careDate(state = initialState, action) {
  switch (action.type) {
    case SET_START_DATE:
      return {
        ...state,
        startDate: {
          year: action.year,
          month: action.month,
          date: action.date,
          set: true,
        },
      };
    case SET_END_DATE:
      return {
        ...state,
        endDate: {
          year: action.year,
          month: action.month,
          date: action.date,
          set: action.set === undefined ? true : false,
        },
      };
    case DATE_INIT:
      return {
        startDate: { year: null, month: null, date: null, set: false },
        endDate: { year: null, month: null, date: null, set: false },
        showCalendar: false,
      };
    case SET_SHOW_CALENDAR:
      return { ...state, showCalendar: !state.showCalendar };
    default:
      return state;
  }
}
