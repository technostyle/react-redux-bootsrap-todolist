import { createSelector } from "reselect";
import { prop } from "utils";

const getDailyTodosDomain = prop("dailyTodos", {});

export const getDailyTodos = createSelector(
  getDailyTodosDomain,
  prop("todos", [])
);

export const getActiveFilter = createSelector(
  getDailyTodosDomain,
  prop("filter", null)
);

export const getSortingParams = createSelector(
  getDailyTodosDomain,
  prop("sorting")
);
