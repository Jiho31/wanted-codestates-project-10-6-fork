const SET_ADDRESS = 'address/SET_ADDRESS';
const USER_ADDRESS = 'address/USER_ADDRESS';
const ADDRESS_INIT = 'address/ADDRESS_INIT';

export const setAddress = (addr) => ({ type: SET_ADDRESS, addr });
export const setUserAddress = (addr) => ({ type: USER_ADDRESS, addr });
export const addressInit = (addr) => ({ type: ADDRESS_INIT, addr });

const initialState = {
  roadAddr: null,
  jibunAddr: null,
  userAddr: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_ADDRESS:
      return {
        ...state,
        roadAddr: action.addr.roadAddr,
        jibunAddr: action.addr.jibunAddr,
      };
    case USER_ADDRESS:
      return {
        ...state,
        userAddr: action.addr,
      };
    case ADDRESS_INIT:
      return {
        roadAddr: null,
        jibunAddr: null,
        userAddr: null,
      };
    default:
      return state;
  }
}
