export const NEXT_PAGE = 'page/NEXT_PAGE';
export const PREV_PAGE = 'page/PREV_PAGE';
export const PAGE_INIT = 'page/PAGE_INIT';

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
    case PAGE_INIT:
      return {
        pageNum: 0,
      };
    default:
      return state;
  }
}
