import React from "react";
import { Button, ButtonGroup, ButtonToolbar } from "react-bootstrap";

export const SortBar = ({ onLevelSort, onPrioritySort, onDateSort }) => (
  <ButtonToolbar className="mb-3" aria-label="Toolbar with Button groups">
    <ButtonGroup className="mr-2" aria-label="First group">
      <Button variant="secondary" onClick={onDateSort}>
        Date sort
      </Button>{" "}
      <Button variant="secondary" onClick={onLevelSort}>
        Lvl sort
      </Button>{" "}
      <Button variant="secondary" onClick={onPrioritySort}>
        Prt sort
      </Button>{" "}
    </ButtonGroup>
  </ButtonToolbar>
);
