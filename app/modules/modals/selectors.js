import { createSelector } from "reselect";
import { prop } from "utils";
import { MODALS_NAMESPACE } from "./constants";

const getModalsDomain = prop(MODALS_NAMESPACE, {});

export const getOpenModals = createSelector(
  getModalsDomain,
  prop("openModals", {})
);
