import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setFilter } from "modules/status-filter-bar/actions";
import { getActiveFilter } from "modules/status-filter-bar/selectors";
import { StatusFilter as Component } from "./status-filter";

const mapStateToProps = state => ({
  activeFilter: getActiveFilter(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ setFilter }, dispatch);

export const StatusFilter = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
