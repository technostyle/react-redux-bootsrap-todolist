import React, { useState } from "react";
import {
  ButtonGroup,
  ButtonToolbar,
  Navbar,
  OverlayTrigger,
  ToggleButton,
  Tooltip
} from "react-bootstrap";
import { Calendar } from "react-bootstrap-icons";

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
            size="sm"
          >
            <OverlayTrigger
              placement="bottom"
              overlay={
                <Tooltip id={"level-select-tooltip"}>
                  Scheduled for today
                </Tooltip>
              }
            >
              <Calendar size={20} />
            </OverlayTrigger>
          </ToggleButton>
        </ButtonGroup>{" "}
      </ButtonToolbar>
    </Navbar>
  );
};
