import { get } from "lodash";
import { FILTER_TYPES } from "modules/status-filter-bar/constants";
import { SORTING_TYPES } from "modules/sort-bar/constants";
import { isToday } from "utils";

export const filterTodoCreator = activeFilter => {
  switch (activeFilter) {
    case FILTER_TYPES.ALL:
      return () => true;
    case FILTER_TYPES.COMPLETE:
      return ({ complete }) => complete;
    case FILTER_TYPES.UNCOMPLETE:
      return ({ complete }) => !complete;
    default:
      return () => false;
  }
};

const mapSortTypeToTodoProp = {
  [SORTING_TYPES.DATE]: "id",
  [SORTING_TYPES.LEVEL]: "level",
  [SORTING_TYPES.PRIORITY]: "priority"
};

const propComparatorCreator = (prop, isIncr) =>
  isIncr
    ? (a, b) => get(a, prop) - get(b, prop)
    : (b, a) => get(a, prop) - get(b, prop);

export const sortParamsComparator = (sortingParams = {}) => {
  const { type, incrDecr } = sortingParams;

  return propComparatorCreator(
    mapSortTypeToTodoProp[type],
    incrDecr === SORTING_TYPES.INCR
  );
};

export const onlyForTodayFilterCreator = onlyForToday =>
  onlyForToday ? ({ startDay }) => !!startDay && isToday(startDay) : () => true;
