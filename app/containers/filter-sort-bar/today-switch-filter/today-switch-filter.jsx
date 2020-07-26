import React, { useState } from "react";
import {
  ButtonGroup,
  ButtonToolbar,
  Navbar,
  ToggleButton
} from "react-bootstrap";

export const TodaySwitchFilter = ({ toggleTodayFilter, active }) => {
  const [checked, setChecked] = useState(active);
  const onChange = event => {
    setChecked(event.currentTarget.checked);
    toggleTodayFilter();
  };

  return (
    <Navbar>
      <ButtonToolbar className="mb-2" aria-label="Toolbar with Button groups">
        <ButtonGroup toggle className="mb-2">
          <ToggleButton
            type="checkbox"
            variant={checked ? "secondary" : "outline-secondary"}
            checked={checked}
            onChange={onChange}
          >
            Only Today
          </ToggleButton>
        </ButtonGroup>{" "}
      </ButtonToolbar>
    </Navbar>
  );
};
