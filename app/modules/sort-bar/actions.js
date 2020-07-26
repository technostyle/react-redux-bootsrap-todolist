import { SORT_BAR_ACTIONS } from "./reducer";

export const setSorting = type => ({
  type: SORT_BAR_ACTIONS.SET_SORTING,
  payload: type
});
