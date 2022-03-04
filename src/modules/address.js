const SET_ADDRESS = 'address/SET_ADDRESS';
const USER_ADDRESS = 'address/USER_ADDRESS';

export const setAddress = (addr) => ({ type: SET_ADDRESS, addr });
export const setUserAddress = (addr) => ({ type: USER_ADDRESS, addr });

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
    default:
      return state;
  }
}
