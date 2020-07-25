import { SORT_BAR_ACTIONS } from "./reducer";

// TODO: combine actions once sort filter-sort-bar is rewritten with hooks
export const setPrioritySorting = () => ({
  type: SORT_BAR_ACTIONS.SET_PRIORITY_SORTING
});

export const setLevelSorting = () => ({
  type: SORT_BAR_ACTIONS.SET_LEVEL_SORTING
});

export const setDateSorting = () => ({
  type: SORT_BAR_ACTIONS.SET_DATE_SORTING
});
