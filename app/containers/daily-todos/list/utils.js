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

export const statusSortCreator = activeFilter => {
  switch (activeFilter) {
    case FILTER_TYPES.ALL:
      return (a, b) => {
        if (a.complete && b.complete) {
          return 0;
        } else if (!a.complete && !b.complete) {
          return 0;
        } else if (a.complete && !b.complete) {
          return 1;
        } else if (!a.complete && b.complete) {
          return -1;
        }

        console.error("imposible error");
      };
    default:
      noop;
  }
};

const propComparatorCreator = (prop, isIncr) =>
  isIncr
    ? (a, b) => get(a, prop) - get(b, prop)
    : (b, a) => get(a, prop) - get(b, prop);

export const sortParamsComparator = (sortingParams = {}) => {
  const { type, incrDecr } = sortingParams;
  if (!type) {
    return dateSort;
  }

  return propComparatorCreator(
    type.toLowerCase(),
    incrDecr === SORTING_TYPES.INCR
  );
};
