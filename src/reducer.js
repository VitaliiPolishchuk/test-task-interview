import * as actions from "./actions";

export const initialState = {
  users: [],
  page: 1,
  isLoading: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case actions.ADD_USERS:
      return {
        ...state,
        users: [...state.users, ...action.users],
        page: action.isNext ? state.page + 1 : null,
      };
    case actions.REMOVE_USERS:
      return {
        ...state,
        users: [],
        page: 1,
      };
    case actions.SET_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case actions.REMOVE_LOADING:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default reducer;
