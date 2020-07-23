import React from "react";
import { Button, ButtonGroup, ButtonToolbar } from "react-bootstrap";
import { ArrowDown, ArrowUp } from "react-bootstrap-icons";
import { SORTING_TYPES } from "modules/daily-todos/constants";

const Arrow = ({ incrDecr }) =>
  [SORTING_TYPES.INCR, SORTING_TYPES.DECR].includes(incrDecr) ? (
    incrDecr === SORTING_TYPES.INCR ? (
      <ArrowUp />
    ) : (
      <ArrowDown />
    )
  ) : null;

export const SortBar = ({
  onLevelSort,
  onPrioritySort,
  onDateSort,
  sortingParams
}) => {
  const { type, incrDecr } = sortingParams || {};
  return (
    <ButtonToolbar className="mb-3" aria-label="Toolbar with Button groups">
      <ButtonGroup className="mr-2" aria-label="First group">
        <Button variant="secondary" onClick={onDateSort}>
          {type === SORTING_TYPES.DATE && <Arrow incrDecr={incrDecr} />}
          <span>Date</span>
        </Button>
        <Button variant="secondary" onClick={onLevelSort}>
          {type === SORTING_TYPES.LEVEL && <Arrow incrDecr={incrDecr} />}
          Lvl
        </Button>{" "}
        <Button variant="secondary" onClick={onPrioritySort}>
          {type === SORTING_TYPES.PRIORITY && <Arrow incrDecr={incrDecr} />}
          Prt
        </Button>{" "}
      </ButtonGroup>
    </ButtonToolbar>
  );
};
