import { connect } from "react-redux";
import { getOpenModals } from "modules/modals/selectors";
import { INFO_BUTTON_MODAL_NAME } from "./constants";
import { InfoButtonModal as Component } from "./info-button-modal";

const mapStateToProps = state => ({
  params: getOpenModals(state)[INFO_BUTTON_MODAL_NAME]
});

export const InfoButtonModal = connect(mapStateToProps)(Component);
