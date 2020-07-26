import { SORTING_TYPES } from "./constants";
import { get } from "lodash";

export const SORT_BAR_ACTIONS = {
  SET_SORTING: "SET_SORTING"
};

const initialState = {
  type: SORTING_TYPES.DATE,
  incrDecr: SORTING_TYPES.DECR
};

const setSorting = (state, payload) => {
  const incrDecr =
    get(state, "incrDecr") === SORTING_TYPES.DECR
      ? SORTING_TYPES.INCR
      : SORTING_TYPES.DECR;
  console.log({ payload, incrDecr });

  return { type: payload, incrDecr };
};

export const sortBarReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SORT_BAR_ACTIONS.SET_SORTING:
      return setSorting(state, payload);
    default:
      return state;
  }
};
