import { createSelector } from "reselect";
import { prop } from "utils";
import { MODALS_NAMESPACE } from "./constants";
import { INFO_BUTTON_MODAL_NAME } from "../../modals/info-button-modal/constants";

const getModalsDomain = prop(MODALS_NAMESPACE, {});

export const getOpenModals = createSelector(
  getModalsDomain,
  prop("openModals", {})
);

export const getInfoButtonModalParams = createSelector(
  getOpenModals,
  prop(INFO_BUTTON_MODAL_NAME, {})
);
