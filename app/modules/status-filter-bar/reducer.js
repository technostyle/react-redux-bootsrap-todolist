import { FILTER_TYPES } from "./constants";

export const STATUS_FILTER_ACTIONS = {
  SET_FILTER: "SET_FILTER",
  SET_TODAY_FILTER: "SET_TODAY_FILTER"
};

const initialState = {
  filter: FILTER_TYPES.ALL,
  showOnlyForToday: false
};

const setFilter = (state, payload) => {
  const [prev, cur] = payload;
  if (!cur) {
    return state;
  }

  return { ...state, filter: cur };
};

const setTodayFilter = state => {
  console.log({ state });
  return { ...state, showOnlyForToday: !state.showOnlyForToday };
  console.log({ state });
};

export const statusFilterReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case STATUS_FILTER_ACTIONS.SET_FILTER:
      return setFilter(state, payload);
    case STATUS_FILTER_ACTIONS.SET_TODAY_FILTER:
      return setTodayFilter(state);
    default:
      return state;
  }
};
