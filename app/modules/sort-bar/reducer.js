import { SORTING_TYPES } from "./constants";
import { DAILY_TODOS_ACTIONS } from "../daily-todos/reducer";
import { get } from "lodash";

export const SORT_BAR_ACTIONS = {
  SET_PRIORITY_SORTING: "SET_PRIORITY_SORTING",
  SET_LEVEL_SORTING: "SET_LEVEL_SORTING",
  SET_DATE_SORTING: "SET_DATE_SORTING"
};

const initialState = {
  type: SORTING_TYPES.DATE,
  incrDecr: SORTING_TYPES.DECR
};

const setDateSorting = state => {
  const incrDecr =
    get(state, "incrDecr") === SORTING_TYPES.DECR
      ? SORTING_TYPES.INCR
      : SORTING_TYPES.DECR;
  return { type: SORTING_TYPES.DATE, incrDecr };
};

const setLevelSorting = state => {
  const incrDecr =
    get(state, "incrDecr") === SORTING_TYPES.DECR
      ? SORTING_TYPES.INCR
      : SORTING_TYPES.DECR;
  return { type: SORTING_TYPES.LEVEL, incrDecr };
};

const setPrioritySorting = state => {
  const incrDecr =
    get(state, "incrDecr") === SORTING_TYPES.DECR
      ? SORTING_TYPES.INCR
      : SORTING_TYPES.DECR;
  return { type: SORTING_TYPES.PRIORITY, incrDecr };
};

export const sortBarReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case DAILY_TODOS_ACTIONS.SET_LEVEL_SORTING:
      return setLevelSorting(state);
    case DAILY_TODOS_ACTIONS.SET_PRIORITY_SORTING:
      return setPrioritySorting(state);
    case DAILY_TODOS_ACTIONS.SET_DATE_SORTING:
      return setDateSorting(state);
    default:
      return state;
  }
};
