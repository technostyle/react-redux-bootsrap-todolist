import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  setLevelSorting,
  setPrioritySorting,
  setDateSorting
} from "modules/sort-bar/actions";
import { getSortingParams } from "modules/sort-bar/selectors";
import { SortBar as Component } from "./sort-bar";

const mapStateToProps = state => ({
  sortingParams: getSortingParams(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setLevelSorting,
      setPrioritySorting,
      setDateSorting
    },
    dispatch
  );

export const SortBar = connect(mapStateToProps, mapDispatchToProps)(Component);
