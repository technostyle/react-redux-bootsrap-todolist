import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getInfoButtonModalParams } from "modules/modals/selectors";
import { closeModal } from "modules/modals/actions";
import { InfoButtonModal as Component } from "./info-button-modal";

const mapStateToProps = state => ({
  params: getInfoButtonModalParams(state)
});

const madDispatchToProps = dispatch =>
  bindActionCreators({ closeModal }, dispatch);

export const InfoButtonModal = connect(
  mapStateToProps,
  madDispatchToProps
)(Component);
