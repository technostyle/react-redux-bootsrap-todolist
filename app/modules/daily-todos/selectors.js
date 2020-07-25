import { createSelector } from "reselect";
import { prop } from "utils";
import { DAILY_TODOS_NAMESPACE } from "./constants";

const getDailyTodosDomain = prop(DAILY_TODOS_NAMESPACE, {});

export const getDailyTodos = createSelector(
  getDailyTodosDomain,
  prop("todos", [])
);

export const getSortingParams = createSelector(
  getDailyTodosDomain,
  prop("sorting")
);
