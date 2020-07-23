import { get, noop } from "lodash";
import { FILTER_TYPES, SORTING_TYPES } from "modules/daily-todos/constants";

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
