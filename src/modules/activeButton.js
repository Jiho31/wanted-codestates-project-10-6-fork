const initialState = {
  activateBtn: false,
  number: '',
};
export const PHONE_NUMBER = 'activeButton/PHONE_NUMBER';
export const CLICK_NEXT = 'activeButton/CLICK_NEXT';
export const CLICK_PREV = 'activeButton/CLICK_PREV';
export const phoneNumberChange = (pnumber) => ({ type: PHONE_NUMBER, pnumber });
export const clickNext = () => ({
  type: CLICK_NEXT,
});
export const clickPrev = () => ({
  type: CLICK_PREV,
});

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
