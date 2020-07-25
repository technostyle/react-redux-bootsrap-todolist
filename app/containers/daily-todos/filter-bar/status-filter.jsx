import React from "react";
import Navbar from "react-bootstrap/Navbar";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import { FILTER_TYPES } from "modules/status-filter-bar/constants";

export const StatusFilter = ({ activeFilter, onFilterChange }) => (
  <Navbar>
    <ToggleButtonGroup
      type="checkbox"
      value={activeFilter}
      onChange={onFilterChange}
    >
      <ToggleButton size="sm" variant="outline-dark" value={FILTER_TYPES.ALL}>
        ALL
      </ToggleButton>
      <ToggleButton
        size="sm"
        variant="outline-dark"
        value={FILTER_TYPES.UNCOMPLETE}
      >
        TODO
      </ToggleButton>
      <ToggleButton
        size="sm"
        variant="outline-dark"
        value={FILTER_TYPES.COMPLETE}
      >
        DONE
      </ToggleButton>
    </ToggleButtonGroup>
  </Navbar>
);
