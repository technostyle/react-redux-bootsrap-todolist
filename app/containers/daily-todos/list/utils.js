import { noop } from "lodash";
import { FILTER_TYPES } from "modules/daily-todos/constants";

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

export const sortTodoCreator = activeFilter => {
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
