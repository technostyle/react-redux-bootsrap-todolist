import { createSelector } from "reselect";
import { prop } from "utils";
import { identity } from "lodash";
import { SORT_BAR_NAMESPACE } from "./constants";

const getSortBarDomain = prop(SORT_BAR_NAMESPACE, {});

export const getSortingParams = createSelector(getSortBarDomain, identity);
