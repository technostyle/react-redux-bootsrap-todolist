import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getShouldShowOnlyForToday } from "modules/status-filter-bar/selectors";
import { toggleTodayFilter } from "modules/status-filter-bar/actions";
import { TodaySwitchFilter as Component } from "./today-switch-filter";

const mapStateToProps = state => ({
  active: getShouldShowOnlyForToday(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ toggleTodayFilter }, dispatch);
export const TodaySwitchFilter = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
