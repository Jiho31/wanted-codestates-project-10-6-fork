const SET_ADDRESS = 'address/SET_ADDRESS';

export const setAddress = (addr) => ({ type: SET_ADDRESS, addr });

const initialState = '';

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_ADDRESS:
      return action.addr;
    default:
      return state;
  }
}
