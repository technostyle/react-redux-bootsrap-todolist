import { createSelector } from "reselect";
import { prop } from "utils";
import { STATUS_FILTER_NAMESPACE } from "./constants";

const getStatusFilterDomain = prop(STATUS_FILTER_NAMESPACE, {});

export const getActiveFilter = createSelector(
  getStatusFilterDomain,
  prop("filter", null)
);
