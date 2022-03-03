export const NEXT_PAGE = 'page/NEXT_PAGE';
export const PREV_PAGE = 'page/PREV_PAGE';

const initialState = {
  pageNum: 0,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case NEXT_PAGE:
      if (state.pageNum > 3) {
        return {
          ...state,
        };
      }
      return {
        pageNum: state.pageNum + 1,
      };

    case PREV_PAGE:
      if (state.pageNum < 1) {
        return { ...state };
      }
      return {
        pageNum: state.pageNum - 1,
      };
    default:
      return state;
  }
}
