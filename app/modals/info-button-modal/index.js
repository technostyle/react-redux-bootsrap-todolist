import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getInfoButtonModalParams } from "modules/modals/selectors";
import { closeModal } from "modules/modals/actions";
import { addDescription } from "modules/daily-todos/actions";
import { InfoButtonModal as Component } from "./info-button-modal";

const mapStateToProps = state => ({
  params: getInfoButtonModalParams(state)
});

const madDispatchToProps = dispatch =>
  bindActionCreators({ closeModal, addDescription }, dispatch);

export const InfoButtonModal = connect(
  mapStateToProps,
  madDispatchToProps
)(Component);
