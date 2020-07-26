import { STATUS_FILTER_ACTIONS } from "./reducer";

export const setFilter = filter => ({
  type: STATUS_FILTER_ACTIONS.SET_FILTER,
  payload: filter
});

export const toggleTodayFilter = () => ({
  type: STATUS_FILTER_ACTIONS.SET_TODAY_FILTER
});
