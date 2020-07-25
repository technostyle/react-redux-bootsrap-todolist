import { FILTER_TYPES } from "./constants";

export const STATUS_FILTER_ACTIONS = {
  SET_FILTER: "SET_FILTER"
};

const initialState = {
  filter: FILTER_TYPES.ALL
};

// TODO: create new reducer
const setFilter = (state, payload) => {
  const [prev, cur] = payload;
  if (!cur) {
    return state;
  }

  return { ...state, filter: cur };
};

export const statusFilterReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case STATUS_FILTER_ACTIONS.SET_FILTER:
      return setFilter(state, payload);
    default:
      return state;
  }
};
